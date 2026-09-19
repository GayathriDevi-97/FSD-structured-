import React, { Component } from "react";
import Course from "./Course";

class Student extends Component {
  render() {
    const name = "Sahithi";

    return (
      <section>
        <h2>Student Component (Class)</h2>
        <p>Name: {name}</p>

        <Course />
      </section>
    );
  }
}

export default Student;