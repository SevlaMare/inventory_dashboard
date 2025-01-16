import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { styles } from './styles';

const menuRoutes = [
  { path: '/', title: 'Home' },
  { path: '/products', title: 'Products' },
  { path: '/about', title: 'About' },
];

export function Menu() {
  const { darkMode, toggleDarkMode } = useTheme();

  const navigateTo = useNavigate();
  // const { logout } = useContext(AuthContext);
  const handleLogin = () => navigateTo('/login');

  return (
    <nav className={'flex justify-between bg-green'}>
      <ul className={styles.items}>
        {menuRoutes.map(route => (
          <li
            key={route.path}
            className={
              'no-underline text-gray-800 py-1 px-2 rounded hover:text-gray-dark'
            }
          >
            <Link
              to={route.path}
              className={'flex-item text-center mr-2.5 last:mr-0'}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.items}>
        <button className={styles.link} onClick={handleLogin}>
          Login
        </button>

        {/* {login ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handle}>Logout</button>
        )} */}

        <button onClick={toggleDarkMode}>
          <img alt='' src={darkMode ? 'icon/moon.svg' : 'icon/sun.svg'} />
        </button>
      </div>
    </nav>
  );
}
