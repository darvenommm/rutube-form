import { useId } from 'react';
import { clsx } from 'clsx';

import componentsClasses from '@/share/components/styles/components.module.scss';
import classes from './RadioButton.module.scss';

export interface IRadioButtonData {
  name: string;
  value: string | number;
}

export enum RadioButtonStyles {
  index = 'index',
  text = 'text',
}

interface IRadioButtonProps {
  label: string | number;
  name: string;
  value: string | number;
  style?: RadioButtonStyles;
  isChecked?: boolean;
  onChange?: (data: IRadioButtonData) => void;
  className?: string;
}

export const RadioButton = ({
  label,
  name,
  value,
  style = RadioButtonStyles.index,
  isChecked = false,
  onChange,
  className,
}: IRadioButtonProps): JSX.Element => {
  const inputId = useId();

  onChange = onChange ?? (() => null);

  return (
    <div className="radioButton">
      <input
        className={clsx(componentsClasses.visuallyHidden, 'radioButton__input')}
        id={inputId}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={({ target: { name, value } }) => onChange({ name, value })}
      />
      <label
        className={clsx(
          classes.label,
          'radioButton__label',
          {
            [classes.labelText]: style === RadioButtonStyles.text,
            [classes.labelChecked]: isChecked,
          },
          className,
        )}
        htmlFor={inputId}
      >
        {label}
      </label>
    </div>
  );
};
