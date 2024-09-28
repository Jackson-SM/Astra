'use client';

import { SpanColor } from '@/components/atoms/SpanColor';
import { Exo } from 'next/font/google';
import Link from 'next/link';

const exo = Exo({ subsets: ['latin'], weight: '700' });

export default function ErrorPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <h1 className={`text-5xl ${exo.className}`}>
        <SpanColor>4</SpanColor>0<SpanColor>4</SpanColor> - Not Found
      </h1>
      <h2 className={`text-sm`}>we couldn&apos;t find the page</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
