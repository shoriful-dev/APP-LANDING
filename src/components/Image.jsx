

const Image = ({className, imgSrc, imgAlt}) => {
  return (
    <img className={`w-full bg-no-repeat bg-center bg-cover ${className}`} src={imgSrc} alt={imgAlt} />
  )
}

export default Image;
