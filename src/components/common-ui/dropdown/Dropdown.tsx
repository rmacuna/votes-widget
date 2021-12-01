import { ISelectOption } from "../../../types";
import { DropdownContainer } from "./Dropdown.styles";

interface DropdownProps {
  options: ISelectOption[];
}

export const Dropdown = ({ options }: DropdownProps) => {
  return (
    <DropdownContainer>
      {options.map(({ id, name, value }) => {
        return (
          <option key={id} value={value}>
            {name}
          </option>
        );
      })}
    </DropdownContainer>
  );
};

Dropdown.defaultProps = {
  options: [
    { id: 1, name: "Grid view" },
    { id: 2, name: "List view" },
  ],
};
