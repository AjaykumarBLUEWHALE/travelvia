import { useState } from "react";

export default function useBookingLogic() {
  const [counts, setCounts] = useState({
    Adult: 0,
    Child: 0,
    Infant: 0,
  });

  const increment = (optionLabel) => {
    setCounts((prev) => ({
      ...prev,
      [optionLabel]: prev[optionLabel] + 1,
    }));
  };

  const decrement = (optionLabel) => {
    setCounts((prev) => ({
      ...prev,
      [optionLabel]: prev[optionLabel] > 0 ? prev[optionLabel] - 1 : 0,
    }));
  };

  const options = [
    { label: "Adult", sub: "sub" },
    { label: "Child", sub: "sub" },
    { label: "Infant", sub: "sub" },
  ];

  const [isopen, setisopen] = useState(false);
  const [value, setValue] = useState("");

  return {
    counts,
    increment,
    decrement,
    options,
    isopen,
    setisopen,
    value,
    setValue,
  };
}
