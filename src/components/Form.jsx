import React from "react";

export const Form = ({ children, ...props }) => {
  const styles = {
    root: {
      width: "100%"
    }}

  return (
    <form style={styles.root} noValidate {...props}>
      {children}
    </form>
  );
};
