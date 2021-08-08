import React, {useState, useEffect} from 'react';
import axios from 'axios'
import TasksPage from './TasksPage';
import LoginPage from './LoginPage';

export default function AppLogin() {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() =>{
        const checkLogin = async () =>{
            const token = localStorage.getItem('tokenStore')
            if(token){
                const verified = await axios.get('http://localhost:4000/api/users/verify',{
                headers:{ Authorization: token}
                })
                console.log(verified)
                setIsLogin(verified.data)
                if(verified.data === false) return localStorage.clear()
            }
            else{
                setIsLogin(false)
            }
        }
        checkLogin()
    }, [])

    return (
        <div>
            {
                isLogin 
                ? <TasksPage setIsLogin={setIsLogin} /> 
                : <LoginPage setIsLogin={setIsLogin} />
            }
        </div>
    )
}
