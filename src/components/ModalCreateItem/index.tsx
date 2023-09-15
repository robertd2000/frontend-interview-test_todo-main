/* VENDOR */
import { Modal } from "../Modal";
import { useModalCreateItem } from "./hooks/useModalCreateItem";

/* APPLICATION */

interface ModalCreateItemProps {
  active: boolean;
  closeModal: () => void;
}

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  closeModal,
}) => {
  const {
    name,
    setName,
    selected,
    setSelected,
    description,
    setDescription,
    onSubmit,
    isCategories,
  } = useModalCreateItem(closeModal);

  return (
    <Modal active={active} closeModal={closeModal}>
      <Modal.ModalHeader />
      {isCategories ? (
        <Modal.ModalInput name={name} setName={setName} size="large" />
      ) : (
        <Modal.ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <Modal.ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <Modal.ModalFooter
        submitBtnText="Создать"
        size="large"
        onSubmit={onSubmit}
      />
    </Modal>
  );
};
