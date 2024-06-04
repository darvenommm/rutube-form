import { clsx } from 'clsx';

import classes from './Header.module.scss';
import RuTubeSvg from '@/assets/svg/RuTube.svg';

export const Header = (): JSX.Element => {
  return (
    <header className={clsx('container', classes.header)}>
      <RuTubeSvg />
    </header>
  );
};
