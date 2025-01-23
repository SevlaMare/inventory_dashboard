import { useRef, useState } from 'react';
import styled from './register.module.css';

export function Register() {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<string | null>(null);
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [success, setSuccess] = useState<string | null>('account created');

  const handleSubmit = e => {
    e.preventDefault();
    // 1 regex validate
    // 2 sent req
    // 3 wait / rebounce (3x)
    // 4 error handle (no connection / server error)

    console.log('sent');
  };

  return (
    <div>
      <div>
        <img src='/logo.webp' alt='logo' className={styled.logo} />
      </div>

      <main className={styled.container}>
        <h1 className={styled.title}>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <label className={styled.label} htmlFor='emailField'>
            Email
            {error && <span>{error}</span>}
            <input
              ref={userRef}
              onChange={e => setUser(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              id='emailField'
              type='email'
              autoComplete='off'
              required
              placeholder='email@provide.com'
              className={styled.input}
            />
          </label>

          <label className={styled.label} htmlFor='emailField'>
            Password
            {error && <span>{error}</span>}
            <input
              ref={userRef}
              onChange={e => setUser(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              id='emailField'
              type='email'
              autoComplete='off'
              required
              placeholder='email@provide.com'
              className={styled.input}
            />
          </label>

          <button className={styled.button} onClick={handleSubmit}>
            Send
          </button>
        </form>

        <button>show Password</button>

        <a href=''>Already have an account?</a>
      </main>
    </div>
  );
}
