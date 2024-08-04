import RootLayout from '../components/RootLayout'; 
import '../../assets/global.css';

const App = ({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
