import styles from '../styles/sidebar.module.scss';
import Link from 'next/link';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const {
    setShowSidebar,
    data: { links },
  } = useGlobalContext();

  return (
    <div className={styles['sidebar']}>
      <ul className={styles['sidebar-links']}>
        {links.map((link, idx) => (
          <li
            className={styles['sidebar-link']}
            key={idx}
            onClick={() => setShowSidebar(false)}
          >
            <Link href={link.path}>
              <a>{link.link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
