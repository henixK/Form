import Input from "../Input";
import FormTitle from "../FormTitle";

export default function Step1({ children }) {
  return (
    <section>
      <FormTitle
        title={"Personal Info"}
        description={
          "Please provide your name, email address, and phone number."
        }
      />
      <section className="mt-5 flex flex-col gap-2">
        <Input name={"Name"} placeholder={"e.g Stephen King"} />
        <Input
          name={"Email Address"}
          placeholder={"e.g stephenking@lorem.com"}
        />
        <Input name={"Phone number"} placeholder={"e.g 1 234 567 890"} />
      </section>
      {children}
    </section>
  );
}
