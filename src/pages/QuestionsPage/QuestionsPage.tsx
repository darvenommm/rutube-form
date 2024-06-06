import { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

import { Row } from '@/share/components/Row';
import { RadioButton, RadioButtonStyles } from '@/share/components/RadioButton';
import { paths } from '@/share/constants/paths';
import { fieldsNames, formFields } from './formFields';
import { useLocalStorage } from '@/share/hooks/useLocalStorage';
import { localStorageKeys } from '@/share/constants/localStorage';

import classes from './QuestionsPage.module.scss';
import imageUrl from '@/assets/images/form-image.png';

import type { FormEvent } from 'react';
import type { IRadioButtonData } from '@/share/components/RadioButton';
import type { IRowCreateElementData } from '@/share/components/Row';

export const QuestionsPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [verbose, setVerbose] = useLocalStorage<Array<null | number>>(
    localStorageKeys.verbose,
    Array.from({ length: formFields.length }).map((): null => null),
  );

  const [canBeSubmitted, setCanBeSubmitted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Array<null | number>>(verbose);

  useLayoutEffect((): void => {
    let isOk: boolean = true;
    for (const answer of answers) {
      if (answer === null) {
        isOk = false;
        break;
      }
    }

    setVerbose(answers);
    setCanBeSubmitted(isOk);
  }, [answers]);

  const changeRadioButtonHandler = ({ name, value }: IRadioButtonData): void => {
    const indexOfName = fieldsNames.findIndex((fieldNameValue): boolean => name === fieldNameValue);

    setAnswers((previous): Array<null | number> => {
      const newAnswers = [...previous];
      newAnswers[indexOfName] = Number(value);

      return newAnswers;
    });
  };

  const submitFormHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTimeout((): void => navigate(paths.thanks), 250);
  };

  const fields = formFields.map((field, fieldIndex) => {
    const hasText = (field.texts?.length ?? 0) > 0;

    return (
      <div className={classes.question} key={fieldIndex}>
        <p className={classes.questionText}>
          {fieldIndex + 1}. {field.title}*
        </p>
        <div className={clsx(classes.answers, { [classes.answersWithText]: hasText })}>
          <Row
            start={field.start}
            end={field.end}
            texts={field.texts}
            createElement={({ realIndex, index, text }: IRowCreateElementData) => {
              return (
                <RadioButton
                  className={clsx({ [classes.answerWithText]: hasText })}
                  key={realIndex}
                  label={text ?? index}
                  name={field.name}
                  value={realIndex}
                  style={text ? RadioButtonStyles.text : RadioButtonStyles.index}
                  onChange={changeRadioButtonHandler}
                  isChecked={answers[fieldIndex] !== null && answers[fieldIndex] === realIndex}
                />
              );
            }}
          />
        </div>
      </div>
    );
  });

  return (
    <div className={clsx('container', classes.container)}>
      <h2 className={classes.title}>Пожалуйста, ответьте на&nbsp;дополнительные вопросы.</h2>
      <img className={classes.image} aria-hidden src={imageUrl} width={581} height={540} alt="" />
      <form onSubmit={submitFormHandler}>
        {fields}
        <button className={clsx('button', classes.button)} type="submit" disabled={!canBeSubmitted}>
          Отправить ответы
        </button>
      </form>
    </div>
  );
};
