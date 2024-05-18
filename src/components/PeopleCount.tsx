import PersonIcon from "../assets/images/icon-person.svg";

const PeopleCount = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="people-count" className="text-dark-grayish-cyan">
        Number of People
      </label>
      <div className="relative">
        <img src={PersonIcon} alt="" className="absolute left-[1.1rem] top-4" />
        <input
          type="number"
          name="people-count"
          id="people-count"
          className="w-full rounded-md bg-very-light-grayish-cyan px-[1.1rem] py-1.5 pl-9 text-right text-[1.55rem] tracking-[-0.03em] text-very-dark-cyan"
          value={5}
          min={1}
          required
        />
      </div>
    </div>
  );
};
export default PeopleCount;
