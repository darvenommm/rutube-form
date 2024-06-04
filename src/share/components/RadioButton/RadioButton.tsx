import { useId } from 'react';

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
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={({ target: { name, value } }) => onChange({ name, value })}
      />
    </div>
  );
};
