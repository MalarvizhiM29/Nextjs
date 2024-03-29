import React from 'react'

interface User {
    id : number;
    name: string;
}

const usersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {next : {revalidate: 10}});
    const users: User[] = await res.json()

  return (
    <>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
    </>
  )
}

export default usersPage