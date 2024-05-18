const Result = () => {
  return (
    <div className="space-y-6 lg:space-y-[3.25rem]">
      <div className="flex justify-between ">
        <h3 className="flex flex-col justify-center text-white">
          Tip Amount{" "}
          <span className="text-[.8125rem] text-grayish-cyan">/ person</span>
        </h3>
        <p className="pt-1 text-3xl text-strong-cyan lg:text-[2.9rem]">$4.27</p>
      </div>
      <div className="flex justify-between ">
        <h3 className="flex flex-col justify-center text-white">
          Total <span className="text-[13px] text-grayish-cyan">/ person</span>
        </h3>
        <p className="pt-1 text-3xl text-strong-cyan lg:pt-0 lg:text-[2.9rem]">
          $32.79
        </p>
      </div>
    </div>
  );
};
export default Result;
