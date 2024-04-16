export default function Button({title, click}) {
  return (
    <button onClick={click} className="py-2 px-4 rounded-md bg-marine-blue text-white absolute bottom-0 right-24">
      {title}
    </button>
  );
}
