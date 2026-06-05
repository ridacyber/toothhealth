import { Suspense } from 'react';
import AskPageClient from './AskPageClient';

export default function AskPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted">Loading...</div>}>
      <AskPageClient />
    </Suspense>
  );
}