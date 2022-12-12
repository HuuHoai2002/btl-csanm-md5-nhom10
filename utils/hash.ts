import md5 from "md5";

type T = string | number[] | Uint8Array;

export default function Hash(value: T) {
  return md5(value);
}
