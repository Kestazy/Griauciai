import { useState } from "react";
import { FaUser } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="mt-5">
            <Container>
                <section>
                    <h1>
                        <FaUser />  Register
                    </h1>
                    <p>Please create an account</p>
                </section>
                <section className="form">
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Enter your name"
                                onChange={onChange} />
                        </Form.Group>
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
                        <Form.Group className="mb-3">
                            <Form.Control type="password"
                                className="form-control"
                                id="password2"
                                name="password2"
                                value={password2}
                                placeholder="Confirm password"
                                onChange={onChange} />
                        </Form.Group>
                            <Button variant="primary" type="submit" >Submit</Button>
                    </Form>
                </section>
            </Container>
        </div>
    )
}

export default Register