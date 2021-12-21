/* eslint-disable @next/next/no-img-element */
import { useReducer, useState } from 'react';
import Link from 'next/link';
import FsSlider from '../../comps/fsSlider';
import styles from '../../styles/ketering.module.scss';
import { useGlobalContext } from '../../context';
import Modal from '../../comps/modal';
import ReactMarkdown from 'react-markdown';
import Meta from '../../comps/meta';

const Ketering = () => {
  const {
    showModal,
    setShowModal,
    modalImage,
    setModalImage,
    importAll,
    data: { hyperlinks, keteringInfo, fsKetering },
  } = useGlobalContext();

  //za firme
  const f = importAll(
    require.context(
      '/public/ketering-slike-nove/firme',
      false,
      /\.(png|jpe?g|JPG|svg)$/
    )
  );

  //za proslave
  const p = importAll(
    require.context(
      '/public/ketering-slike-nove/proslave',
      false,
      /\.(png|jpe?g|JPG|svg)$/
    )
  );

  //za slave
  const s = importAll(
    require.context(
      '/public/ketering-slike-nove/slatki',
      false,
      /\.(png|jpe?g|JPG|svg)$/
    )
  );

  const [slikeFirme] = useState(
    f.map((img) => img.default).map((image) => image.src)
  );
  const [slikeProslave] = useState(
    p.map((img) => img.default).map((image) => image.src)
  );
  const [slikeSlatki] = useState(
    s.map((img) => img.default).map((image) => image.src)
  );

  const keteringKategorije = [
    {
      id: 'firme',
      heading: 'Ketering za Firme',
      images: slikeFirme,
    },
    {
      id: 'proslave',
      heading: 'Ketering za Proslave',
      images: slikeProslave,
    },
    {
      id: 'slatki',
      heading: 'Slatki Ketering',
      images: slikeSlatki,
    },
  ];

  return (
    <>
      <Meta
        title='KAMELEON 2021 - Ketering'
        description='ketering za zaposlene, ketering za proslave'
      />
      <FsSlider fsPhotos={fsKetering} controls />

      <div className={styles.fotoContainer}>
        <div className={styles.katInfo}>
          <ReactMarkdown>{keteringInfo[0].heading}</ReactMarkdown>
          <ReactMarkdown>{keteringInfo[0].body}</ReactMarkdown>
        </div>
        <div className={styles.keteringTip}>
          {hyperlinks.map((item, idx) => (
            <div key={idx} className={styles.keteringItem}>
              <Link href={item.link}>
                <a>
                  <div className={styles.content}>
                    <h2>
                      {item.title}
                      <br />
                    </h2>
                    <img src={item.imgSrc} alt={`link to ${item.title}`} />
                    <div id={styles.overlay}></div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* onclick setstate(jedan state umesto tri posto prikazujemo po jedan) i onda render te kategorije */}
      <div className={styles.keteringTypes}>
        {keteringKategorije.map((kategorija, index) => (
          <div key={index} className={styles.keteringItems}>
            <h2 id={kategorija.id} className={styles.keteringKategorija}>
              {kategorija.heading}
            </h2>
            <div className='straight-line'></div>
            <div className={styles.gallery}>
              {kategorija.images.map((img, index) => (
                <div key={index} className={styles.galleryItem}>
                  <img
                    onClick={(e) => {
                      setModalImage(e.currentTarget.src);
                      setShowModal(true);
                    }}
                    src={img}
                    alt={index}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showModal && <Modal img={modalImage} showModal={setShowModal} />}
    </>
  );
};

export default Ketering;
