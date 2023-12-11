import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from 'reactstrap';
import classnames from 'classnames';

//Images
import avatar1 from '../../../../assets/images/users/profile-1.png';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = (tab: any) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    document.title = "Perfil | GWS";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src={avatar1} alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">Paulo Oliveira</h3>
                                    <p className="text-white text-opacity-75">Full Stack Developer</p>
                                    <div className="hstack text-white-50 gap-1">
                                        <div className="me-2"><i
                                            className="ri-map-pin-user-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>São Bernardo do Campo, São Paulo</div>
                                        <div><i
                                            className="ri-building-line me-1 text-white text-opacity-75 fs-16 align-middle"></i>Senai
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col lg={12}>
                            <div>
                                <div className="d-flex">
                                    <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                href="#overview-tab"
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggleTab('1'); }}
                                            >
                                                <i className="ri-airplay-fill d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Visão Geral</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>

                                <TabContent activeTab={activeTab} className="pt-4">
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xxl={3}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">Informações</h5>
                                                        <div className="table-responsive">
                                                            <Table className="table-borderless mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Nome Completo :</th>
                                                                        <td className="text-muted">Paulo Oliveira</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Celular :</th>
                                                                        <td className="text-muted">+(11) 985 7241</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">E-mail :</th>
                                                                        <td className="text-muted">paulo@email.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Local :</th>
                                                                        <td className="text-muted">São Bernardo do Campo, São Paulo
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Data de Cadastro :</th>
                                                                        <td className="text-muted">20 Ago 2023</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                            <Col xxl={9}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">Sobre mim</h5>
                                                        <p>Sou estudante de Desenvolvimento de Sistemas Fullstack, imerso em um mundo onde a tecnologia e a criatividade se encontram para criar soluções inovadoras. Em minha jornada acadêmica, venho aprendendo a dominar as complexidades do front-end e do back-end, buscando sempre a excelência em cada projeto que desenvolvo.

                                                            Quando não estou codando, estou provavelmente explorando mundos virtuais em MMORPGs, sendo "Blue Protocol" um dos meus favoritos. Essa paixão pelos games me ajuda a manter o equilíbrio e alimenta minha imaginação. Como pessoa, sou conhecido por ser empático, calmo e educado, características que considero fundamentais em um mundo cada vez mais conectado e colaborativo.</p>
                                                        <Row>
                                                            <Col xs={6} md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div
                                                                        className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                        <div
                                                                            className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                            <i className="ri-user-2-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-1">
                                                                            Designação :</p>
                                                                        <h6 className="text-truncate mb-0">Full Stack Developer</h6>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col xs={6} md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div
                                                                        className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                        <div
                                                                            className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                            <i className="ri-global-line"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-1">Website :</p>
                                                                        <Link to="#" className="fw-semibold">www.meusite.com</Link>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>

                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-4">Hard Skills</h5>
                                                        <div className="d-flex flex-wrap gap-2 fs-15">
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Figma</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">C#</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">HTML</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">CSS</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Javascript</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Java</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">C++</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>

                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-4">Soft Skills</h5>
                                                        <div className="d-flex flex-wrap gap-2 fs-15">
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Empatia</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Comunicação</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Liderança</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Criatividade</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Proatividade</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Ética</Link>
                                                            <Link to="#"
                                                                className="badge bg-secondary-subtle text-secondary">Resiliência</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>

                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-4">Portfólio</h5>
                                                        <div className="d-flex flex-wrap gap-2">
                                                            <div>
                                                                <Link to="#" className="avatar-xs d-block">
                                                                    <span
                                                                        className="avatar-title rounded-circle fs-16 bg-body text-body">
                                                                        <i className="ri-github-fill"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <Link to="#" className="avatar-xs d-block">
                                                                    <span
                                                                        className="avatar-title rounded-circle fs-16 bg-primary-subtle text-primary">
                                                                        <i className="ri-global-fill"></i>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Profile;