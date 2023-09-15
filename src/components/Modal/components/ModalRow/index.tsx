import { Modal } from "../..";

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  return (
    <div className="modal__content_row">
      <Modal.ModalInput name={name} setName={setName} />
      <Modal.ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
