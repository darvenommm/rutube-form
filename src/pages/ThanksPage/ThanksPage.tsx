import { useEffect } from 'react';

import { useLocalStorage } from '@/share/hooks/useLocalStorage';
import { localStorageKeys } from '@/share/constants/localStorage';

import classes from './ThanksPage.module.scss';
import imageUrl from '@/assets/images/thanks.png';

interface IBeautyOutput {
  questionID: number;
  responseID: number;
}

export const ThanksPage = (): JSX.Element => {
  const [feedback, _] = useLocalStorage<null | number>(localStorageKeys.feedback, null);
  const [verbose, __] = useLocalStorage<Array<number>>(localStorageKeys.verbose, []);

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
    <div className="container">
      <div className={classes.innerContainer}>
        <img className={classes.image} aria-hidden src={imageUrl} width={524} height={232} alt="" />
        <h2 className={classes.title}>Спасибо за&nbsp;обратную связь!</h2>
        <p className={classes.text}>Это поможет нам улучшить сервис</p>
        <a className="button" href="#" target="_blank">
          Перейти на платформу
        </a>
      </div>
    </div>
  );
};
