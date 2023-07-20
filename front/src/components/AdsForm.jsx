import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { createAd } from '../features/adsSlice';
import { toast } from 'react-toastify';
import { getCategories, resete } from '../features/categoriesSlice';

const AllAds = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        img: '',
        category: ''
    });

    const { title, description, price, img, category } = FormData;

    const { categories, isError, message } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getCategories());
        return () => {
            dispatch(resete())
        }

    }, [isError, message, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    console.log(formData)

    const handleSubmit = e => {
        e.preventDefault();

        if (formData.title === '' || formData.description === '' || formData.price === '' || formData.img === '' || formData.category === '') {
            toast.error('Prasome uzpildyti visus laukus ir pasirinkti kategorija')
        } else {
            dispatch(createAd(formData));
            e.target.reset()
            setFormData({
                title: '',
                description: '',
                price: '',
                img: '',
                category: ''
            });
            toast.success('Skelbimas patalpintas sekmingai')
        }
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit} className='w-50 m-auto'  >
                    <h3 className='mt-4'>Prideti skelbima</h3>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Pavadinimas</Form.Label>
                        <Form.Control
                            type="text"
                            name='title'
                            value={title}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Aprasymas</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            type="text"
                            name='description'
                            value={description}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Kaina</Form.Label>
                        <Form.Control
                            type="number"
                            name='price'
                            step="0.01"
                            value={price}
                            onChange={onChange}
                            placeholder='00.00' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Nuotrauka</Form.Label>
                        <Form.Control
                            type="text"
                            name='img'
                            value={img}
                            onChange={onChange}
                            placeholder='Url: https://img' />
                    </Form.Group>
                    <Form.Label>Pasirinkite kategorija</Form.Label>
                    {
                        categories.length > 0 ? (
                            <Form.Select className="mb-3" aria-label="Default select example" name='category' value={category} onChange={onChange}>
                                <option value=''>Kategorijos</option>
                                {
                                    categories.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item._id}
                                        >{item.name}</option>
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