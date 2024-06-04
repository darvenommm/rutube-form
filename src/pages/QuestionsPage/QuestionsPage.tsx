import { useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Row } from '@/share/components/Row';
import { RadioButton } from '@/share/components/RadioButton';
import { paths } from '@/share/constants/paths';
import { fieldsNames, formFields } from './formFields';
import { useLocalStorage } from '@/share/hooks/useLocalStorage';
import { localStorageKeys } from '@/share/constants/localStorage';

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

  const submitFormHandler = (event: FormEvent): void => {
    event.preventDefault();
    setTimeout((): void => navigate(paths.thanks), 250);
  };

  const fields = formFields.map((field, fieldIndex) => {
    return (
      <div key={fieldIndex}>
        <p>
          {fieldIndex + 1}. {field.title}
        </p>
        <Row
          start={field.start}
          end={field.end}
          texts={field.texts}
          createElement={({ realIndex, index, text }: IRowCreateElementData) => {
            return (
              <RadioButton
                key={realIndex}
                label={text ?? index}
                name={field.name}
                value={realIndex}
                onChange={changeRadioButtonHandler}
                isChecked={answers[fieldIndex] !== null && answers[fieldIndex] === realIndex}
              />
            );
          }}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <h2 className="visually-hidden">Вопросы.</h2>
      <form onSubmit={submitFormHandler}>
        {fields}
        <button type="submit" disabled={!canBeSubmitted}>
          Отправить ответы
        </button>
      </form>
    </div>
  );
};
