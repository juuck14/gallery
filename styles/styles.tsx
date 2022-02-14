import { CSSProperties } from "react";

export const headerStyle: CSSProperties = {
  marginTop: "10vh",
  textAlign: "center",
};

export const containerStyle: CSSProperties = {
  padding: "4rem",
};

export const spinnerStyle: CSSProperties = {
  textAlign: "center",
  fontSize: "1.5rem",
  marginTop: "3rem",
};

export const checkboxContainerStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

export const checkboxStyle: CSSProperties = {
  display: "inline-block",
  padding: "0 1.5em 1em 1.5em"
};

export const buttonStyle: CSSProperties = {
  position: "absolute",
  right: "0",
  bottom: "0",
};

export const imageFooterStyle: CSSProperties = {
  width: "100%",
  position: "absolute",
  height: "2.5rem",
  bottom: "0",
  background: "white",
  borderRadius: "0 0 5px 5px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  fontSize: "1.2rem",
};

export const saveButtonStyle: CSSProperties = {
  all: "unset",
  padding: "0 5%",
  color: "#dc3545",
};

export const commentStyle: CSSProperties = {
  padding: "10px 0 20px 0",
  borderBottom: "1px solid #cbcbcb",
};

export const commentsStyle: CSSProperties = {
  maxHeight: "100px",
  overflowY: "scroll",
  marginTop: "20px",
};

export const commentNameStyle: CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: "700",
};

export const commentDatetimeStyle: CSSProperties = {
  fontSize: "0.7rem",
  paddingTop: "0.7rem",
};
