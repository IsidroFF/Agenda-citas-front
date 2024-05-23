import React, { useState, useEffect } from 'react';
import { getClient } from "./lib/client.jsx";
import { gql } from "@apollo/client";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getClient().query({
          query: gql`
            query AllUsers {
              allUsers {
                id
                name
                age
                email
              }
            }
          `
        });
        setUsers(data.allUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {users.map(user => (
        <div className='border-y px-9 py-1'>
          <p>id: {user.id}</p>
          <p>Nombre: {user.name}</p>
          <p>Correo: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
