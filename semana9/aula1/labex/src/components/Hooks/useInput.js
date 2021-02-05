import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  return [value, onChangeValue];
};

export default useInput;
