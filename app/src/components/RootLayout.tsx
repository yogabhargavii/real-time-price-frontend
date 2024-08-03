import { Provider } from 'react-redux';
import { store } from '../redux/store'; 

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default RootLayout;
