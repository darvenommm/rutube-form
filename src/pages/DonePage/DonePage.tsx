import classes from './DonePage.module.scss';
import imageUrl from '@/assets/images/done.png';

export const DonePage = (): JSX.Element => {
  return (
    <div className="container">
      <div className={classes.innerContainer}>
        <img className={classes.image} aria-hidden src={imageUrl} width={524} height={232} alt="" />
        <h2 className={classes.title}>Вы уже прошли этот опрос</h2>
        <p className={classes.text}>
          Спасибо, что делитесь мнением и&nbsp;помогаете нам быть лучше
        </p>
        <a className="button" href="">
          Перейти на RUTUBE
        </a>
      </div>
    </div>
  );
};
