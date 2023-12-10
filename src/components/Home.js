import React from "react";
import Header from "./Header";
import FormAddNew from "./FormAddNew";
import TableUser from "./TableUser";
function Home() {
  return (
    <>
      <Header></Header>
      <FormAddNew></FormAddNew>
      <TableUser />
    </>
  );
}

export default Home;
