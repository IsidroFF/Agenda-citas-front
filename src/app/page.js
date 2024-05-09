import { getClient } from "@/lib/client"
import { gql } from "@apollo/client"
import { ListItemText } from "@mui/material"

async function loadData() {
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
 })

 return data.allUsers
} 

async function HomePage() {
  const users = await loadData();
  console.log(users)
  const userList = users.map(user => (
    <ListItemText primary={user.name} secondary={user.email}/>
  ))

  return userList 
}

export default HomePage