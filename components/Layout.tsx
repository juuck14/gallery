import { Provider } from 'react-redux';
import store from '../redux/store';
import Navi from './Nav';

const Layout = ({children}:any) => {
  return (
    <Provider store={store}>
      <Navi/>
      <div>
        {children}
      </div>
    </Provider>
  );
};

export default Layout;
