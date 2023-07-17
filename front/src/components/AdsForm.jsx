import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
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

    const { categories } = useSelector((state) => state.categories);

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
                    {
                        categories.length > 0 ? (
                            <Form.Select className="mb-3" aria-label="Default select example">
                                {
                                    categories.map((item, index) => (
                                <option  key={index}>{item.name}</option>
                                    ))
                                }
                            </Form.Select>
                        ) :
                            <Form.Select className="mb-3" aria-label="Default select example">
                                <option>Nera kategoriju</option>
                            </Form.Select>
                    }
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