import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import componentsClasses from '@/share/components/styles/components.module.scss';

export const TemplatePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <h1 className={componentsClasses.visuallyHidden}>Форма обратной связи.</h1>
        <Outlet />
      </main>
    </>
  );
};
