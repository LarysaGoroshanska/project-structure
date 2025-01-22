import App from './components/app.tsx';
import Header from './components/header.tsx';
import Main from './components/main.tsx';
import ProductsList from './components/products-list.tsx';
import Product from './components/product.tsx';
import Footer from './components/footer.tsx';

export const COMPONENTS = {
  'App': App,
  'Header': Header,
  'Main': Main,
  'ProductsList': ProductsList,
  'Product': Product,
  'Footer': Footer,
};

export const CONFIG = [
  {
    component: 'App',
    children: [
      {
        component: 'Header',
      },
      {
        component: 'Main',
        children: [
          {
            component: 'ProductsList',
            children: [
              {
                component: 'Product',
              },
            ],
          },
        ],
      },
      {
        component: 'Footer',
      },
    ]
  }
];
