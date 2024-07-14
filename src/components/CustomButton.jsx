const CustomButton = ({ title, icon, otherStyles , click }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-color-primary-variant p-3 rounded-md scale-95 hover:scale-100 duration-75 ${otherStyles}`}
      type="submit"
      onClick={click}
    >
      {icon && <span>{icon}</span>}

      {title}
    </button>
  );
};

export default CustomButton;
