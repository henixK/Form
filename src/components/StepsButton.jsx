export default function StepsButton({ nStep, text }) {
  return (
    <section className="flex text-white gap-5 w-min lg:w-max font-thin justify-center ">
      <div className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-white">
        {nStep}
      </div>
      <div className="font-thin uppercase text-sm text-light-gray hidden lg:block">
        step {nStep}
        <h1 className="text-white uppercase font-bold">{text}</h1>
      </div>
    </section>
  );
}
