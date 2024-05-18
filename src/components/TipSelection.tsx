import { twMerge } from "tailwind-merge";

const TipSelection = () => {
  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <div>
      <h2 className="text-dark-grayish-cyan">Select Tip %</h2>
      <div className="grid grid-cols-2 gap-4 pr-[0.1rem] pt-4 lg:grid-cols-3">
        {tipPercentages.map((percentage) => (
          <div
            key={percentage}
            className={twMerge(
              "rounded-md bg-very-dark-cyan py-[0.52rem] text-center text-white",
            )}
          >
            <label htmlFor={`tip-${percentage}`} className="text-2xl">
              {percentage}%
            </label>
            <input
              type="radio"
              id={`tip-${percentage}`}
              name="tip"
              value={percentage}
              className="appearance-none"
            />
          </div>
        ))}
        <div>
          <label htmlFor="custom-tip" className="sr-only">
            Custom Tip
          </label>
          <input
            type="number"
            id="custom-tip"
            className="h-full w-full appearance-none bg-very-light-grayish-cyan pr-4 text-right text-2xl placeholder-very-dark-cyan"
            placeholder="Custom"
            min={1}
          />
        </div>
      </div>
    </div>
  );
};
export default TipSelection;
