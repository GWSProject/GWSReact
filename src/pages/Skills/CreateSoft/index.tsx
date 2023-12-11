import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Form, FormFeedback, Button, Spinner } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import api, { softResource } from "../../../Services/Services"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useFormik } from "formik";

const CreateSoft = () => {
    //UseStates
    const [loader, setLoader] = useState<boolean>(false);

    //Formik Validation 
    const validation: any = useFormik({

        enableReinitialize: true,

        initialValues: {
            softSkill: '',
        },
        validationSchema: Yup.object({
            softSkill: Yup.string().required("Por favor, Insira o nome da soft skill"),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoader(true);

            try {
                const response = await api.post(softResource, {
                    nome: values.softSkill
                });
                toast.success("Soft Skill cadastrada com sucesso!");
            } catch (error) {
                toast.error("Erro ao cadastrar a soft skill.");
            }

            setLoader(false);
            resetForm();
        }
    });

    document.title = "Cadastrar Soft Skill | GWS";
    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Cadastrar Soft Skill" pageTitle="Skills" />
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
                                            <Label className="form-label" htmlFor="project-title-input">Nome da Soft Skill</Label>
                                            <Input type="text" className="form-control" id="project-title-input"
                                                placeholder="Digite o nome da soft skill"
                                                name="softSkill"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={"" || validation.values.softSkill}
                                                invalid={
                                                    validation.touched.softSkill && validation.errors.softSkill ? true : false
                                                }
                                            />
                                            {validation.touched.softSkill && validation.errors.softSkill ? (
                                                <FormFeedback type="invalid">{validation.errors.softSkill}</FormFeedback>
                                            ) : null}
                                        </div>
                                    </CardBody>
                                </Card>

                                <div className="text-end mb-4">
                                    <Button color="success"
                                        disabled={loader && true}
                                        className="btn btn-success w-sm" type="submit">
                                        {loader && <Spinner size="sm" className='me-2'>Carregando...</Spinner>}
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

export default CreateSoft;