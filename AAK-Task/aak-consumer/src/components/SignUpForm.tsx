import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

interface SignUpData {
  user_type: 'researcher' | 'investor' | 'institution_staff' | 'service_provider';
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
    const [formData, setFormData] = useState<SignUpData>({
        user_type: 'researcher',
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
      });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("https://django-dev.aakscience.com/signup/", formData);
      console.log('Signup successful');
      setFormData({
        user_type: 'researcher',
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

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
