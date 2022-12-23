import Home from '@/pages/Home';
import AddDiary from '@/pages/AddDiary';
import MainLayout from '@/layouts/MainLayout';
import Diarys from '@/pages/Diarys';
import { useRoutes } from 'react-router-dom';

function Router() {
  const routes = useRoutes([
    {
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
