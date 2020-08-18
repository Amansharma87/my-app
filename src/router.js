import React from "react";
import File from "./components/file.component/file";
import Student from "./components/student.component/student";
const routes = {
  "/": () => <File />,
  "/student": () => <Student />,
};

export default routes;