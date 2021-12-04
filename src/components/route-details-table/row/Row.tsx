import { PIIButton, MaskedButton } from "../RouteDetailsTable.styled";

type Field = "urlParams" | "queryParams" | "headers" | "body";

interface RowProps {
  index: number;
  field: Field;
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
  handleToggleButton: (field: string, property: string, index: number) => void;
}

export const Row = ({
  index,
  field,
  name,
  pii,
  masked,
  type,
  handleToggleButton,
}: RowProps) => {
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>
        <PIIButton
          isActive={pii}
          onClick={() => handleToggleButton(field, "pii", index)}
        >
          PII
        </PIIButton>
      </td>
      <td>
        <MaskedButton
          isActive={masked}
          onClick={() => handleToggleButton(field, "masked", index)}
        >
          MASKED
        </MaskedButton>
      </td>
      <td>{type.toUpperCase()}</td>
    </tr>
  );
};

export default Row;
