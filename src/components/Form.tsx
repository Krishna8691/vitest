import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { Button, FormLabel } from "react-bootstrap";
import { default as BootstrapForm } from "react-bootstrap/Form";
import { useSimpleToast } from "../hooks/useSimpleToast";
import TopRightRenderer from "../wrappers/TopRightRenderer";

export interface Props {
  username: string;
  color: string;
  checkbox: boolean;
  onChange: (e: ChangeEvent) => void;
  onCheckboxChange: () => void;
  submitForm: (e: MouseEvent | FormEvent) => void;
}

export default function Form() {
  const { toggleSubmitNotifcation, renderToast } = useSimpleToast({
    header: "Form submitted",
    body: "the form was successful submitted, data is now saved!",
  });
  const [formValues, setFormValues] = useState({ username: "", color: "" });
  const [checkbox, setCheckbox] = useState(false);

  const onChange = (e: ChangeEvent) => {
    setFormValues({
      ...formValues,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value,
    });
  };

  const onCheckboxChange = () => {
    setCheckbox((prv) => !prv);
  };

  const submitForm = (e: MouseEvent | FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // some api request can be triggered here, not getting into the details of the implementation ;)
    setTimeout(() => {
      toggleSubmitNotifcation();
    }, 1000);
  };

  return (
    <>
      <SampleForm
        onChange={onChange}
        onCheckboxChange={onCheckboxChange}
        checkbox={checkbox}
        submitForm={submitForm}
        username={formValues.username}
        color={formValues.color}
      />
      <TopRightRenderer>{renderToast()}</TopRightRenderer>
    </>
  );
}

export function SampleForm({
  username,
  color,
  checkbox,
  onChange,
  onCheckboxChange,
  submitForm,
}: Props): JSX.Element {
  const [status, setStatus] = useState("");
  const handleSubmit = (e: MouseEvent | FormEvent) => {
    submitForm(e);
    setStatus("Form is submitted");
  };

  return (
    <>
      <BootstrapForm onSubmit={submitForm}>
        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label htmlFor="username">Username</BootstrapForm.Label>
          <BootstrapForm.Control
            value={username}
            type="text"
            id="username"
            onChange={onChange}
            isValid={!!username.length}
            isInvalid={!!!username.length}
            data-testid="username-field"
            required
          />
          {!!!username.length && (
            <BootstrapForm.Control.Feedback
              data-testid="invalid-feedback-username"
              type="invalid"
            >
              Please enter your username!
            </BootstrapForm.Control.Feedback>
          )}
          {!!username.length && (
            <BootstrapForm.Control.Feedback
              data-testid="valid-feedback-username"
              type="valid"
            >
              Username is entered
            </BootstrapForm.Control.Feedback>
          )}
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3">
          <BootstrapForm.Label htmlFor="color">
            Favourite color
          </BootstrapForm.Label>
          <BootstrapForm.Control
            value={color}
            type="text"
            id="color"
            onChange={onChange}
            isValid={!!color.length}
            isInvalid={!!!color.length}
            data-testid="color-field"
            required
          />
          {!!!color.length && (
            <BootstrapForm.Control.Feedback
              data-testid="invalid-feedback-color"
              type="invalid"
            >
              Please enter your favourite color!
            </BootstrapForm.Control.Feedback>
          )}
          {!!color.length && (
            <BootstrapForm.Control.Feedback
              data-testid="valid-feedback-color"
              type="valid"
            >
              Favorite color is entered
            </BootstrapForm.Control.Feedback>
          )}
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId="exampleForm">
          <BootstrapForm.Check
            checked={checkbox}
            onChange={onCheckboxChange}
            type={"checkbox"}
            label="Accept terms and conditions and skip this form"
            data-testid="agreement-checkbox"
          />
        </BootstrapForm.Group>
        <Button
          disabled={
            !(checkbox && !!username.length && !!color.length) ||
            !!status.length
          }
          type="submit"
          onClick={handleSubmit}
          aria-label="submit"
        >
          Submit
        </Button>
        <FormLabel role="status" className="ms-2">{status}</FormLabel>
      </BootstrapForm>
    </>
  );
}
