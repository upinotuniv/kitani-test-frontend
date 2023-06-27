export default function AmountLayout(props) {
  const { children } = props;
  return (
    <div className="flex justify-center items-center w-full h-screen bg-lime-300 p-10">
      <div className="flex justify-center items-center w-full h-1/2 2xl:h-full">
        {children}
      </div>
    </div>
  );
}
