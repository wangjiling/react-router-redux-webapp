import Login from './containers/routes/Login';
import Self from './containers/routes/Self';
import App from './containers/App';

const routes = [
  { path: '/',
    component: App,
    childRoutes: [
      { path: 'login',
        component: Login
      },
      { path: 'self',
        component: Self
      }
    ]
  }
];

export default routes;
