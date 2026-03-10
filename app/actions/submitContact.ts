'use server';

import { supabase } from '@/lib/supabase';

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  contact_method: string;
  mobile_number: string;
  message: string;
};

async function sendTelegramNotification(payload: ContactPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram env vars missing:', { token: !!token, chatId: !!chatId });
    return;
  }

  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const message = [
    '📩 <b>New Contact Form Submission</b>',
    '',
    `<b>Name:</b> ${esc(payload.name)}`,
    `<b>Email:</b> ${esc(payload.email || 'N/A')}`,
    `<b>Company:</b> ${esc(payload.company || 'N/A')}`,
    `<b>Contact Method:</b> ${esc(payload.contact_method)}`,
    `<b>Mobile:</b> ${esc(payload.mobile_number || 'N/A')}`,
    `<b>Message:</b> ${esc(payload.message || 'N/A')}`,
  ].join('\n');

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });
    const data = await res.json();
    if (!data.ok) {
      console.error('Telegram API error:', data);
    }
  } catch (err) {
    console.error('Telegram fetch failed:', err);
  }
}

export async function submitContact(payload: ContactPayload) {
  const { error } = await supabase.from('ContactForm').insert({
    name: payload.name || null,
    email: payload.email || null,
    company: payload.company || null,
    contact_method: payload.contact_method || null,
    mobile_number: payload.mobile_number || null,
    message: payload.message || null,
    request_company: 'Aevor Labs',
  });

  if (error) {
    return { success: false, error: error.message };
  }

  await sendTelegramNotification(payload);

  return { success: true };
}
