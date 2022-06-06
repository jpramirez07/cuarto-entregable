import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getusers, userSelected, deselectUser, close}) => {

    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [birthday, setbirthday] = useState("")

    useEffect(() => {
        if(userSelected !== null){
            setfirst_name(userSelected.first_name)
            setlast_name(userSelected.last_name)
            setemail(userSelected.email)
            setpassword(userSelected.password)
            setbirthday(userSelected.birthday)
        }else{
            setfirst_name("")
            setlast_name("")
            setemail("")
            setpassword("")
            setbirthday("")
        }
    }, [userSelected])

    const submit = e => {
        e.preventDefault()
        const user = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }
        if (userSelected !== null){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getusers()
                    deselectUser()
                })
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => getusers())
                .catch(error => console.log(error.response))
        }
    }

    const cancel = () => {
        setfirst_name("")
        setlast_name("")
        setemail("")
        setpassword("")
        setbirthday("")
        deselectUser()
    }
    
    
    return (
        <>
            <div className='Modal'>
                <h1>Usuario</h1> <button className='close-buttom' onClick={close}>x</button>
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="first_name" className="form-label">First name</label> <br />
                        <input 
                        type="text" 
                        className="form-control" 
                        id="first_name" 
                        onChange={e => setfirst_name(e.target.value)}
                        value={first_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="form-label">Last name</label> <br />
                        <input 
                        type="text" 
                        className="form-control" 
                        id="last_name" 
                        onChange={e => setlast_name(e.target.value)}
                        value={last_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email</label> <br />
                        <input 
                        type="text" 
                        className="form-control" 
                        id="email" 
                        onChange={e => setemail(e.target.value)}
                        value={email}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password</label> <br />
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        onChange={e => setpassword(e.target.value)}
                        value={password}
                        />
                    </div>
                    <div>
                        <label htmlFor="birthday" className="form-label">Birthday</label> <br />
                        <input 
                        type="date" 
                        className="form-control" 
                        id="birthday" 
                        onChange={e => setbirthday(e.target.value)}
                        value={birthday}
                        />
                    </div>
                    <div className='form-buttoms'>
                        <button className='submit-buttom' type="submit">Submit</button>
                        <button className='cancel-buttom' type='button' onClick={() => cancel()}>Cancel</button>
                    </div>
                </form>
            </div>
            <div className='overlay' onClick={close}></div>
        </>
    );
};

export default UsersForm;