import FsSlider from '../comps/fsSlider';
import styles from '../styles/ketering_info.module.scss';
import Meta from '../comps/meta';
const Proslave = () => {
  const fsProslave = [
    {
      imgSrc: '/sala/kameleon-sala-5.jpg',
      title: 'Proslave',
      text: 'kapacitet sale je od 80 do 300 mesta',
    },
    { imgSrc: '/ketering-slike-nove/proslave/2.jpg', title: '', text: '' },
    { imgSrc: '/ketering-slike-nove/proslave/3.jpg', title: '', text: '' },
  ];

  return (
    <>
      <Meta
        title='KAMELEON 2021 - Proslave'
        description='svadbe, krstenja, rodjendani'
      />

      <FsSlider fsPhotos={fsProslave} />
      <div className={styles.fotoContainer}>
        <div className={styles.katInfo}>
          <p>
            Eksluzivna svečana sala idealna za organizaciju svih vrsta događaja
            i svečanosti kapaciteta <b>od 80 do 300 mesta</b>.
          </p>

          <ul className={styles.listaProslave}>
            <li>Svadbe</li>
            <li>18. Rođendani</li>
            <li>Krštenja</li>
            <li>Dečiji rođendani</li>
            <li>Korporativne proslave</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Proslave;
