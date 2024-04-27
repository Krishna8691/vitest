import { useParams } from "react-router-dom";

export default function ParamsComp() {
  const params = useParams();
  return (
    <>
      <h3>Params page</h3> <br />
      <h3>{params.id}</h3>
    </>
  );
}
