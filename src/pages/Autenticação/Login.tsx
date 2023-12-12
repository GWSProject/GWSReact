//Imports
import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert, Spinner } from 'reactstrap';
import { createSelector } from 'reselect';

//Pages
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";

//Validação Formik 
import * as Yup from "yup";
import { useFormik } from "formik";

// Ações
import { loginUser, resetLoginFlag } from "../../slices/thunks";

//import images
import logoLogin from "../../assets/images/login-logo.svg";

const Login = (props: any) => {
    //UseStates
    const [passwordShow, setPasswordShow] = useState(false);
    const [loader, setLoader] = useState(false);
    const [userLogin, setUserLogin] = useState<any>([]);

    const dispatch = useDispatch<any>();

    const error = useSelector((state: any) => state.Login.error);

    //Formik Validation 
    const validation: any = useFormik({
        initialValues: {
            email: "paulo@email.com" || '',
            password: "123456pL" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Por favor, insira seu e-mail"),
            password: Yup.string().required("Por favor, insira sua senha"),
        }),
        onSubmit: (userCredentials) => {

            setLoader(true);

            dispatch(loginUser(userCredentials, props.router.navigate))
                .finally(() => {
                    setTimeout(() => {
                        setLoader(false);
                    }, 4000);
                });
        }
    });

    document.title = "Login | GWS";
    return (
        <React.Fragment>
            <ParticlesAuth>
                <div className="auth-page-content">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-4 mb-4 text-white-50">
                                    <div>
                                        <Link to="/" className="d-inline-block auth-logo">
                                            <img src={logoLogin} alt="" height="100" />
                                        </Link>
                                    </div>
                                    <p className="mt-3 fs-15 fw-medium">GWS - Gestão de Workload para Squads</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Bem Vindo de Volta !</h5>
                                            <p className="text-muted">Faça seu login para continuar</p>
                                        </div>
                                        {error && error ? (<Alert color="danger"> {error} </Alert>) : null}
                                        <div className="p-2 mt-4">
                                            <Form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                                action="#">

                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">E-mail</Label>
                                                    <Input
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Insira o e-mail"
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={
                                                            validation.touched.email && validation.errors.email ? true : false
                                                        }
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null}
                                                </div>

                                                <div className="mb-3">
                                                    <Label className="form-label" htmlFor="password-input">Senha</Label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                        <Input
                                                            name="password"
                                                            value={validation.values.password || ""}
                                                            type={passwordShow ? "text" : "password"}
                                                            className="form-control pe-5"
                                                            placeholder="Insira a senha"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            invalid={
                                                                validation.touched.password && validation.errors.password ? true : false
                                                            }
                                                        />
                                                        {validation.touched.password && validation.errors.password ? (
                                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                        ) : null}
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" onClick={() => setPasswordShow(!passwordShow)} type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="mt-4">
                                                    <Button color="success"
                                                        disabled={loader && true}
                                                        className="btn btn-success w-100" type="submit">
                                                        {loader && <Spinner size="sm" className='me-2'>Carregando...</Spinner>}
                                                        Login
                                                    </Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default withRouter(Login);