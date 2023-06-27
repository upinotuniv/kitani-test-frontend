export default function Button(props) {
  const { color = "bg-green-500" } = props;
  return (
    <button
      {...props}
      className={`w-full ${color} px-4 py-2 rounded-md text-xs font-bold text-white`}
    >
      {props.children}
    </button>
  );
}
