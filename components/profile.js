/** @jsx jsx */
import { jsx } from "theme-ui";
import Card from "./Section/card";

function profile() {
  return (
    <Card
      title="Profile"
      sub="This information will be displayed publicly so be careful what you share."
      label="Username"
    >
      <div
        sx={{
          marginTop: "0.25rem",
          gridColumn: "span 2/span 2",
        }}
      >
        <div
          sx={{
            display: "flex",
            maxWidth: "32rem",
            borderRadius: ".375rem",
            boxShadow: "0 1px 2px 0 rgba(0,0,0,.05)",
          }}
        >
          <span
            sx={{
              display: "inline-flex",
              paddingLeft: ".75rem",
              paddingRight: ".75rem",
              fontSize: 0,
              alignItems: "center",
              color: "muted",
              border: "1px solid #e2e8f0",
              borderRightWidth: "0px",
              bg: "background",
              borderTopLeftRadius: ".375rem",
              borderTopRightRadius: ".375rem",
            }}
          >
            servicenow.com/
          </span>

          <input
            sx={{
              appearance: "none",
              backgroundColor: "background",
              borderColor: "#d2d6dc",
              borderWidth: "1px",
              borderRadius: ".375rem",
              padding: " .5rem .75rem",
              fontSize: 1,
              display: "block",
              flex: "1 1 0%",
              width: "100%",
              fontSize: 0,
            }}
            id="username"
            class="min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out "
          />
        </div>
      </div>
    </Card>
  );
}

export default profile;
