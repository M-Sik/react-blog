import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const AddDiary = lazy(() => import('@/pages/AddDiary'));
const MainLayout = lazy(() => import('@/layouts/MainLayout'));
const Diarys = lazy(() => import('@/pages/Diarys'));

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
