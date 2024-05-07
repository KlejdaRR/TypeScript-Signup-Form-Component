import { useState } from 'react';
import axios from 'axios';

interface SignUpData {
  user_type: 'researcher' | 'investor' | 'institution_staff' | 'service_provider';
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

const useSignUpForm = () => {
  const [formData, setFormData] = useState<SignUpData>({
    user_type: 'researcher',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  return { formData, handleChange, handleSelectChange, handleSubmit };
};

export default useSignUpForm;
