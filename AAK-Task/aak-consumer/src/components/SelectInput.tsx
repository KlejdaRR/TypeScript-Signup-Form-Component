import React from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<Props> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
      <option value="researcher">Researcher</option>
      <option value="investor">Investor</option>
      <option value="institution_staff">Institution Staff</option>
      <option value="service_provider">Service Provider</option>
      </select>
    </div>
  );
};

export default SelectInput;
