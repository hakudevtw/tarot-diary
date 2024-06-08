import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tarot Diary',
  description: 'A tarot diary for tarot readers.',
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>,
) {
  const { children, params } = props;

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
