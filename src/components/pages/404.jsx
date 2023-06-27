export default function Error() {
  return (
    <div className="flex justify-center items-center w-full h-screen p-20">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[200px] font-black text-red-500 drop-shadow-2xl shadow-black tracking-widest leading-[120px]">
            404
          </h1>
          <h1 className="text-[100px] font-black text-red-500 drop-shadow-2xl shadow-black tracking-widest ">
            ERROR
          </h1>
        </div>
      </div>
    </div>
  );
}
