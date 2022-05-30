import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} font-medium px-3.5 py-2 w-${width} hover:shadow-xl hover:bg-${bgHoverColor} transition duration-300`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
