import styles from '../styles/fs_slider.module.scss';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const FsSlider = ({ fsPhotos, controls = false, auto = false }) => {
  let [idx, setIdx] = useState(0);

  function slide(dir) {
    if (dir === 'left') {
      setIdx(idx > 0 ? idx - 1 : fsPhotos.length - 1);
    } else {
      setIdx(idx < fsPhotos.length - 1 ? idx + 1 : 0);
    }
  }

  useEffect(() => {
    if (auto) {
      const autoSlide = setInterval(() => {
        setIdx(idx < fsPhotos.length - 1 ? idx + 1 : 0);
      }, 4000);
    }

    return () => clearInterval(autoSlide);
  }, [idx]);

  return (
    <div className={styles.top}>
      <div className={styles.wrapper} id={styles.sala}>
        <div className={styles.fsSlider}>
          {fsPhotos.map((img, i) => (
            <div
              key={i}
              className={styles.slideContainer}
              style={{ transform: `translateX(${idx * -100}vw)` }}
            >
              <img src={img.imgSrc} alt={img.title} />
              <div className={styles.title}>
                <h1>{img.title}</h1>
                <small>{img.text}</small>
              </div>
            </div>
          ))}
        </div>

        {controls && (
          <div className={styles.controls}>
            <button
              className={styles.sliderBtnLeft}
              onClick={() => slide('left')}
            >
              <FaArrowCircleLeft />
            </button>
            <button
              className={styles.sliderBtnRight}
              onClick={() => slide('right')}
            >
              <FaArrowCircleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FsSlider;
