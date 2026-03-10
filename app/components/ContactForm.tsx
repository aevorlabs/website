'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SectionTag from './SectionTag';

type ContactData = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>();

  const onSubmit = (_data: ContactData) => {
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-white px-6 py-20 sm:px-12 lg:px-[120px] lg:py-[80px]">
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
        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Name *</label>
            <input
              {...register('name', { required: true })}
              placeholder="Your full name"
              className={`h-11 rounded-lg border bg-white px-[14px] text-sm text-gray-900 placeholder:text-gray-400 ${
                errors.name ? 'border-red-400' : 'border-gray-300'
              }`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Email *</label>
            <input
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/,
              })}
              placeholder="you@company.com"
              className={`h-11 rounded-lg border bg-white px-[14px] text-sm text-gray-900 placeholder:text-gray-400 ${
                errors.email ? 'border-red-400' : 'border-gray-300'
              }`}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Company (optional)</label>
            <input
              {...register('company')}
              placeholder="Your company name"
              className="h-11 rounded-lg border border-gray-300 bg-white px-[14px] text-sm text-gray-900 placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">I&apos;m Interested In *</label>
            <select
              {...register('interest', { required: true })}
              className={`h-11 rounded-lg border bg-white px-[14px] text-sm text-gray-700 ${
                errors.interest ? 'border-red-400' : 'border-gray-300'
              }`}
            >
              <option value="Corporate Training">Corporate Training</option>
              <option value="1-on-1 Coaching">1-on-1 Coaching</option>
              <option value="On-Site">On-Site</option>
              <option value="Remote">Remote (Zoom)</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Message *</label>
          <textarea
            {...register('message', { required: true })}
            rows={4}
            placeholder="Tell us about your goals, team size, and any specific topics you'd like covered..."
            className={`rounded-lg border bg-white p-[14px] text-sm leading-relaxed text-gray-900 placeholder:text-gray-400 ${
              errors.message ? 'border-red-400' : 'border-gray-300'
            }`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-fit rounded-lg bg-indigo-500 px-10 py-[14px] text-base font-semibold text-white transition-colors hover:bg-indigo-600"
        >
          Send Inquiry →
        </button>

        {/* Success State */}
        {submitted && (
          <div className="flex items-center gap-3 rounded-lg border border-green-300 bg-green-50 px-5 py-4">
            <span className="text-lg font-bold text-green-600">✓</span>
            <span className="text-sm font-medium text-green-800">
              Thanks! We&apos;ve received your inquiry and will be in touch within one business day.
            </span>
          </div>
        )}
      </form>
    </section>
  );
}
