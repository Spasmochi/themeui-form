/** @jsx jsx */
import { jsx, Heading, Text } from "theme-ui";

function Header(props) {
  return (
    <div>
      <Heading as="h3">{props.title}</Heading>
      <Text
        sx={{
          fontSize: 0,
          fontFamily: "body",
          marginTop: ".25rem",
          color: "muted",
        }}
      >
        {props.sub}
      </Text>
    </div>
  );
}

export default Header;
