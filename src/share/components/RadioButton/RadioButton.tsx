import { useId } from 'react';
import { clsx } from 'clsx';

import classes from './RadioButton.module.scss';

export interface IRadioButtonData {
  name: string;
  value: string | number;
}

interface IRadioButtonProps {
  label: string | number;
  name: string;
  value: string | number;
  isChecked?: boolean;
  onChange?: (data: IRadioButtonData) => void;
}

export const RadioButton = ({
  label,
  name,
  value,
  isChecked = false,
  onChange = () => null,
}: IRadioButtonProps): JSX.Element => {
  const inputId = useId();

  return (
    <div className="radioButton">
      <input
        className={clsx('visually-hidden', 'radioButton__input')}
        id={inputId}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={({ target: { name, value } }) => onChange({ name, value })}
      />
      <label
        className={clsx(classes.label, 'radioButton__label', { [classes.labelChecked]: isChecked })}
        htmlFor={inputId}
      >
        {label}
      </label>
    </div>
  );
};
