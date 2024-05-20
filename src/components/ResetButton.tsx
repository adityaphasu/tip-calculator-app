type ResetButtonProps = {
  setBill: (value: number) => void;
  setTipPercentage: (value: number) => void;
  setPeople: (value: number) => void;
  setCustomTip: (value: boolean) => void;
  setTipAmount: (value: number) => void;
  setTotalAmount: (value: number) => void;
};

const ResetButton = ({
  setBill,
  setTipPercentage,
  setPeople,
  setCustomTip,
  setTipAmount,
  setTotalAmount,
}: ResetButtonProps) => {
  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(0);
    setCustomTip(false);
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <button
      className="hover:bg-light-cyan rounded-md bg-strong-cyan py-2.5 text-xl uppercase text-very-dark-cyan"
      onClick={handleReset}
    >
      Reset
    </button>
  );
};
export default ResetButton;
