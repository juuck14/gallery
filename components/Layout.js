import Head from 'next/head'
import { Children } from 'react';
import Navi from './Nav'
import {Provider } from 'react-redux'
import store from '../redux/store'

const Layout = ({children}) => {
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
