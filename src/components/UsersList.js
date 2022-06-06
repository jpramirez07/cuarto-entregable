import React from 'react';

const UsersList = ({users, selectUser, removeuser, open}) => {
    return (
        <ul>
            {
                users.map(user => (
                    <li className='Containers' key={user.id}>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p><b>Email: </b></p> 
                        <p>{user.email}</p>
                        <p><b>Birthday: </b></p>
                        <p>{user.birthday}</p>
                            <div className='buttoms-containers'>
                                <button className='buttoms' onClick={() => {
                                    selectUser(user)
                                    open()
                                    }
                                    }>
                                    <div className='div-buttom-edit'><i class="fa-solid fa-pen edit-buttom"></i></div>
                                </button>
                                <button className='buttoms' onClick={() => removeuser(user.id)}>
                                    <div className='div-buttom-delete'><i class="fa-solid fa-trash-can delete-buttom"></i></div>
                                </button>
                            </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;