import styles from '../styles/footer.module.scss';
import Link from 'next/link';
import { useGlobalContext } from '../context';

import {
  FaFacebookSquare,
  FaIdCard,
  FaInstagramSquare,
  FaMapMarker,
  FaPhone,
  FaSitemap,
} from 'react-icons/fa';

const Footer = ({ color = '#121212' }) => {
  const {
    data: { links },
  } = useGlobalContext();
  return (
    <footer className={styles.footer}>
      <div className={styles['mapa']}>
        <FaMapMarker />
        <h3>Kako do nas?</h3>

        <Link
          href='https://goo.gl/maps/HkxK9LoQs1FMSduH8'
          title='Open Google maps'
        >
          <a target='_blank'>27. Marta 15a, Beograd</a>
        </Link>
      </div>
      <div className={styles['kontakt']}>
        <FaIdCard />
        <h3>Kontakt</h3>
        <p>Za sve informacije, kontaktirajte nas.</p>
        <h3>Ketering</h3>
        <div>
          <span>
            <FaPhone />
          </span>
          <Link href='tel:062 222 132'>
            <a>062 222 132</a>
          </Link>
        </div>

        <h3>Sala</h3>
        <div>
          <span>
            <FaPhone />
          </span>
          <Link href='tel:061 30 10 400'>
            <a>061 30 10 400</a>
          </Link>
          <br />
          <span>
            <FaPhone />
          </span>
          <Link href='tel:069 30 10 400'>
            <a>069 30 10 400</a>
          </Link>
        </div>

        <div className={styles.email}>
          <Link href='mailto:keteringkameleon@gmail.com'>
            <a>keteringkameleon@gmail.com</a>
          </Link>
        </div>
        <div className={styles['social-icons']}>
          <Link href='https://www.instagram.com/keteringkameleon2021/'>
            <a>
              <FaInstagramSquare />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles['linkovi']}>
        <FaSitemap />
        <h3>Mapa sajta</h3>
        <ul className={styles['links']}>
          {links.map((link, idx) => (
            <li className={styles['link']} key={idx}>
              <Link href={link.path}>
                <a>{link.link}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <span
        style={{
          position: 'absolute',
          bottom: '0',
          fontWeight: '200',
          fontSize: '12px',
        }}
      >
        &copy;KAMELEON 2021 | by{' '}
        <a
          style={{
            color: 'black',
          }}
          target='_blank'
          rel='noreferrer'
          href='https://devox-portfolio.netlify.app'
        >
          devox
        </a>
      </span>
    </footer>
  );
};

export default Footer;
