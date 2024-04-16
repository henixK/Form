export default function Input({name, placeholder}) {
  return (
    <div className="py-2">
      <p className="mb-2 font-medium text-marine-blue">{name}</p>
      <input
        className="w-full border border-cool-gray focus:border-marine-blue rounded-xl p-3 "
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
