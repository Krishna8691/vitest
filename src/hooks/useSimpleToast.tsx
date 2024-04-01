import { useState } from "react";
import Toast from "react-bootstrap/Toast";

type SimpleToastType = {
  header: string;
  body: string;
};

export function useSimpleToast({ header, body }: SimpleToastType) {
  const [showSubmitNotification, setShowSubmitNotification] = useState(false);

  const toggleSubmitNotifcation = () =>
    setShowSubmitNotification(!showSubmitNotification);

  const renderToast = () => (
    <Toast show={showSubmitNotification} onClose={toggleSubmitNotifcation}>
      <Toast.Header>
        <strong className="me-auto">{header}</strong>
      </Toast.Header>
      <Toast.Body>{body}</Toast.Body>
    </Toast>
  );

  return {
    showSubmitNotification,
    toggleSubmitNotifcation,
    renderToast,
  };
}
