import { useState } from "react";

interface TestProps {
  totalValue: number;
  description: string;
  buttonText: string;
  Func: (value: number) => void;
}

const Test: React.FC<TestProps> = ({
  buttonText,
  description,
  totalValue,
  Func,
}) => {
  const [input, setInput] = useState(0);

  return (
    <div>
      <h3>{description} Two Numbers</h3>
      <p>Total Value {totalValue.toFixed(2)}</p>
      <input
        onChange={(e) => setInput(parseInt(e.target.value) || input)}
        value={input}
      />
      <button
        onClick={() => {
          Func(input);
          setInput(0);
        }}
        style={{ display: "block" }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Test;
