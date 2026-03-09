'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { supabase } from '@/lib/supabase';

type FormData = {
  name: string;
  email: string;
};

export default function Home() {
  const [data, setData] = useState<unknown[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchAccounts() {
      const { data, error } = await supabase.from('User').select('*').limit(5);

      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }
    }

    fetchAccounts();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // GSAP: animate the box on mount
  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      );
    }
  }, []);

  const onSubmit = (data: FormData) => {
    alert(`React Hook Form works!\n\nName: ${data.name}\nEmail: ${data.email}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 font-sans dark:bg-black">
      {/* GSAP Test */}
      <div
        ref={boxRef}
        style={{
          width: 200,
          height: 100,
          background: '#10b981',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        GSAP Animated
      </div>

      {/* Framer Motion Test */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        style={{
          width: 200,
          height: 100,
          background: '#6366f1',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Framer Motion
      </motion.div>

      {/* React Hook Form Test */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 300 }}
      >
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Name"
          style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4 }}
        />
        {errors.name && <span style={{ color: 'red', fontSize: 12 }}>{errors.name.message}</span>}

        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/, message: 'Invalid email' },
          })}
          placeholder="Email"
          style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: 4 }}
        />
        {errors.email && <span style={{ color: 'red', fontSize: 12 }}>{errors.email.message}</span>}

        <button
          type="submit"
          style={{
            padding: '0.5rem',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Submit (React Hook Form)
        </button>
      </form>

      <div style={{ padding: '2rem' }}>
        <h1>Supabase Connection Test</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {data && (
          <>
            <p style={{ color: 'green' }}>Connected! Found {data.length} row(s).</p>
            <pre
              style={{ background: '#f3f4f6', padding: '1rem', borderRadius: 8, overflow: 'auto' }}
            >
              {JSON.stringify(data, null, 2)}
            </pre>
          </>
        )}
        {!data && !error && <p>Loading...</p>}
      </div>
    </div>
  );
}
