import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sum from '@/test';
import { RouterProvider } from 'react-router-dom';
import router from "./router/router";
//导入定制主题文件
import "./theme.css"
import store from './store';
import { Provider } from 'react-redux';

const total = sum(1, 2)
console.log(total)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

);