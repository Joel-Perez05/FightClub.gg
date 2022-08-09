import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {Form, FormGroup, Input, Label, Button} from "reactstrap";

const Login = (props) => {

    const {setIsLoggedin} = props;
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/login", user, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                setIsLoggedin(true);
                navigate("/");
            })
            .catch((err) => console.log(err)); 
    }

    return (
        <div className=' row g-5 mx-auto mt-5 d-flex flex-column justify-content-center'>
            <Form className='col-4 p-4 mx-auto' onSubmit={handleSubmit}>
                <h2 className='mb-4'>Log into your account!</h2>
                <FormGroup floating>
                    <Input id="email" name="email" placeholder='Email' value={user.email} type="email" onChange={handleChange} required />
                    <Label for="email">Email</Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input id="password" name="password" placeholder="Password" value={user.password} type="password" onChange={handleChange} required />
                    <Label for="password">Password</Label>
                </FormGroup>
                {' '}
                <FormGroup className='d-flex justify-content-between align-items-end'>
                    <Button color='dark'>Login</Button>
                    <Link className='fs-5 text-dark' to={"/register"}>Don't have an account?</Link>
                </FormGroup>
            </Form>
        </div>
    );
};

export default Login;