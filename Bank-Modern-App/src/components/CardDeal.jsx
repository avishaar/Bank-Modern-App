import {card} from '../assets';
import styles, {layout} from '../constants/style'
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>A good credit card deal offers favorable terms such as low interest rates, generous rewards programs, and minimal fees, providing consumers with the opportunity to maximize their financial benefits while effectively managing their expenses.</p>
    
      <Button styles='mt-10' />
    
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]' />
    </div>

  </section>
)

export default CardDeal;