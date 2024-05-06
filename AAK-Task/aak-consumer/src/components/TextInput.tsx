import React from 'react';

interface Props {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({ label, name, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
