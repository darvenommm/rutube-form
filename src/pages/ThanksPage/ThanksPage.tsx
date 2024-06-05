import { useEffect } from 'react';

import { useLocalStorage } from '@/share/hooks/useLocalStorage';
import { localStorageKeys } from '@/share/constants/localStorage';

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
      <h2>Спасибо за&nbsp;обратную связь!</h2>
      <p>Это поможет нам улучшить сервис</p>
    </div>
  );
};
