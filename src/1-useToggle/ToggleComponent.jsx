import useToggle from "./useToggle";

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <p>{value.toString()}</p>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Set True</button>
      <button onClick={() => toggleValue(false)}>Set False</button>
      <br />
    </div>
  );
};

export default ToggleComponent;
