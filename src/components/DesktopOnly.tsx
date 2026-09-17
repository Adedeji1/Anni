import { useEffect, useState } from 'react';

interface DesktopOnlyProps {
  children: React.ReactNode;
}

export function DesktopOnly({ children }: DesktopOnlyProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => {
      window.removeEventListener('resize', checkScreen);
    };
  }, []);

  if (isMobile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ivory px-6 text-center">
        <div className="max-w-md">
          <p className="mb-3 font-hand text-2xl text-ink/60">
            A little note...
          </p>

          <h1 className="font-serif text-3xl text-ink">
            This story is meant to be viewed on a bigger screen.
          </h1>

          <p className="mt-4 text-ink/60">
            Please open this page on a laptop or desktop to experience it
            properly.
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}