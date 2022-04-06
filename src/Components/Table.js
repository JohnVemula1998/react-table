import React, { useEffect, useState } from "react";
import './Table.css';


const Table = () => {
  let [data, setData] = useState([]);
  const fetchData = () => {
    const tableData = fetch("https://jsonplaceholder.typicode.com/users");
    console.log(tableData);

    tableData
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1 style={{textAlign:"center"}}>Table By Using Fetch</h1>
      <table>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>EMail</th>
              <th>User Name</th>
          </tr>
          {data && data.map(item =>{
              return(
                  <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                  </tr>
              )
          })}
      </table>
      
    </>
  );
};

export default Table;
