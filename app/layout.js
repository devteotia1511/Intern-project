
import "./globals.css";

export const metadata = {
  title: "Main Dashboard | Park Smart",
  description: "Park Smart Solutions",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
