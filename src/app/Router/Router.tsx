import { RouterProvider } from 'react-router-dom';

import { router } from './main';

export const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
