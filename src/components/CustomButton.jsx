import { Link } from "react-router-dom";

const CustomButton = ({
  title,
  icon,
  otherStyles,
  click,
  link,
  isExternal,
}) => {
  const commonStyles = `flex items-center justify-center gap-2 bg-color-primary-variant p-3 rounded-md scale-95 hover:scale-100 duration-75 ${otherStyles}`;

  if (link) {
    if (isExternal) {
      return (
        <a
          href={link}
          className={commonStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && <span>{icon}</span>}
          {title}
        </a>
      );
    } else {
      return (
        <Link to={link} className={commonStyles}>
          {icon && <span>{icon}</span>}
          {title}
        </Link>
      );
    }
  } else {
    return (
      <button className={commonStyles} type="button" onClick={click}>
        {icon && <span>{icon}</span>}
        {title}
      </button>
    );
  }
};

export default CustomButton;
