import { createBrowserRouter, redirect } from 'react-router-dom';

import { TemplatePage } from '@/pages/TemplatePage';
import { MainPage } from '@/pages/MainPage';
import { QuestionsPage } from '@/pages/QuestionsPage';
import { ThanksPage } from '@/pages/ThanksPage';
import { DonePage } from '@/pages/DonePage';
import { paths } from '@/share/constants/paths';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

import { localStorageKeys } from '@/share/constants/localStorage';

type Response = ReturnType<typeof redirect>;

const finalPagesLoader = (): null | Response => {
  const feedback: number = Number(
    JSON.parse(localStorage.getItem(localStorageKeys.feedback) ?? 'null') ?? '-1',
  );

  if (feedback === -1) {
    return redirect(paths.main);
  }

  const verbose: null | Array<null | number> = JSON.parse(
    localStorage.getItem(localStorageKeys.verbose) ?? 'null',
  );
  const indexOfNull = verbose?.findIndex((item: null | number): boolean => item === null);
  const needRedirect = verbose === null || indexOfNull !== -1;

  return needRedirect ? redirect(paths.questions) : null;
};

export const router = createBrowserRouter([
  {
    element: <TemplatePage />,
    children: [
      {
        path: paths.main,
        element: <MainPage />,
        loader: (): null | Response => {
          const feedback: number = Number(
            JSON.parse(localStorage.getItem(localStorageKeys.feedback) ?? 'null') ?? '-1',
          );

          return feedback !== -1 ? redirect(paths.questions) : null;
        },
      },
      {
        path: paths.questions,
        element: <QuestionsPage />,
        loader: (): null | Response => {
          const verbose: null | Array<null | number> = JSON.parse(
            localStorage.getItem(localStorageKeys.verbose) || 'null',
          );
          const indexOfNull = verbose?.findIndex((item: null | number): boolean => item === null);
          const needRedirect = verbose !== null && indexOfNull === -1;
          return needRedirect ? redirect(paths.done) : null;
        },
      },
      {
        path: paths.thanks,
        element: <ThanksPage />,
        loader: finalPagesLoader,
      },
      {
        path: paths.done,
        element: <DonePage />,
        loader: finalPagesLoader,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
