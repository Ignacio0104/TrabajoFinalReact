import React  from 'react'
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../../services/FetchService'
import { useEffect, useState } from 'react'
export default function FetchExample() {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12)
    const [pages, setPages] = useState(2)
    const [userPerPage, setUserPerPage] = useState(6)

    useEffect(() => {
      obtainUsers();
    }, [])
    
    const obtainUsers = ()=>{
        getAllUsers().then((response)=>{
            console.log("All users", response.data);
            setUsers(response.data);
            setPages(response.total_pages);
            setTotalUsers(response.total);
            setUserPerPage(response.per_page);
        }).catch((err)=>{
            alert( `Somethin went wrong ${err}`);
        }).finally(()=>{
            console.log("Ended obtaining users")
            console.table(users);
        })
    }

    const obtainPagedUsers = (page)=>{
        getAllPagedUsers(page).then((response)=>{
            console.log("All paged users", response.data);
            setUsers(response.data);
            setPages(response.total_pages);
            setTotalUsers(response.total);
            setUserPerPage(response.per_page);
        }).catch((err)=>{
            alert( `Somethin went wrong ${err}`);
        }).finally(()=>{
            console.log("Ended obtaining users")
            console.table(users);
        })
    }

    const obtainUserDetails = (id)=>{
        getUserDetails(id).then((response)=>{
            console.log("All paged users", response.data);
            setSelectedUser(response.data);
        }).catch((err)=>{
            alert( `Somethin went wrong ${err}`);
        }).finally(()=>{
            console.log("Ended obtaining users")
            console.table(selectedUser);
        })
    }

    const authUser = ()=>{
        login("eve.holt@reqres.in","cityslicka")
        .then((response)=>{
            console.log("Token", response.token);
            sessionStorage.setItem("token",response.token)
        }).catch((err)=>{
            alert( `Somethin went wrong while login user ${err}`);
        }).finally(()=>{
            console.log("Ended loging users")
        })
    }

  return (
    <div>
    <button onClick={authUser}>Login</button>  {/*NO FUNCIONA*/}
      <h2>Users:</h2>
      {
        users.map((user,index) =>
            (<p key={index} onClick={()=>obtainUserDetails(user.id)}>{user.first_name} {user.last_name}</p>)
        )
      }
      <p>Showing {userPerPage} of {totalUsers}</p>
      <button onClick={()=>obtainPagedUsers(1)}>
        1
      </button>
      <button onClick={()=>obtainPagedUsers(2)}>
        2
      </button>

      <div>
        <h3> User details: </h3>
        {
            selectedUser != null ?
            (
                <div>
                    <p>Name: {selectedUser.first_name}</p>
                    <p>Last name: {selectedUser.last_name}</p>
                    <p>Email: {selectedUser.email}</p>
                    <img src={selectedUser.avatar} style={{height:"150px",width: "150px"}}/>
                </div>
            ):
            (
                <h6> Please click on a User to see its details </h6>
            )
        }
      </div>
    </div>
  )
}
