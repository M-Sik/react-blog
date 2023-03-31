import { useRoutes } from 'react-router-dom';
import React from 'react';
const Home = React.lazy(() => import('@/pages/Home'));
const AddDiary = React.lazy(() => import('@/pages/AddDiary'));
const MainLayout = React.lazy(() => import('@/layouts/MainLayout'));
const Diarys = React.lazy(() => import('@/pages/Diarys'));

function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/diarys',
          element: <Diarys />,
        },
        {
          path: '/add-diary',
          element: <AddDiary />,
        },
      ],
    },
  ]);
  return routes;
}

export default Router;
