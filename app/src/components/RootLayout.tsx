import { Provider } from 'react-redux';
import { store } from '../redux/store';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default RootLayout;
