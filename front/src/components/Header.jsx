import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import categoryService from '../services/categoryServise';
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = ({ filterAds }) => {
    const [categories, setCategories] = useState([]);

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
                            <NavDropdown
                                title="Kategorijos"
                                id="basic-nav-dropdown"
                                className="d-flex justify-content-center text-secondary-emphasis">
                                <NavDropdown.Item onClick={() => filterAds('All')}>
                                    All
                                </NavDropdown.Item>
                                {
                                    categories.map((cat, index) => (
                                        <NavDropdown.Item key={index} onClick={() => filterAds(cat._id)}>{cat.name}</NavDropdown.Item>
                                    ))
                                }
                            </NavDropdown>
                            <ul className='d-flex m-0'>
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
                            </ul>
                        </Container>
                    </Navbar>
                ) : <h2>kategoriju nera</h2>
            }
        </div >
    )
}

export default Header