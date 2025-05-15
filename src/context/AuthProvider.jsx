import axios from '../service/api';
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if(token && storedUser?.id) {
            fetchUser(storedUser.id, token);
        } else {
            setLoading(false);
        }
    }, [])

    const login = async (username, password) => {
        try {
            const res = await axios.post('https://dummyjson.com/auth/login', {
                username,
                password
            });
            const token = res.data.accessToken;
            const userId =res.data.id;

            localStorage.setItem('token', token)
            await fetchUser(userId, token);
            navigate("/tasks");
        } catch (err) {
            throw new Error('Usuário ou senha inválidos')
        }
    }

    const fetchUser = async (id, token) => {
        try {
            const userRes = await axios.get(`https://dummyjson.com/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            const fullUser = userRes.data;

            localStorage.setItem("user", JSON.stringify(fullUser));
            setUser(fullUser);
        } catch (err) {
            console.log("Erro ao resgatar usuário")
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        localStorage.clear();
        setUser(null);
        navigate("/");
    }

  return (
    <AuthContext.Provider value={{user, login, loading, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider