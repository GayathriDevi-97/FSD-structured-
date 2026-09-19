import React from "react";

function Header() {
  const title = "Welcome to React Components";
  const description = "This is a Function Component.";

  return (
    <header>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

export default Header;