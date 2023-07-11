import React, { useEffect } from 'react'
import CategoryForm from '../components/CategoryForm'
import AllAds from '../components/AllAds'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Admin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {

        if (!user) {
            navigate('/login');
        }

        if (user.role !== 'admin') {
            navigate('/');
        }

    }, [user, navigate, dispatch]);
    

    return (
        <div>
            <CategoryForm />
            <AllAds />
        </div>
    )
}

export default Admin
