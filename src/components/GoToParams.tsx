import { NavLink } from "react-router-dom";

interface Props {
  id: number;
}

export default function GoToParams({ id = 5151 }: Props) {
  return (
    <div>
      <NavLink data-testid="go-to-params-link" to={`/params/${id}`}>
        Go To Params
      </NavLink>
    </div>
  );
}
