import { RefObject, useEffect, useRef, useState } from "react";

type UseOutsideClickReturn<T extends HTMLElement> = [
  boolean,
  RefObject<T>,
  () => void,
  () => void,
];

const useOutsideClick = <T extends HTMLElement>(): UseOutsideClickReturn<T> => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(true);
  };

  const dropDownRef = useRef<T>(null);
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(e.target as Node)
    ) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleMouseLeave = () => {
    setIsShow(false);
  };

  return [isShow, dropDownRef, handleClick, handleMouseLeave];
};

export default useOutsideClick;
