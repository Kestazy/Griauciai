import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch } from 'react-redux';
import { setCategory } from '../features/categoriesSlice';


const CategoryForm = () => {

    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();

        dispatch(setCategory({name}));
        setName('');
    }

    return (
        <div>
            <Container>
                <Form onSubmit={onSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control 
                        type="text" 
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter category" />
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    type="submit">
                        Add
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default CategoryForm
