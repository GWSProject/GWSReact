//Imports
import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Form, FormFeedback, Button } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Images
import dummyImg from "assets/images/users/multi-user.jpg"

const CreateClient = () => {
    //Formik Validation 
    const validation: any = useFormik({

        enableReinitialize: true,

        initialValues: {
            img: '',
            company: '',
            client: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            img: Yup.string().required("Por favor, Insira a imagem da empresa."),
            company: Yup.string().required("Por favor, Insira o nome da empresa."),
            client: Yup.string().required("Por favor, Insira o nome do cliente."),
            email: Yup.string().required("Por favor, Insira o email."),
            phone: Yup.string().required("Por favor, Insira o número de telefone."),
        }),
        onSubmit: (values) => {
            console.log("values", values)
        }
    });

    //Image Validation
    const [imgStore, setImgStore] = useState<any>();
    const [selectedImage, setSelectedImage] = useState<any>();

    const handleClick = (item: any) => {
        const newData = [...imgStore, item];
        setImgStore(newData);
        validation.setFieldValue('img', newData)
    }

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
            validation.setFieldValue('img', e.target.result);
            setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    document.title = "Cadastrar Cliente | GWS";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Cadastrar Cliente" pageTitle="Segmentos" />
                    <Row>
                        <Col lg={12}>
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }} action="#">
                                <Card>
                                    <CardBody>
                                        <Row className="g-3">
                                            <Col lg={12}>
                                                <div className="text-center">
                                                    <div className="position-relative d-inline-block">
                                                        <div className="position-absolute  bottom-0 end-0">
                                                            <Label htmlFor="customer-image-input" className="mb-0">
                                                                <div className="avatar-xs cursor-pointer">
                                                                    <div className="avatar-title bg-light border rounded-circle text-muted">
                                                                        <i className="ri-image-fill"></i>
                                                                    </div>
                                                                </div>
                                                            </Label>
                                                            <Input className="form-control d-none" id="customer-image-input" type="file"
                                                                accept="image/png, image/gif, image/jpeg" onChange={handleImageChange}
                                                                invalid={
                                                                    validation.touched.img && validation.errors.img ? true : false
                                                                }
                                                            />
                                                        </div>
                                                        <div className="avatar-lg p-1" onClick={(item: any) => handleClick(item)}>
                                                            <div className="avatar-title bg-light rounded-circle">
                                                                <img src={selectedImage || validation.values.img || dummyImg} alt="dummyImg" id="customer-img" className="avatar-md rounded-circle object-fit-cover" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {validation.errors.img && validation.touched.img ? (
                                                        <FormFeedback type="invalid" className='d-block'> {validation.errors.img} </FormFeedback>
                                                    ) : null}
                                                </div>

                                                <div>
                                                    <Label
                                                        htmlFor="company-field"
                                                        className="form-label"
                                                    >
                                                        Nome da Empresa
                                                    </Label>
                                                    <Input
                                                        name="company"
                                                        id="company-field"
                                                        className="form-control"
                                                        placeholder="Digite o Nome da Empresa"
                                                        type="text"
                                                        validate={{
                                                            required: { value: true },
                                                        }}
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.company || ""}
                                                        invalid={
                                                            validation.touched.company && validation.errors.company ? true : false
                                                        }
                                                    />
                                                    {validation.touched.company && validation.errors.company ? (
                                                        <FormFeedback type="invalid">{validation.errors.company}</FormFeedback>
                                                    ) : null}

                                                </div>
                                            </Col>

                                            <Col lg={12}>
                                                <div>
                                                    <Label
                                                        htmlFor="client-field"
                                                        className="form-label"
                                                    >
                                                        Nome do Cliente
                                                    </Label>
                                                    <Input
                                                        name="client"
                                                        id="client_name-field"
                                                        className="form-control"
                                                        placeholder="Digite o Nome do Cliente"
                                                        type="text"
                                                        validate={{
                                                            required: { value: true },
                                                        }}
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.client || ""}
                                                        invalid={
                                                            validation.touched.client && validation.errors.client ? true : false
                                                        }
                                                    />
                                                    {validation.touched.client && validation.errors.client ? (
                                                        <FormFeedback type="invalid">{validation.errors.client}</FormFeedback>
                                                    ) : null}

                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div>
                                                    <Label
                                                        htmlFor="emailid-field"
                                                        className="form-label"
                                                    >
                                                        Email
                                                    </Label>

                                                    <Input
                                                        name="email"
                                                        id="emailid-field"
                                                        className="form-control"
                                                        placeholder="Digite o Email"
                                                        type="text"
                                                        validate={{
                                                            required: { value: true },
                                                        }}
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
                                            </Col>

                                            <Col lg={6}>
                                                <div>
                                                    <Label
                                                        htmlFor="phone-field"
                                                        className="form-label"
                                                    >
                                                        Telefone
                                                    </Label>

                                                    <Input
                                                        name="phone"
                                                        id="phone-field"
                                                        className="form-control"
                                                        placeholder="Digite o Telefone "
                                                        type="text"
                                                        validate={{
                                                            required: { value: true },
                                                        }}
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.phone || ""}
                                                        invalid={
                                                            validation.touched.phone && validation.errors.phone ? true : false
                                                        }
                                                    />
                                                    {validation.touched.phone && validation.errors.phone ? (
                                                        <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>

                                <div className="text-end mb-4">
                                    <Button color="success"
                                        //disabled={loader && true}
                                        className="btn btn-success w-sm" type="submit">
                                        {/* {loader && <Spinner size="sm" className='me-2'>Carregando...</Spinner>} */}
                                        Cadastrar
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CreateClient;