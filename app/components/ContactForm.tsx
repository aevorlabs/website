'use client';

import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { submitContact } from '@/app/actions/submitContact';
import SectionTag from './SectionTag';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';

type ContactData = {
  name: string;
  email: string;
  company: string;
  interest: string;
  contactMethod: 'Email' | 'Mobile' | 'WhatsApp' | 'Telegram';
  countryCode: string;
  mobile: string;
  message: string;
};

const countryCodes = [
  { label: 'SG +65', value: '+65' },
  { label: 'MY +60', value: '+60' },
  { label: 'ID +62', value: '+62' },
  { label: 'PH +63', value: '+63' },
  { label: 'TH +66', value: '+66' },
  { label: 'VN +84', value: '+84' },
  { label: 'IN +91', value: '+91' },
  { label: 'CN +86', value: '+86' },
  { label: 'HK +852', value: '+852' },
  { label: 'JP +81', value: '+81' },
  { label: 'KR +82', value: '+82' },
  { label: 'AU +61', value: '+61' },
  { label: 'UK +44', value: '+44' },
  { label: 'US +1', value: '+1' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactData>({
    defaultValues: {
      contactMethod: 'Email',
      countryCode: '+65',
    },
  });

  const contactMethod = useWatch({ control, name: 'contactMethod' });

  const isEmailRequired = contactMethod === 'Email';
  const isMobileRequired =
    contactMethod === 'Mobile' || contactMethod === 'WhatsApp' || contactMethod === 'Telegram';

  const onSubmit = async (data: ContactData) => {
    setSubmitting(true);
    setSubmitError('');

    const result = await submitContact({
      name: data.name,
      email: data.email,
      company: data.company,
      contact_method: data.contactMethod,
      mobile_number: data.mobile ? `${data.countryCode} ${data.mobile}` : '',
      message: data.message,
    });

    setSubmitting(false);

    if (!result.success) {
      setSubmitError(result.error || 'Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="w-full bg-white px-6 py-20 sm:px-12 lg:px-[120px] lg:py-[80px]"
    >
      {/* Header */}
      <div className="mx-auto flex flex-col items-center gap-3 text-center">
        <SectionTag label="CONTACT" />
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-[40px]">Get in Touch</h2>
        <p className="max-w-[580px] text-base leading-relaxed text-slate-500 lg:text-lg">
          Tell us about your team and training goals — we&apos;ll get back to you within one
          business day.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-12 flex max-w-[760px] flex-col gap-7 rounded-2xl border border-slate-200 bg-gray-50 p-8 sm:p-14"
      >
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-[#374151]">Name *</Label>
            <Input
              {...register('name', { required: true })}
              placeholder="Your full name"
              className={`h-11 rounded-lg border bg-white px-[14px] text-sm text-gray-900 placeholder:text-gray-400 ${errors.name ? 'border-red-400' : 'border-[#D1D5DB]'}`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-[#374151]">
              Email {isEmailRequired ? '*' : '(optional)'}
            </Label>
            <Input
              {...register('email', {
                required: isEmailRequired,
                pattern: /^\S+@\S+$/,
              })}
              placeholder="you@company.com"
              className={`h-11 rounded-lg border bg-white px-[14px] text-sm text-gray-900 placeholder:text-gray-400 ${errors.email ? 'border-red-400' : 'border-[#D1D5DB]'}`}
            />
          </div>
        </div>

        {/* Row 2: Company + Interest */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-[#374151]">Company (optional)</Label>
            <Input
              {...register('company')}
              placeholder="Your company name"
              className="h-11 rounded-lg border border-[#D1D5DB] bg-white px-[14px] text-sm text-gray-900 placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-[#374151]">I&apos;m Interested In *</Label>
            <Select
              defaultValue="Corporate Training"
              onValueChange={(val) => setValue('interest', val)}
            >
              <SelectTrigger className={errors.interest ? 'border-red-400' : ''}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Corporate Training">Corporate Training</SelectItem>
                <SelectItem value="1-on-1 Coaching">1-on-1 Coaching</SelectItem>
                <SelectItem value="On-Site">On-Site</SelectItem>
                <SelectItem value="Remote">Remote (Zoom)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Row 3: Preferred Contact + Mobile */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-[#374151]">
              Preferred Contact Method *
            </Label>
            <Select
              defaultValue="Email"
              onValueChange={(val) =>
                setValue('contactMethod', val as ContactData['contactMethod'])
              }
            >
              <SelectTrigger className={errors.contactMethod ? 'border-red-400' : ''}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Email">Email</SelectItem>
                <SelectItem value="Mobile">Mobile</SelectItem>
                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                <SelectItem value="Telegram">Telegram</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-[#374151]">
              Mobile Number {isMobileRequired ? '*' : '(optional)'}
            </Label>
            <div className="flex gap-2">
              <select
                {...register('countryCode')}
                className="h-11 w-[100px] shrink-0 rounded-lg border border-[#D1D5DB] bg-white px-2 text-sm text-gray-700"
              >
                {countryCodes.map((cc) => (
                  <option key={cc.value} value={cc.value}>
                    {cc.label}
                  </option>
                ))}
              </select>
              <Input
                {...register('mobile', {
                  required: isMobileRequired,
                  pattern: /^[0-9]{4,15}$/,
                })}
                placeholder="8123 4567"
                className={`h-11 rounded-lg border bg-white px-[14px] text-sm text-gray-900 placeholder:text-gray-400 ${errors.mobile ? 'border-red-400' : 'border-[#D1D5DB]'}`}
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-semibold text-[#374151]">Message</Label>
          <Textarea
            {...register('message')}
            rows={4}
            placeholder="Tell us about your goals, team size, and any specific topics you'd like covered..."
            className="rounded-lg border border-[#D1D5DB] bg-white p-[14px] text-sm leading-[1.55] text-gray-900 placeholder:text-gray-400"
          />
        </div>

        {/* Submit + Status */}
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            disabled={submitting}
            className="w-fit shrink-0 rounded-[8px] bg-[#6366F1] px-10 py-[14px] text-[16px] font-semibold text-white hover:bg-[#4F46E5] disabled:opacity-50"
          >
            {submitting ? 'Sending...' : 'Send Inquiry →'}
          </Button>

          {submitted && (
            <Alert className="rounded-lg border border-[#86EFAC] bg-[#F0FDF4]">
              <AlertDescription className="flex items-center gap-3 text-sm font-medium text-[#166534]">
                <span className="font-bold text-[#16A34A]">✓</span>
                Thanks! We&apos;ll be in touch within one business day.
              </AlertDescription>
            </Alert>
          )}

          {submitError && (
            <Alert className="rounded-lg border border-red-300 bg-red-50">
              <AlertDescription className="text-sm font-medium text-red-800">
                {submitError}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </form>
    </section>
  );
}
