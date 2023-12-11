import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";

//import images
import avatar1 from '../../../../assets/images/users/profile-1.png';

const Settings = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [text, setText] = useState("Sou estudante de Desenvolvimento de Sistemas Fullstack, imerso em um mundo onde a tecnologia e a criatividade se encontram para criar soluções inovadoras. Em minha jornada acadêmica, venho aprendendo a dominar as complexidades do front-end e do back-end, buscando sempre a excelência em cada projeto que desenvolvo. ");

    const tabChange = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    document.title = "Configurações | GWS";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg profile-setting-img">
                            <div className="overlay-content">
                                <div className="text-end p-3">
                                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col xxl={3}>
                            <Card className="mt-n5">
                                <CardBody className="p-4">
                                    <div className="text-center">
                                        <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                            <img src={avatar1}
                                                className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                alt="user-profile" />
                                            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <Input id="profile-img-file-input" type="file"
                                                    className="profile-img-file-input" />
                                                <Label htmlFor="profile-img-file-input"
                                                    className="profile-photo-edit avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                        <i className="ri-camera-fill"></i>
                                                    </span>
                                                </Label>
                                            </div>
                                        </div>
                                        <h5 className="fs-16 mb-1">Paulo Oliveira</h5>
                                        <p className="text-muted mb-0">Full Stack Developer</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xxl={9}>
                            <Card className="mt-xxl-n5">
                                <CardHeader>
                                    <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}>
                                                <i className="fas fa-home"></i>
                                                Detalhes Pessoais
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                <i className="far fa-user"></i>
                                                Alterar Senha
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>

                                <CardBody className="p-4">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <Form>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">Nome</Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Digite seu nome" defaultValue="Paulo Oliveira" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="phonenumberInput" className="form-label">Telefone</Label>
                                                            <Input type="text" className="form-control"
                                                                id="phonenumberInput"
                                                                placeholder="Digite seu telefone"
                                                                defaultValue="+55 (11) 94388-9934" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="emailInput" className="form-label">E-mail</Label>
                                                            <Input type="email" className="form-control" id="emailInput"
                                                                placeholder="Digite o email"
                                                                defaultValue="paulo@email.com" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="designationInput"
                                                                className="form-label">Designação</Label>
                                                            <Input type="text" className="form-control"
                                                                id="designationInput" placeholder="Digite sua designação"
                                                                defaultValue="Full Stack Developer" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="websiteInput1"
                                                                className="form-label">Website</Label>
                                                            <Input type="text" className="form-control" id="websiteInput1"
                                                                placeholder="www.exemplo.com" defaultValue="www.meusite.com" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="cityInput" className="form-label">Cidade</Label>
                                                            <Input type="text" className="form-control" id="cityInput"
                                                                placeholder="Digite a cidade" defaultValue="São Bernardo do Campo" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="countryInput" className="form-label">Estado</Label>
                                                            <Input type="text" className="form-control" id="countryInput"
                                                                placeholder="Country" defaultValue="São Paulo" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="gitcodeInput" className="form-label">GitHub</Label>
                                                            <Input type="text" className="form-control" id="gitcodeInput"
                                                                placeholder="Digite seu github" defaultValue="@MagiLogus" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="mb-3 pb-2">
                                                            <Label htmlFor="exampleFormControlTextarea"
                                                                className="form-label">Sobre mim</Label>
                                                            <textarea className="form-control"
                                                                id="exampleFormControlTextarea"
                                                                value={text}
                                                                onChange={(e: any) => setText(e.target.value)}
                                                                rows={3} />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="button"
                                                                className="btn btn-primary">Atualizar</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <Form>
                                                <Row className="g-2">
                                                    <Col lg={4}>
                                                        <div>
                                                            <Label htmlFor="oldpasswordInput" className="form-label">Senha Antiga*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="oldpasswordInput"
                                                                placeholder="Entre com sua senha atual" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={4}>
                                                        <div>
                                                            <Label htmlFor="newpasswordInput" className="form-label">Nova Senha*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="newpasswordInput" placeholder="Entre com sua nova senha" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={4} className='mb-3'>
                                                        <div>
                                                            <Label htmlFor="confirmpasswordInput" className="form-label">Confirme sua Senha*</Label>
                                                            <Input type="password" className="form-control"
                                                                id="confirmpasswordInput"
                                                                placeholder="Confirme sua nova senha" />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="text-end">
                                                            <button type="button" className="btn btn-primary">Alterar
                                                                Senha</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>
                                    </TabContent >
                                </CardBody >
                            </Card >
                        </Col >
                    </Row >
                </Container >
            </div >
        </React.Fragment >
    );
};

export default Settings;