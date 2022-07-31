import React from "react";

import { Modal, ModalHeader, ModalBody } from "reactstrap";

const FormModal: React.FC<{
  modal: boolean;
  toggle: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}> = ({ modal, toggle, children }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Todo Form</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default FormModal;
