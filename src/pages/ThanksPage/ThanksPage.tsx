import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '@/share/hooks/useLocalStorage';
import { localStorageKeys } from '@/share/constants/localStorage';
import { paths } from '@/share/constants/paths';

export const ThanksPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [feedback, _] = useLocalStorage<null | number>(localStorageKeys.feedback, null);
  const [verbose, __] = useLocalStorage<Array<null | number>>(localStorageKeys.verbose, [null]);

  useEffect((): void => {
    let needRedirectToMain =
      feedback === null ||
      Boolean(verbose.findIndex((verboseItem): boolean => verboseItem === null) + 1);

    if (needRedirectToMain) {
      navigate(paths.main);
    }
  }, [feedback, verbose, navigate]);

  return (
    <div className="container">
      <h2>Спасибо за&nbsp;обратную связь!</h2>
      <p>Это поможет нам улучшить сервис</p>
    </div>
  );
};
