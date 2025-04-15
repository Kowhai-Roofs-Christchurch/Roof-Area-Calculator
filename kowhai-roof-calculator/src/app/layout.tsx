export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header style={{ textAlign: 'center', padding: '20px' }}>
          <img src="/logo.png" alt="Kowhai Logo" style={{ height: '60px', marginBottom: '10px' }} />
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Kowhai Roof Restorations</h1>
          <p style={{ fontSize: '16px' }}>Use this to estimate your roof size before purchasing a GrabOne voucher</p>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}