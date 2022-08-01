export default function Button({ label, action, bgOpacity }) {
  return (
    <button
      className={`bg-secondary text-white text-sm font font-medium rounded-md px-5 py-2 ${bgOpacity}`}
      onClick={action}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  label: "Button",
  bgOpacity: "bg-opacity-100",
  action: () => {},
};
