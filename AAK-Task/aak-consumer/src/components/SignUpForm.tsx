import React from 'react';
import useSignUpForm from './useSignUpForm';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

const SignUpForm: React.FC = () => {
  const { formData, handleChange, handleSelectChange, handleSubmit } = useSignUpForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup-form">
        <SelectInput label="User Type" name="user_type" value={formData.user_type} onChange={handleSelectChange} />
        <TextInput label="First Name" name="first_name" type="text" value={formData.first_name} onChange={handleChange} />
        <TextInput label="Last Name" name="last_name" type="text" value={formData.last_name} onChange={handleChange} />
        <TextInput label="Username" name="username" type="text" value={formData.username} onChange={handleChange} />
        <TextInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <TextInput label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />      
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
