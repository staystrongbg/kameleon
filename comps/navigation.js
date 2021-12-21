import { useEffect } from 'react';
import styles from '../styles/Navigation.module.scss';
import Link from 'next/link';
import Dropdown from './dropdown';
import { FaBars, FaPhone, FaTimesCircle } from 'react-icons/fa';
import Sidebar from './sidebar';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const {
    showSidebar,
    setShowSidebar,
    height,
    handleScroll,
    data: { links, phones },
  } = useGlobalContext();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={styles.navbar}
      style={{
        background: height && 'rgba(250,250,250,0.96)',
        color: height && '#121212',
        boxShadow: height && '2px 2px 8px #111',
        animation: !height && 'slide 0.3s ease',
      }}
    >
      <div className={styles.navLogo}>
        <Link href='/'>
          <a>
            {
              <img
                src={height ? '/logo5.png' : '/logo_w.png'}
                alt='kameleon logo'
              />
              // <img src='/logo_w.png' alt='kameleon logo' />
            }
          </a>
        </Link>
      </div>

      {showSidebar && <Sidebar />}
      <div className={styles.links}>
        {links.map(({ link, path, id }, idx) => (
          <div key={idx}>
            <Link href={path}>
              <a style={{ color: height && '#222' }} id={id && styles.ketering}>
                {link}
                <div>{id && <Dropdown />}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.phone}>
        {phones.map((phone, idx) => (
          <h2 key={idx}>
            <span>
              <FaPhone style={{ color: height && '#222' }} />
            </span>
            <a style={{ color: height && '#222' }}>{phone}</a>
          </h2>
        ))}
      </div>
      <div className={styles['sidebar-menu']}>
        <span title='Navigacija' onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? (
            <FaTimesCircle
              style={{
                fill:
                  showSidebar && height
                    ? '#111'
                    : showSidebar && !height
                    ? '#111'
                    : '',
              }}
            />
          ) : (
            <FaBars
              style={{
                fill: height ? '#111' : showSidebar && !height ? '#111' : '',
              }}
            />
          )}
        </span>
        <br />
      </div>
    </nav>
  );
};

export default Navbar;
