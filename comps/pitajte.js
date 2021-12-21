import styles from '../styles/pitajte.module.scss';
const Pitajte = ({ bg = null }) => {
  console.log(bg);
  return (
    <div className={styles['pitajte']}>
      <h2>imate pitanje?</h2>
      <div className='straight-line'></div>

      <form
        method='POST'
        action='https://formsubmit.co/keteringkameleon@gmail.com'
        className={styles['form']}
      >
        <input
          id={styles['ime']}
          type='text'
          name='name'
          placeholder='ime*'
          required
        />
        <input
          id={styles['email']}
          type='email'
          name='email'
          placeholder='email*'
          required
        />
        <textarea
          name={styles['pitanje']}
          id={styles['pitanje']}
          placeholder='pitanje*'
          required
        ></textarea>
        <button id='submit-btn' type='submit'>
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default Pitajte;
