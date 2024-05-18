import DollarIcon from "../assets/images/icon-dollar.svg";

const BillInput = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="bill" className="text-dark-grayish-cyan">
        Bill
      </label>
      <div className="relative">
        <img src={DollarIcon} alt="" className="absolute left-[1.2rem] top-4" />
        <input
          type="number"
          name="bill"
          id="bill"
          className="w-full rounded-md bg-very-light-grayish-cyan py-1.5 pl-9 pr-5 text-right text-[1.55rem] tracking-[-0.03em] text-very-dark-cyan"
          value={142.55}
        />
      </div>
    </div>
  );
};
export default BillInput;
