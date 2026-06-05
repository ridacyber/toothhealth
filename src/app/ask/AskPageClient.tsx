'use client';

import { useSearchParams } from 'next/navigation';
import AIResponsePanel from '@/components/AIResponsePanel';

export default function AskPageClient() {
  const searchParams = useSearchParams();
  const question = searchParams.get('q') || '';

  return (
    <div className="min-h-screen flex flex-col py-24 px-4">
      <div className="flex-1 max-w-4xl mx-auto w-full">
        <AIResponsePanel initialQuestion={question} />
      </div>
    </div>
  );
}