import React from "react";


const Users = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'ryu@gmail.com', name: '유재석'},
        {email: 'kim@gmail.com', name: '김종국'},
        {email: 'ha1@gmail.com', name: '하하'},
        {email: 'song@gmail.com', name: '송지효'},
    ];

    return (
        <table>
            <thead>
                <tr>
                    <td>이름</td>
                    <td>이메일</td>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <Users userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;