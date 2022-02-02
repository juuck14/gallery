import Head from 'next/head'
import { Children } from 'react';
import Nav from './Nav'
import {Provider } from 'react-redux'
import store from '../redux/store'

const Layout = ({children}) => {
  return (
    <Provider store={store}>
      <Nav/>
      <div>
        {children}
      </div>
    </Provider>
  );
};

export default Layout;
