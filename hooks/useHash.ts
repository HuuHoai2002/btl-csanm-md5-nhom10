import { useCallback, useState } from "react";
import Hash from "../utils/hash";

export default function useHash() {
  const [hash, setHash] = useState<string>();
  const [value, setValue] = useState<string>();

  const onAutoHashChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value !== "") {
        setHash(Hash(value));
      } else {
        setHash("");
      }
    },
    []
  );

  const onClickHashChange = () => {
    if (value !== "" && value !== undefined) {
      setHash(Hash(value));
    } else {
      setHash("");
    }
  };

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    },
    []
  );

  return {
    hash,
    onAutoHashChange,
    onClickHashChange,
    onValueChange,
    value,
    setHash,
  };
}
