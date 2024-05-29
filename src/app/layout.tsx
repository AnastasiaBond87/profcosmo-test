import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ReduxProvider } from '@/store';

import '@/styles/global.scss';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Task Manager',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={roboto.className}>
          <div className="container">
            <main className="main">{children}</main>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
