export default function Step3Button({ title, description, price }) {
  return (
    <div className="w-full border flex justify-between items-center py-5 rounded-xl px-5">
      <div className="flex gap-5 items-center">
        <input
          className="w-5 h-5 checked:bg-marine-blue"
          type="checkbox"
          name=""
          id=""
        />
        <div className="">
          <h1 className="font-bold">{title}</h1>
          <p className="text-cool-gray">{description}</p>
        </div>
      </div>
      <p className="text-purplish-blue">{price}</p>
    </div>
  );
}
