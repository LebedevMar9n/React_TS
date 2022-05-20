import React, { FC, useEffect, useState } from 'react'

import { IUser } from '../../interfaces'
import { userService } from '../../services';
import { User } from '../User/User';

export const  Users:FC=()=> {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
  userService.getAll().then(value=>value.data).then(users=>{
    return setUsers(users);
  })
  }, [])
  
  return (
    <div>
{users.map(user=><User key={user.id} user={user}/>)}
    </div>
  )
}
