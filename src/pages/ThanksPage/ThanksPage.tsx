import { useEffect } from 'react';
import { clsx } from 'clsx';

import { useLocalStorage } from '@/share/hooks/useLocalStorage';
import { localStorageKeys } from '@/share/constants/localStorage';

import componentClasses from '@/share/components/styles/components.module.scss';
import classes from './ThanksPage.module.scss';
import imageUrl from '@/assets/images/thanks/thanks.png';
import imageUrl2x from '@/assets/images/thanks/thanks@2x.png';

interface IBeautyOutput {
  questionID: number;
  responseID: number;
}

export const ThanksPage = (): JSX.Element => {
  const feedback = useLocalStorage<null | number>(localStorageKeys.feedback, null)[0];
  const verbose = useLocalStorage<Array<number>>(localStorageKeys.verbose, [])[0];
  const [_, setIsCompleted] = useLocalStorage<boolean>(localStorageKeys.isCompleted, true);

  useEffect((): void => {
    console.log('The feedback', feedback);

    const beautyVerbose: IBeautyOutput[] = verbose.map(
      (item, index): IBeautyOutput => ({
        questionID: index + 1,
        responseID: item + 1,
      }),
    );
    console.log('The verbose form answers', beautyVerbose);
  }, []);

  return (
    <div className={componentClasses.container}>
      <div className={classes.innerContainer}>
        <img
          className={classes.image}
          aria-hidden
          srcSet={`${imageUrl}, ${imageUrl2x} 2x`}
          width={524}
          height={232}
          src={imageUrl}
          alt=""
        />
        <h2 className={classes.title}>Спасибо за&nbsp;обратную связь!</h2>
        <p className={classes.text}>Это поможет нам улучшить сервис</p>
        <a className={clsx(componentClasses.button, classes.button)} href="#" target="_blank">
          Перейти на платформу
        </a>
      </div>
    </div>
  );
};
