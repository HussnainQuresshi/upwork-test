import React, { useState } from "react";
import { Modal } from "react-bootstrap";
interface ModalProps {
  btnComponent?: (props: { onClick: () => void }) => React.ReactNode;
  content: (props: { onClose: () => void }) => React.ReactNode;
  title: string;
  isOpen?: boolean;
}
function ModalContainer({ btnComponent, content, title, isOpen }: ModalProps) {
  const [isVisible, setIsVisible] = useState(!!isOpen);
  const showModal = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <>
      {btnComponent && btnComponent({ onClick: showModal })}
      <Modal
        show={isVisible}
        onHide={() => handleCancel()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content({ onClose: handleCancel })}</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalContainer;
