import { Modal } from "../..";
import { useModalContext } from "../../model";

interface ModalFooterProps {
  submitBtnText: string;
  size?: string;
  onSubmit: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  submitBtnText,
  size,
  onSubmit,
}) => {
  const { closeModal } = useModalContext();

  return (
    <footer className="modal__content-footer">
      <Modal.ModalBtn type="primary" size={size || ""} onClick={onSubmit}>
        {submitBtnText}
      </Modal.ModalBtn>
      <Modal.ModalBtn onClick={closeModal}>Закрыть</Modal.ModalBtn>
    </footer>
  );
};
