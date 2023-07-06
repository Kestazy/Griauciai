import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import categoryService from '../services/categoryServise';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/authSlice';

const Header = ({ filterAds }) => {
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

    //gautus duomenis is API, isideti i state
    const categoriesData = () => {
        categoryService.getAllCategoriesData()
            .then(res => {
                if (res !== undefined) {
                    setCategories(res);
                }
            })
    }

    useEffect(() => {
        categoriesData();
    }, [])

    console.log(categories)

    return (
        <div>
            {
                categories.length > 0 ? (
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Link className='ink-offset-2 link-underline link-underline-opacity-0' to="/" >
                                <Navbar.Brand to="/" >Skelbimai</Navbar.Brand>
                            </Link>
                            <Nav
                                title="Kategorijos"
                                id="basic-nav-dropdown"
                                className="d-flex text-secondary-emphasis">
                                <Nav.Link onClick={() => filterAds('All')}>
                                    All
                                </Nav.Link>
                                {
                                    categories.map((cat, index) => (
                                        <Nav.Link key={index} onClick={() => filterAds(cat._id)}>{cat.name}</Nav.Link>
                                    ))
                                }
                            </Nav>
                        </Container>
                        <ul className='d-flex m-0'>
                            {user ? (
                                <button className='btn btn-outline-light border-0' onClick={onLogout}>
                                    <FaSignOutAlt /> Logout
                                </button>
                            ) : (
                                <>
                                    <li className='m-2'>
                                        <Link className='ink-offset-2 link-underline link-underline-opacity-0 text-secondary-emphasis' to="/Login" >
                                            <FaSignInAlt />Login
                                        </Link>
                                    </li>
                                    <li className='m-2'>
                                        <Link className='ink-offset-2 link-underline link-underline-opacity-0 text-secondary-emphasis' to="/Register" >
                                            <FaUser />Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </Navbar>
                ) : <h2>kategoriju nera</h2>
            }
        </div >
    )
}

export default Header