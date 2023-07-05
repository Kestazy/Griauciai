import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className="mt-5">
            <Container>
                <section>
                    <h1>
                        <FaSignInAlt />  Login
                    </h1>
                    <p>Login and start adding your ads</p>
                </section>
                <section className="form">
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Enter password"
                                onChange={onChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >Submit</Button>
                    </Form>
                </section>
            </Container>
        </div>
    )
}

export default Login
