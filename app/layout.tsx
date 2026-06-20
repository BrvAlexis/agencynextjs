import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Register | Transformation Digitale Haute-Couture',
  description: 'Register - digital transformation and consulting agency.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
