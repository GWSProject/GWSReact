import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Form, FormFeedback, Button } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { useSelector, useDispatch } from "react-redux";

//Validação Formik 
import * as Yup from "yup";
import { useFormik } from "formik";


const CreateSegment = () => {

    const validation: any = useFormik({

        enableReinitialize: true,

        initialValues: {
            segmentTitle: '',
        },
        validationSchema: Yup.object({
            segmentTitle: Yup.string().required("Por favor, Insira o título do segmento"),
        }),
        onSubmit: (values) => {
            console.log("values", values)
        }
    });

    document.title = "Cadastrar Segmento | GWS";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Cadastrar Segmento" pageTitle="Segmentos" />
                    <Row>
                        <Col lg={12}>
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }} action="#">
                                <Card>
                                    <CardBody>
                                        <div className="mb-3">
                                            <Label className="form-label" htmlFor="project-title-input">Título do Segmento</Label>
                                            <Input type="text" className="form-control" id="project-title-input"
                                                placeholder="Insira o título do segmento"
                                                name="segmentTitle"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.segmentTitle || ""}
                                                invalid={
                                                    validation.touched.segmentTitle && validation.errors.segmentTitle ? true : false
                                                }
                                            />
                                            {validation.touched.segmentTitle && validation.errors.segmentTitle ? (
                                                <FormFeedback type="invalid">{validation.errors.segmentTitle}</FormFeedback>
                                            ) : null}
                                        </div>
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

export default CreateSegment;