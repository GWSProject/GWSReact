import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

import Pagination from 'Components/Common/Pagination';

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

const ActiveDemands = () => {

    const demands = [
        {
            id: 1,
            projectName: "Novo Design de Logo ",
            img: avatar1,
            projectLead: "Carlos Roque",
            percentage: "53%",
            subItem: [
                { id: 1, assImg: avatar1 },
                { id: 2, assImg: avatar2 },
                { id: 3, assImg: avatar3 },
            ],
            fte: "5",
            badge: "Em Progresso",
            badgeClass: "warning",
            dueDate: "06 Set 2023",
        },
        {
            id: 2,
            projectName: "Codificar Landing Page",
            img: avatar2,
            projectLead: "Aléxia Melhado",
            percentage: "0%",
            subItem: [
                { id: 1, assImg: avatar5 },
                { id: 2, assImg: avatar6 },
            ],
            fte: "1,5",
            badge: "Pendente",
            badgeClass: "danger",
            dueDate: "13 Nov 2023",
        },
        {
            id: 3,
            projectName: "Aplicação de Chat",
            img: avatar5,
            projectLead: "Odirlei Assis",
            percentage: "64%",
            subItem: [{ id: 1, assImg: avatar2 }],
            fte: "3,5",
            badge: "Em Progresso",
            badgeClass: "warning",
            dueDate: "15 Dez 2023",
        },
        {
            id: 4,
            projectName: "Criar Wireframe",
            img: avatar6,
            projectLead: "Lucas Portal",
            percentage: "77%",
            subItem: [
                { id: 1, assImg: avatar1 },
                { id: 2, assImg: avatar6 },
                { id: 3, assImg: avatar4 },
            ],
            fte: "4,5",
            badge: "Em Progresso",
            badgeClass: "warning",
            dueDate: "21 Dez 2023",
        }, {
            id: 5,
            projectName: "Criar API",
            img: avatar8,
            projectLead: "Eduardo Alves",
            percentage: "53%",
            subItem: [
                { id: 1, assImg: avatar5 },
                { id: 2, assImg: avatar4 },
                { id: 3, assImg: avatar6 },
            ],
            fte: "5",
            badge: "Em Progresso",
            badgeClass: "warning",
            dueDate: "06 Set 2023",
        },
        {
            id: 6,
            projectName: "Branding de Marca",
            img: avatar3,
            projectLead: "Enzo Quarello",
            percentage: "0%",
            subItem: [
                { id: 1, assImg: avatar7 },
                { id: 2, assImg: avatar8 },
            ],
            fte: "1,5",
            badge: "Pendente",
            badgeClass: "danger",
            dueDate: "13 Nov 2023",
        },
        {
            id: 7,
            projectName: "ChatBOT",
            img: avatar6,
            projectLead: "Lucas Portal",
            percentage: "64%",
            subItem: [{ id: 1, assImg: avatar2 }],
            fte: "3,5",
            badge: "Em Progresso",
            badgeClass: "warning",
            dueDate: "15 Dez 2023",
        },
        {
            id: 8,
            projectName: "Criar BD",
            img: avatar7,
            projectLead: "Lucas Lessa",
            percentage: "77%",
            subItem: [
                { id: 1, assImg: avatar2 },
                { id: 2, assImg: avatar3 },
                { id: 3, assImg: avatar5 },
            ],
            fte: "4,5",
            badge: "Em Progresso",
            badgeClass: "warning",
            dueDate: "21 Dez 2023",
        },
        {
            id: 9,
            projectName: "Criar Apresentação",
            img: avatar5,
            projectLead: "Odirlei Assis",
            percentage: "77%",
            subItem: [
                { id: 1, assImg: avatar2 },
                { id: 2, assImg: avatar6 },
                { id: 3, assImg: avatar3 },
            ],
            fte: "4,5",
            badge: "Em Progresso",
            badgeClass: "warning",
            dueDate: "21 Dez 2023",
        },
        {
            id: 10,
            projectName: "Reforma Departamento",
            img: avatar3,
            projectLead: "Enzo Quarello",
            percentage: "77%",
            subItem: [
                { id: 1, assImg: avatar2 },
                { id: 2, assImg: avatar5 },
                { id: 3, assImg: avatar8 },
            ],
            fte: "4,5",
            badge: "Em Progresso",
            badgeClass: "warning",
            dueDate: "21 Dez 2023",
        },
    ]

    //Paginação
    const [currentPage, setCurrentPage] = useState(1);
    const data = demands;  //Array de Objetos
    const perPageData = 5;  // número de itens por página

    const dadosDaPaginaAtual = data.slice((currentPage - 1) * perPageData, currentPage * perPageData);

    //Showing
    const firstItemIndex = (currentPage - 1) * perPageData + 1;
    const lastItemIndex = Math.min(currentPage * perPageData, data.length);

    return (
        <React.Fragment>
            <Col xl={12}>
                <Card className="card-height-100">
                    <CardHeader className="d-flex align-items-center">
                        <h4 className="card-title flex-grow-1 mb-0">Demandas Ativas</h4>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive table-card">
                            <table className="table table-nowrap table-centered align-middle">
                                <thead className="bg-light text-muted">
                                    <tr>
                                        <th scope="col">Nome da Demanda</th>
                                        <th scope="col">Líder da Demanda</th>
                                        <th scope="col">Progresso</th>
                                        <th scope="col">Atribuido</th>
                                        <th scope="col">FTE</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" style={{ width: "10%" }}>Data Prevista</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(dadosDaPaginaAtual || []).map((item, key) => (<tr key={key}>
                                        <td className="fw-medium">{item.projectName}</td>
                                        <td>
                                            <img src={item.img} className="avatar-xxs rounded-circle me-1" alt="" />
                                            <Link to="#" className="text-reset">{item.projectLead}</Link>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-1 text-muted fs-13">{item.percentage}</div>
                                                <div className="progress progress-sm  flex-grow-1" style={{ width: "68%" }}>
                                                    <div className="progress-bar bg-primary rounded" role="progressbar" style={{ width: item.percentage }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="avatar-group flex-nowrap">
                                                {item.subItem.map((item, key) => (<div className="avatar-group-item" key={key}>
                                                    <Link to="#" className="d-inline-block">
                                                        <img src={item.assImg} alt="" className="rounded-circle avatar-xxs" />
                                                    </Link>
                                                </div>))}
                                            </div>
                                        </td>
                                        <td>{item.fte}</td>
                                        <td><span className={"badge bg-" + item.badgeClass + "-subtle text-" + item.badgeClass}>{item.badge}</span></td>
                                        <td className="text-muted">{item.dueDate}</td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                        <div className="align-items-center mt-xl-3 mt-4 justify-content-between d-flex">
                            <div className="flex-shrink-0">
                                <div className="text-muted">
                                    Mostrando <span className="fw-semibold">{firstItemIndex}</span> a <span className="fw-semibold">{lastItemIndex}</span> de <span className="fw-semibold">{data.length}</span> Resultados
                                </div>
                            </div>
                            <Pagination
                                data={data}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                perPageData={perPageData}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default ActiveDemands;