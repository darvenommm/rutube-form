import { createBrowserRouter, redirect } from 'react-router-dom';

import { TemplatePage } from '@/pages/TemplatePage';
import { MainPage } from '@/pages/MainPage';
import { QuestionsPage } from '@/pages/QuestionsPage';
import { ThanksPage } from '@/pages/ThanksPage';
import { DonePage } from '@/pages/DonePage';
import { paths } from '@/share/constants/paths';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

import { localStorageKeys } from '@/share/constants/localStorage';

export const router = createBrowserRouter([
  {
    element: <TemplatePage />,
    children: [
      {
        path: paths.main,
        element: <MainPage />,
        loader: () => {
          const feedback = localStorage.getItem(localStorageKeys.feedback);
          return feedback !== null ? redirect(paths.questions) : null;
        },
      },
      {
        path: paths.questions,
        element: <QuestionsPage />,
        loader: () => {
          const verbose = JSON.parse(localStorage.getItem(localStorageKeys.verbose) || '[null]');
          const indexOfNull = verbose.findIndex((item: null | number): boolean => item === null);
          const needRedirect = indexOfNull === -1;
          return needRedirect ? redirect(paths.done) : null;
        },
      },
      {
        path: paths.thanks,
        element: <ThanksPage />,
      },
      {
        path: paths.done,
        element: <DonePage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
