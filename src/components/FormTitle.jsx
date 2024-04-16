export default function FormTitle({ title, description }) {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-marine-blue">{title}</h1>
      <p className="my-2 text-lg text-cool-gray">{description}</p>
    </div>
  );
}
