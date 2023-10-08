// Button
const Button = ({
  label,
  iconURL,
  type = "button",
  backgroundColor = "bg-coral-red",
  borderColor = "border-coral-red",
  textColor = "text-white",
  fullWidth,
}) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor} ${textColor} ${borderColor} ${
        fullWidth && "w-full"
      }`}
      title={label}
    >
      {/* button label */}
      {label}

      {/* button right icon */}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
