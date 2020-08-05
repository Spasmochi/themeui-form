import { Text } from "theme-ui";

function label(props) {
  return (
    <Text
      sx={{
        paddingTop: ".5rem",
        marginTop: "1px",
        color: "text",
        fontSize: 0,
      }}
    >
      {props.label}
    </Text>
  );
}

export default label;
