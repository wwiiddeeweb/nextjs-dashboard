import { inter } from '@fonts';
import '@ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex font-normal tracking-tight antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
