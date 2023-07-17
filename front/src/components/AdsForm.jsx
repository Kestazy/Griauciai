import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch } from 'react-redux';
import { createAd } from '../features/adsSlice';

const AllAds = () => {

    const [text, setText] = useState({
        title: '',
        description: '',
        price: '',
        img: '',
        category: ''
    });

    const { title, description, price, img, category } = FormData;

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();

        dispatch(createAd({ text }));
        setText('');
    }

    return (
        <div>
            <Container>
                <Form className='w-50 m-auto'  >
                    <h3 className='mt-4'>Prideti skelbima</h3>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Pavadinimas</Form.Label>
                        <Form.Control
                            type="text"
                            name='name'
                            placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Aprasymas</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Kaina</Form.Label>
                        <Form.Control
                            type="number"
                            name='price'
                            placeholder='00.00' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Nuotrauka</Form.Label>
                        <Form.Control
                            type="text"
                            name='img'
                            placeholder='Url: https://img' />
                    </Form.Group>
                    <Form.Label>Pasirinkite kategorija</Form.Label>
                    <Form.Select className="mb-3" aria-label="Default select example">
                        <option>Kategorijos</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Button
                        variant="primary"
                        type="submit">
                        Prideti
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default AllAds