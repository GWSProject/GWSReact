import React from 'react';
import { Card, CardHeader, Col } from 'reactstrap';
import { EstimatedxActualCharts } from './DashboardDemandsCharts';
import { useState } from 'react';
import Pagination from 'Components/Common/Pagination';

//Import Images
import comp1 from "../../assets/images/companies/img-1.png";
import comp2 from "../../assets/images/companies/img-2.png";
import comp3 from "../../assets/images/companies/img-3.png";
import comp4 from "../../assets/images/companies/img-4.png";
import comp5 from "../../assets/images/companies/img-5.png";
import comp6 from "../../assets/images/companies/img-6.png";
import comp7 from "../../assets/images/companies/img-7.png";

const EstimatedxActual = () => {

    const demands = [
        {
            id: 1,
            demandimg: comp1,
            demandname: "Demanda A",
            estimated: "110",
            actual: "105",
            tasks: "250",
            series: "50",
            chartsColor: "#25a0e2"
        },
        {
            id: 2,
            demandimg: comp2,
            demandname: "Demanda B",
            estimated: "120",
            actual: "115",
            tasks: "260",
            series: "55",
            chartsColor: "#25a0e2"
        },
        {
            id: 3,
            demandimg: comp3,
            demandname: "Demanda C",
            estimated: "130",
            actual: "120",
            tasks: "270",
            series: "60",
            chartsColor: "#25a0e2"
        },
        {
            id: 4,
            demandimg: comp4,
            demandname: "Demanda D",
            estimated: "140",
            actual: "130",
            tasks: "280",
            series: "65",
            chartsColor: "#25a0e2"
        },
        {
            id: 5,
            demandimg: comp5,
            demandname: "Demanda E",
            estimated: "150",
            actual: "140",
            tasks: "290",
            series: "70",
            chartsColor: "#25a0e2"
        },
        {
            id: 6,
            demandimg: comp6,
            demandname: "Demanda F",
            estimated: "160",
            actual: "150",
            tasks: "300",
            series: "75",
            chartsColor: "#25a0e2"
        },
        {
            id: 7,
            demandimg: comp7,
            demandname: "Demanda G",
            estimated: "170",
            actual: "160",
            tasks: "310",
            series: "80",
            chartsColor: "#25a0e2"
        }
    ];

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
            <Col xxl={12}>
                <Card className='card-height-100'>

                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Estimado x Realizado</h4>
                    </CardHeader>

                    <div className="card-body">

                        <div className="table-responsive table-card">
                            <table className="table table-nowrap table-centered align-middle">
                                <thead className="table-light text-muted">
                                    <tr>
                                        <th scope="col">Demandas</th>
                                        <th scope="col">Estimado x Realizado</th>
                                        <th scope="col">Tarefas</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(dadosDaPaginaAtual || []).map((item, key) => (<tr key={key}>
                                        <td >
                                            <div className="d-flex align-items-center">
                                                <img src={item.demandimg} alt="" className="avatar-xs rounded-3 me-2" />
                                                <h5 className="fs-13 mb-0">{item.demandname}</h5>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 className="mb-0">{item.estimated}h : <span className="text-muted">{item.actual}h </span></h6>
                                        </td>
                                        <td>
                                            {item.tasks}
                                        </td>
                                        <td style={{ width: "5%" }}>
                                            <EstimatedxActualCharts seriesData={item.series} chartsColor={item.chartsColor} />
                                        </td>
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
                    </div>
                </Card>
            </Col>

        </React.Fragment>
    );
};

export default EstimatedxActual;