import defaultImage from "../../../assets/images/icon_user.png"
import styles from "./ProfileImage.module.css"

const SIZES = {
  xs: '1.5rem',
  sm: '2rem',
  md: '3rem',
  lg: '5rem',
  xl: '7rem'
}

const ProfileImage = ({
  image,
  size = 'sm',
  className = '',
  ...props
}) => {
  const src = image || defaultImage;
  const imageSize = SIZES[size] || (isNaN(size) ? size : `${size}px`);

  return (
    <div 
      className={`${styles.frame} ${className}`}
      style={{
        width:imageSize,
        height:imageSize
      }}
    >
      <img 
        src={src}
        alt="profile"
        className={styles.image}
      ></img>
    </div>
  )
}

export default ProfileImage