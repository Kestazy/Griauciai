import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import categoryService from '../services/categoryServise'

const Categories = ({ filterAds }) => {
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
                            <Navbar.Brand href="#home" >Skelbimai</Navbar.Brand>
                            <Nav className="d-flex justify-content-center">
                                <Nav.Link href="#home" onClick={() => filterAds('All')}>All</Nav.Link>
                            </Nav>
                            {
                                categories.map((cat, index) => (
                                    <Nav
                                        key={index}
                                        className="d-flex justify-content-center">
                                        <Nav.Link href="#home" onClick={() => filterAds(cat._id)}>{cat.name}</Nav.Link>
                                    </Nav>
                                ))
                            }
                        </Container>
                    </Navbar>
                ) : <h2>kategoriju nera</h2>
            }
        </div >
    )
}

export default Categories