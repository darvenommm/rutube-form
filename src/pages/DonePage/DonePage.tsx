import componentClasses from '@/share/components/styles/components.module.scss';
import classes from './DonePage.module.scss';
import imageUrl from '@/assets/images/done/done.png';
import imageUrl2x from '@/assets/images/done/done@2x.png';

export const DonePage = (): JSX.Element => {
  return (
    <div className={componentClasses.container}>
      <div className={classes.innerContainer}>
        <img
          className={classes.image}
          aria-hidden
          srcSet={`${imageUrl}, ${imageUrl2x} 2x`}
          width={524}
          height={232}
          src={imageUrl}
          alt=""
        />
        <h2 className={classes.title}>Вы уже прошли этот опрос</h2>
        <p className={classes.text}>
          Спасибо, что делитесь мнением и&nbsp;помогаете нам быть лучше
        </p>
        <a className={componentClasses.button} href="https://rutube.ru/">
          Перейти на RUTUBE
        </a>
      </div>
    </div>
  );
};
