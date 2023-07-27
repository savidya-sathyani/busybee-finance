import '@/styles/global.scss';

export const metadata = {
  title: 'BusyBee | Dashboard',
  description: "Savidya's life story",
  icons: {
    icon: '/assets/icons/favicon.ico',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
