'use client';

import { useEffect } from 'react';

import Button from '@/components/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <Button onClick={() => reset()} className="text-xs bg-red-600 rounded px-2 py-1 text-white">
        Try Again
      </Button>
    </div>
  );
}
