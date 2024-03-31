import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { default as BootstrapForm } from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";

export default function Form() {
  const [showSubmitNotification, setShowSubmitNotification] = useState(false);
  const [formValues, setFormValues] = useState({ username: "", color: "" });
  const [skip, setSkip] = useState(false);

  const toggleSubmitNotifcation = () =>
    setShowSubmitNotification(!showSubmitNotification);

  const onChange = (e: ChangeEvent) => {
    setFormValues({
      ...formValues,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value,
    });
  };

  const onCheckboxChange = () => setSkip((prv) => !prv);

  const submitForm = (e: MouseEvent | FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSubmitNotifcation();
  };

  return (
    <>
      <BootstrapForm onSubmit={submitForm}>
        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label htmlFor="username">Username</BootstrapForm.Label>
          <BootstrapForm.Control
            value={formValues.username}
            type="text"
            id="username"
            onChange={onChange}
            isValid={!!formValues.username.length}
            isInvalid={!!!formValues.username.length}
            data-testid='username-field'
            required
          />
          {!!!formValues.username.length && (
            <BootstrapForm.Control.Feedback data-testid="invalid-feedback-username" type="invalid">
              Please enter your username!
            </BootstrapForm.Control.Feedback>
          )}
          {!!formValues.username.length && (
            <BootstrapForm.Control.Feedback data-testid="valid-feedback-username" type="valid">
              Username is entered
            </BootstrapForm.Control.Feedback>
          )}
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label htmlFor="color">
            Favourite color
          </BootstrapForm.Label>
          <BootstrapForm.Control
            value={formValues.color}
            type="text"
            id="color"
            onChange={onChange}
            isValid={!!formValues.color.length}
            isInvalid={!!!formValues.color.length}
            data-testid='color-field'
            required
          />
          {!!!formValues.color.length && (
            <BootstrapForm.Control.Feedback data-testid="invalid-feedback-color" type="invalid">
              Please enter your favourite color!
            </BootstrapForm.Control.Feedback>
          )}
          {!!formValues.color.length && (
            <BootstrapForm.Control.Feedback data-testid="valid-feedback-color" type="valid">
              Favorite color is entered
            </BootstrapForm.Control.Feedback>
          )}
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId="exampleForm">
          <BootstrapForm.Check
            checked={skip}
            onChange={onCheckboxChange}
            type={"checkbox"}
            label="Accept terms and conditions and skip this form"
            data-testid="agreement-checkbox"
          />
        </BootstrapForm.Group>
        <Button
          disabled={
            !(skip && !!formValues.username.length && !!formValues.color.length)
          }
          type="submit"
          onClick={submitForm}
          aria-label="submit"
        >
          Submit
        </Button>
      </BootstrapForm>
      <div>
        <Toast show={showSubmitNotification} onClose={toggleSubmitNotifcation}>
          <Toast.Header>
            <strong className="me-auto">Form Submission</strong>
          </Toast.Header>
          <Toast.Body>The form was submitted successfully</Toast.Body>
        </Toast>
      </div>
    </>
  );
}
