import React from "react";

function Alert(props) {
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>Holy guacamole!</strong>
    </div>
  );
}

export default Alert;
