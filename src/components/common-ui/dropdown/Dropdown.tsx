import * as React from "react";
import { ISelectOption } from "../../../types";
import { VIEWMODE_OPTIONS } from "../../common-utils/constants";
import {
  DropdownArrow,
  DropdownContainer,
  DropdownControl,
  DropdownMenu,
  DropdownMenuItem,
  DropdownValue,
} from "./Dropdown.styles";

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: ISelectOption[];
}

export const Dropdown = ({
  options = VIEWMODE_OPTIONS,
  value = VIEWMODE_OPTIONS[0].value,
  onChange,
}: DropdownProps) => {
  const [open, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const toggle = () => setIsOpen((prevState) => !prevState);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <DropdownContainer ref={ref} onClick={() => setIsOpen(!open)}>
      <DropdownControl>
        <DropdownValue>{value}</DropdownValue>
        <DropdownArrow isOpen={open} />
      </DropdownControl>
      <DropdownMenu isOpen={open}>
        {options.map((option) => (
          <DropdownMenuItem
            onClick={() => {
              toggle();
              onChange(option.value);
            }}
            key={option.value}
          >
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};
