import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Row } from '@/share/components/Row';
import { RadioButton } from '@/share/components/RadioButton';
import { paths } from '@/share/constants/paths';
import { useLocalStorage } from '@/share/hooks/useLocalStorage';
import { localStorageKeys } from '@/share/constants/localStorage';

import ImageUrl from '@/assets/images/main.png';
import classes from './MainPage.module.scss';

import type { IRadioButtonData } from '@/share/components/RadioButton';
import type { IRowCreateElementData } from '@/share/components/Row';

export const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [_, setFeedback] = useLocalStorage<null | number>(localStorageKeys.feedback, null);

  const [answerIndex, setAnswerIndex] = useState<null | number>(null);

  const changeRadioButtonHandler = ({ value }: IRadioButtonData): void => {
    setAnswerIndex(Number(value));
    setFeedback(Number(value));
    setTimeout((): void => navigate(paths.questions), 250);
  };
  const createRadioButton = ({ realIndex, index }: IRowCreateElementData) => (
    <RadioButton
      key={realIndex}
      name="quality"
      label={index}
      value={realIndex}
      onChange={changeRadioButtonHandler}
      isChecked={answerIndex === realIndex}
    />
  );

  return (
    <div className="container">
      <div className={classes.container}>
        <img
          className={classes.image}
          width={455}
          height={200}
          src={ImageUrl}
          alt="Люди показывающие оценки предоставленным услугам."
        />
        <div className={classes.textContainer}>
          <h2 className={classes.title}>Уважаемый клиент!</h2>
          <p className={classes.text}>
            Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по&nbsp;данному
            обращению, используя шкалу от&nbsp;0&nbsp;до&nbsp;9, где 0 является &laquo;Хуже
            некуда&raquo; и&nbsp;9&nbsp;&mdash; &laquo;Отлично&raquo;.
          </p>
          <form className={classes.buttons} onSubmit={(event) => event.preventDefault()}>
            <Row start={0} end={9} createElement={createRadioButton} />
          </form>
          <div className={classes.bottom}>
            <p>Хуже некуда</p>
            <p>Отлично</p>
          </div>
        </div>
      </div>
    </div>
  );
};
