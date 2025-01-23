import { useContext, useState } from 'react';
import styled from './login.module.css';
import { AuthContext } from '@/providers/auth';

export function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Call the login function from the context
    login(username, password);
  };

  return (
    <form className={styled.container} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
  );
}
