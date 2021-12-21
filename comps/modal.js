import { FaTimesCircle } from 'react-icons/fa';
import styles from '../styles/modal.module.scss';
import Image from 'next/image';
const Modal = ({ img, showModal }) => {
  return (
    <div
      className={styles.modal}
      onClick={() => showModal(false)}
      title='click to close'
    >
      {/* <FaTimesCircle onClick={() => showModal(false)} /> */}
      <img src={img} alt='' />
    </div>
  );
};

export default Modal;
