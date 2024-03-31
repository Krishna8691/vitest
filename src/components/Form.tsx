import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { default as BootstrapForm } from "react-bootstrap/Form";

export default function Form() {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({ username: "", color: "" });

  const onChange = (e: ChangeEvent) => {
    setFormValues({
      ...formValues,
      [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value,
    });
  };

  const submitForm = (e: MouseEvent | FormEvent) => {
    // const form = e.currentTarget as HTMLFormElement;
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <BootstrapForm validated={validated} onSubmit={submitForm}>
      <BootstrapForm.Group className="mb-3" controlId="exampleForm">
        <BootstrapForm.Label>Username</BootstrapForm.Label>
        <BootstrapForm.Control
          value={formValues.username}
          type="text"
          id="username"
          onChange={onChange}
          placeholder="Enter your username"
          required
        />
        <BootstrapForm.Control.Feedback type="invalid">
          Please enter your username!
        </BootstrapForm.Control.Feedback>
      </BootstrapForm.Group>
      <BootstrapForm.Group className="mb-3" controlId="exampleForm">
        <BootstrapForm.Label>Favourite color</BootstrapForm.Label>
        <BootstrapForm.Control
          value={formValues.color}
          id="color"
          onChange={onChange}
          type="password"
          placeholder="Enter your favourite color"
          required
        />
        <BootstrapForm.Control.Feedback type="invalid">
          Please enter your favourite color!
        </BootstrapForm.Control.Feedback>
      </BootstrapForm.Group>
      <Button type="submit" onClick={submitForm}>
        Submit
      </Button>
    </BootstrapForm>
  );
}
