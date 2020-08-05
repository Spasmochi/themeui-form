/** @jsx jsx */
import { jsx } from "theme-ui";
const Layout = ({ children }) => {
  return (
    <div
      sx={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        sx={{
          maxWidth: "48rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <form>{children}</form>
      </div>
    </div>
  );
};

export default Layout;
