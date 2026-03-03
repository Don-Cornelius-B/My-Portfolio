import './globals.css';

export const metadata = {
  title: 'Don Cornelius B | Modern Pro Portfolio',
  description: 'Creative Technologist portfolio of Don Cornelius B',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}