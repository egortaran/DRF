import React from 'react'


const UserDRFItem = ({userDRF}) => {
    return (
        <tr>
            <td>{userDRF.username}</td>
            <td>{userDRF.first_name}</td>
            <td>{userDRF.last_name}</td>
            <td>{userDRF.email}</td>
        </tr>
    )
}

const UserDRFList = ({usersDRF}) => {
    return (
        <table>
            <tbody>
            <th>username</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>email</th>

            {usersDRF.map((userDRF) => <UserDRFItem userDRF={userDRF}/>)}
            </tbody>
        </table>
    )
}


export default UserDRFList
