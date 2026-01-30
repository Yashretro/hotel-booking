export const metadata = {
  title: 'Hotel Booking',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
