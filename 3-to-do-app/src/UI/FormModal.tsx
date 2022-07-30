import React from "react";

import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";

const FormModal: React.FC<{
  modal: boolean;
  toggle: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}> = ({ modal, toggle, children }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Todo Form</ModalHeader>
      <ModalBody>{children}</ModalBody>
      {/* <ModalFooter>
        <Button color="primary">Create ToDo!!</Button>
        <Button color="warning" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter> */}
    </Modal>
  );
};

export default FormModal;
