'use client';
import Button from '@/app/ui/button';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="container py-12">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-xl font-bold mb-3 sm:text-2xl">Oh Snap! Something went wrong!</h2>
        <div className="text-md sm:text-lg">
          <p className="mb-2">
            It appears that there is some problem with rendering the page due to some error. Sorry for the
            inconvenience. Please, try again later.
          </p>
          <p className="mb-4">You can let me know, I would appreciate it.</p>
          <Button onClick={reset}>Reset</Button>
        </div>
      </div>
    </section>
  );
}
