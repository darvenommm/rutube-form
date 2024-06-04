import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

export const TemplatePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Форма обратной связи.</h1>
        <Outlet />
      </main>
    </>
  );
};
