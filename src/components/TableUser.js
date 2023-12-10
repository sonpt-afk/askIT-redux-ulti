import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../action/actions";
function TableUser(props) {
  // const [listUsers, setListUsers] = useState([]);
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);
  // const fetchAllUser = async () => {
  //   const res = await axios.get("http://localhost:8080/users/all");
  //   const data = res && res.data ? res.data : [];
  //   console.log("check data axios", data);
  //   setListUsers(data);
  // };
  useEffect(() => {
    // fetchAllUser();
    dispatch(fetchAllUsers());
  }, []);

  const handleDeleteUser = (user) => {
    console.log("check user", user);
  };
  if (isError === false && isLoading === true) {
    return (
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <div>Loading data...</div>
          </tbody>
        </Table>
      </Container>
    );
  }

  if (isError === false && isLoading === false) {
    return (
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <tr key={`users-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    );
  }

  if (isError === true && isLoading === false) {
    return (
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <div>Something wrong , pls try again ...</div>
          </tbody>
        </Table>
      </Container>
    );
  }
  // return (
  //   <>
  //     <Container>
  //       <hr />
  //       <Table striped bordered hover>
  //         <thead>
  //           <tr>
  //             <th>#</th>
  //             <th>Email</th>
  //             <th>Username</th>
  //             <th>Actions</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {isError === true ? (
  //             <>
  //               <div>Something wrong , pls try again ...</div>
  //             </>
  //           ) : (
  //             <>
  //               {isLoading === true ? (
  //                 <>
  //                   {listUsers &&
  //                     listUsers.length > 0 &&
  //                     listUsers.map((item, index) => {
  //                       return (
  //                         <tr key={`users-${index}`}>
  //                           <td>{index + 1}</td>
  //                           <td>{item.email}</td>
  //                           <td>{item.username}</td>
  //                           <td>
  //                             <button
  //                               className="btn btn-danger"
  //                               onClick={() => handleDeleteUser(item)}
  //                             >
  //                               Delete
  //                             </button>
  //                           </td>
  //                         </tr>
  //                       );
  //                     })}
  //                 </>
  //               ) : (
  //                 <>
  //                   {listUsers &&
  //                     listUsers.length > 0 &&
  //                     listUsers.map((item, index) => {
  //                       return (
  //                         <tr key={`users-${index}`}>
  //                           <td>{index + 1}</td>
  //                           <td>{item.email}</td>
  //                           <td>{item.username}</td>
  //                           <td>
  //                             <button
  //                               className="btn btn-danger"
  //                               onClick={() => handleDeleteUser(item)}
  //                             >
  //                               Delete
  //                             </button>
  //                           </td>
  //                         </tr>
  //                       );
  //                     })}
  //                 </>
  //               )}
  //             </>
  //           )}
  //         </tbody>
  //       </Table>
  //     </Container>
  //   </>
  // );

  return <></>;
}

export default TableUser;
