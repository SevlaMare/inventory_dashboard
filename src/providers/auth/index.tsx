import { createContext, useState, ReactNode, useEffect } from 'react';

interface User {
  username: string;
}
interface AuthProviderProps {
  children?: ReactNode;
}
interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// api calls will need this for private endpoints
const TOKEN_KEY = 'USRTOKEN';

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useLocalStorage<User | null>('user', null);

  useEffect(() => {
    // fail to get key also redirect
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      setUser({ username: token });
    }

    // Redirect to home page
    // if (!user && location.pathname !== '/') {
    //   history.push('/');
    // }
  }, []);

  const login = (username: string, password: string) => {
    // TODO: validate credentials with API
    // fetchRetry('login?user=test/pass=123');

    if (username && password) {
      // store token
      localStorage.setItem(TOKEN_KEY, '123ABC');

      // set credentials state
      setUser({ username });
    }
  };

  const logout = () => {
    // drop token
    localStorage.removeItem(TOKEN_KEY);

    // reset credentials state
    setUser(null);

    // redirect
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
