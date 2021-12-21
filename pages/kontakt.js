import FsSlider from '../comps/fsSlider';
import styles2 from '../styles/ketering_info.module.scss';
import styles from '../styles/pitajte.module.scss';
import Meta from '../comps/meta';
import Pitajte from '../comps/pitajte';

const Kontakt = () => {
  const kontaktTel = [
    { imgSrc: '/ketering-slike-nove/phone.jpg', title: 'Kontakt', text: '' },
  ];
  return (
    <>
      <Meta title='KAMELEON 2021 - Kontakt' description='kameleon kontakt' />

      <FsSlider fsPhotos={kontaktTel} />
      <div className={styles2.fotoContainer}>
        <Pitajte />
      </div>
    </>
  );
};

export default Kontakt;
