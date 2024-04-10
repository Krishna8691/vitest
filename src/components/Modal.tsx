import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CounterContext } from "../App";

export default function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const counterCtx = useContext(CounterContext)!;

  const handleClose = () => setIsModalOpen(false);
  const handleShow = () => setIsModalOpen(true);

  return (
    <div style={{ display: "block", position: "initial" }}>
      <Button data-testid="open-modal" variant="primary" onClick={handleShow}>
        Open modal
      </Button>
      <Modal show={isModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Some Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button
            onClick={counterCtx?.increamentCounter}
            variant="primary"
            className="me-3"
          >
            Increase Counter
          </Button>
          <Button
            onClick={counterCtx?.decreamentCounter}
            variant="primary"
          >
            Decrease Counter
          </Button>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Close</Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
