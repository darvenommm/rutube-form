import { clsx } from 'clsx';

import componentClasses from '@/share/components/styles/components.module.scss';
import classes from './Header.module.scss';
import RuTubeSvg from '@/assets/svg/RuTube.svg';

export const Header = (): JSX.Element => {
  return (
    <header className={clsx(componentClasses.container, classes.header)}>
      <RuTubeSvg />
    </header>
  );
};
