/* eslint-disable @next/next/no-img-element */
import styles from '../styles/photoslider.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Modal from './modal';

const PhotoSlider = () => {
  const { importAll } = useGlobalContext();
  const refImage = useRef(null);
  const [margin] = useState(10); //margin
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [idx, setIdx] = useState(0);
  const [ratio, setRatio] = useState(null);
  const [s] = useState(
    importAll(require.context('/public/sala', false, /\.(png|jpe?g|JPG|svg)$/))
  );

  const [fotke] = useState(
    s.map((img) => img.default).map((image) => image.src)
  );

  useEffect(() => {
    setRatio(Math.floor(window.innerWidth / (refImage.current.width + margin)));
  }, []);

  function handleClick(direction) {
    if (direction === 'left') {
      setIdx(idx > 0 ? idx - 1 : fotke.length - ratio);
    } else {
      setIdx(idx < fotke.length - ratio ? idx + 1 : 0);
    }
  }

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIdx(idx < fotke.length - ratio ? idx + 1 : 0);
    }, 2000);

    return () => clearInterval(autoSlide);
  }, [idx]);

  return (
    <>
      <div className={styles['photo-slider']}>
        <h2>Galerija slika</h2>
        <div className='straight-line'></div>
        <div className={styles['photos']}>
          <div
            className={styles['img-slides']}
            style={{ transform: `translateX(-${idx * 310}px)` }}
          >
            {fotke.map((fotka, i) => (
              <img
                ref={refImage}
                key={i}
                src={fotka}
                alt={`kameleon-${i}`}
                onClick={(e) => {
                  setModalImage(e.currentTarget.src);
                  setShowModal(true);
                }}
              />
            ))}
          </div>
          <div className={styles['btn-container']}>
            <button
              className={styles['btn-left']}
              onClick={() => handleClick('left')}
            >
              <FaArrowCircleLeft />
            </button>
            <button
              className={styles['btn-right']}
              onClick={() => handleClick('right')}
            >
              <FaArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
      {showModal && <Modal img={modalImage} showModal={setShowModal} />}
    </>
  );
};

export default PhotoSlider;
