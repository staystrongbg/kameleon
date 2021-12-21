import styles from '../styles/Navigation.module.scss';
import Link from 'next/link';
import { useGlobalContext } from '../context';
const Dropdown = () => {
  const {
    data: { links },
  } = useGlobalContext();
  const k = links.find((link) => link.id === 'ketering').sublinks;
  return (
    <div className={styles.dropdown}>
      {k.map((sublink, i) => (
        <Link href={`/ketering/#${sublink.hyperlink}`} key={i}>
          <a>{sublink.link}</a>
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
