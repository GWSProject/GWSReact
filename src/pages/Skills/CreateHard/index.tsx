import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Form, FormFeedback, Button, Spinner } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import * as Yup from "yup";
import { useFormik } from "formik";
import api, { hardResource } from 'Services/Services';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateHard = () => {
    //UseStates
    const [loader, setLoader] = useState<boolean>(false);

    //Validation 
    const validation: any = useFormik({

        enableReinitialize: true,

        initialValues: {
            hardSkill: '',
        },
        validationSchema: Yup.object({
            hardSkill: Yup.string().required("Por favor, Insira o nome da hard skill"),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoader(true);

            try {
                const response = await api.post(hardResource, {
                    nome: values.hardSkill
                });
                toast.success("Hard Skill cadastrada com sucesso!");
            } catch (error) {
                console.log(error);
                
                toast.error("Erro ao cadastrar hard skill.");
            }

            setLoader(false);
            resetForm();
        }
    });

    document.title = "Cadastrar Hard Skill | GWS";
    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Cadastrar Hard Skill" pageTitle="Skills" />
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
                                            <Label className="form-label" htmlFor="project-title-input">Nome da Hard Skill</Label>
                                            <Input type="text" className="form-control" id="project-title-input"
                                                placeholder="Digite o nome da hard skill"
                                                name="hardSkill"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={"" || validation.values.hardSkill}
                                                invalid={
                                                    validation.touched.hardSkill && validation.errors.hardSkill ? true : false
                                                }
                                            />
                                            {validation.touched.hardSkill && validation.errors.hardSkill ? (
                                                <FormFeedback type="invalid">{validation.errors.hardSkill}</FormFeedback>
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

export default CreateHard;