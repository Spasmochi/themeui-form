/** @jsx jsx */
import { jsx } from "theme-ui";
import Grid from "./grid";
import Header from "./header";

function card(props) {
  return (
    <div
      sx={{
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <Header title={props.title} sub={props.sub} />
      <Grid label={props.label}>{props.children}</Grid>
    </div>
  );
}

export default card;
