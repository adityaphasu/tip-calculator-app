import BillInput from "./BillInput";
import PeopleCount from "./PeopleCount";
import ResetButton from "./ResetButton";
import Result from "./Result";
import TipSelection from "./TipSelection";

const Form = () => {
  return (
    <form className="px-8 py-8 lg:grid lg:grid-cols-2 lg:gap-[1.8rem]">
      <div className="flex flex-col gap-[1.88rem] lg:gap-[2.45rem] lg:px-4 lg:py-3">
        <BillInput />
        <TipSelection />
        <PeopleCount />
      </div>
      <div className="pt-8 lg:p-0">
        <div className="flex flex-col gap-9 rounded-xl bg-very-dark-cyan px-6 pb-6 pt-[2.4rem] lg:h-full lg:justify-between lg:px-10 lg:pb-[2.4rem] lg:pt-[3.4rem]">
          <Result />
          <ResetButton />
        </div>
      </div>
    </form>
  );
};
export default Form;
