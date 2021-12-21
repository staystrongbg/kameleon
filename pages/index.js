import Head from 'next/head';
import styles from '../styles/home.module.scss';
import stylesInfo from '../styles/info.module.scss';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import PhotoSlider from '../comps/photoSlider';
import Pitajte from '../comps/pitajte';
import { useGlobalContext } from '../context';
import Meta from '../comps/meta';

export default function Home() {
  const {
    data: { info, description, heroContent },
  } = useGlobalContext();
  return (
    <>
      <Meta title='KAMELEON 2021 - Početna Strana' />
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.left} id={styles.proslave}>
            <Link href='/svecana'>
              <a>
                <div className={styles.service}>
                  <h1>{heroContent[0].head}</h1>
                  <small>{heroContent[0].text}</small>
                </div>
                <div className={`${styles.proslaveCL} ${styles.service}`}></div>
              </a>
            </Link>
          </div>
          <div className={styles.right} id={styles.ketering}>
            <Link href='/ketering'>
              <a>
                <div className={styles.service}>
                  <h1>{heroContent[1].head}</h1>
                  <small>{heroContent[1].text}</small>
                </div>
                <div className={`${styles.keteringCR} ${styles.service}`}></div>
              </a>
            </Link>
          </div>

          <div className={styles.cLogo}>
            <img src='/logo_w.png' alt='Logo' />
            <small>{description[0].desc}</small>
          </div>
        </div>
      </section>

      <section className={stylesInfo.info}>
        <div className={stylesInfo.about}>
          <h2>{description[0].title}</h2>
          <span>{description[0].desc}</span>
          <div className='straight-line'></div>
          <ReactMarkdown>{description[0].about}</ReactMarkdown>
        </div>
        {info.map((item, idx) => (
          <div key={idx} className={stylesInfo.salaInfo}>
            <div className={stylesInfo.infoText}>
              <h2>{item.title}</h2>
              <div className='straight-line'></div>
              <ReactMarkdown>{item.text}</ReactMarkdown>
              <Link href={item.link}>
                <a>više</a>
              </Link>
            </div>
            <div className={stylesInfo.infoImage}>
              <img src={item.image} alt='slider image' />
            </div>
          </div>
        ))}
      </section>

      <PhotoSlider />
      <Pitajte />
    </>
  );
}
