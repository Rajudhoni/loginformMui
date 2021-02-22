import React from 'react'
import {UserContext} from '../context/index'
import {useHistory} from 'react-router-dom'
const Profile = () => {
  const [userToken,setUserToken]=React.useContext(UserContext)
console.log(userToken,"token available.....")

 let history=useHistory()
 let token=localStorage.getItem('token')
 console.log(token, 'profile token...')
   if(!token){
    return <> {history.push('/')}</>
   }
   else{
    return (
        <div>
            <h1>Profile page</h1>
        </div>
    )
   }
    
}

export default Profile
