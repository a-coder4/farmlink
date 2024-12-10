import './globals.css';

export const metadata = {
  title: 'FarmLink',
  description: 'Sustainable Farming Platform',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans">{children}</body>
    </html>
  );
}
