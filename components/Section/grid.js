/** @jsx jsx */
import { jsx } from "theme-ui";
import Label from "./label";

function grid(props) {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        alignItems: "flex-start",
        paddingTop: "1.25rem",
        gridGap: "1rem",
        gap: "1rem",
      }}
    >
      <Label label={props.label} />
      {props.children}
    </div>
  );
}

export default grid;
