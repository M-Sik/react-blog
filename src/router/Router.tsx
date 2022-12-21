import Home from '@/pages/Home';
import AddPost from '@/pages/AddPost';
import MainLayout from '@/layouts/MainLayout';
import Blogs from '@/pages/Blogs';
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
          path: '/blogs',
          element: <Blogs />,
        },
        {
          path: '/add-post',
          element: <AddPost />,
        },
      ],
    },
  ]);
  return routes;
}

export default Router;
