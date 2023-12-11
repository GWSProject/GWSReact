import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { DemandsStatusCharts } from './DashboardDemandsCharts';
import { getDemandsStatusChartsData } from '../../slices/thunks';
import { createSelector } from 'reselect';

const DemandsStatus = () => {
    const dispatch = useDispatch<any>();

    const [chartData, setchartData] = useState<any>([]);

    const selectdemandstatusData = createSelector(
        (state) => state.DashboardProject.projectStatusData,
        (projectStatusData) => projectStatusData
      );

    //Componente
    const demandStatusData = useSelector(selectdemandstatusData);

    useEffect(() => {
        setchartData(demandStatusData);
    }, [demandStatusData]);

    const [seletedMonth, setSeletedMonth] = useState("Todo Período");
    const onChangeChartPeriod = (pType: any) => {
        setSeletedMonth(pType);
        dispatch(getDemandsStatusChartsData(pType));
    };

    useEffect(() => {
        dispatch(getDemandsStatusChartsData("Todo Período"));
    }, [dispatch]);
    return (
        <React.Fragment>
            <Col xxl={12} lg={12}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Status das Demandas</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="dropdown-btn text-muted" role="button">
                                {seletedMonth.charAt(0).toUpperCase() + seletedMonth.slice(1)} <i className="mdi mdi-chevron-down ms-1"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem onClick={() => { onChangeChartPeriod("Todo Período"); }} className={seletedMonth === "Todo Período" ? "active" : ""}>Todo Período</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("Últimos 7 Dias"); }} className={seletedMonth === "Últimos 7 Dias" ? "active" : ""}>Últimos 7 Dias</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("Últimos 30 Dias"); }} className={seletedMonth === "Últimos 30 Dias" ? "active" : ""}>Últimos 30 Dias</DropdownItem>
                                    <DropdownItem onClick={() => { onChangeChartPeriod("Últimos 90 Dias"); }} className={seletedMonth === "Últimos 90 Dias" ? "active" : ""}>Últimos 90 Dias</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>

                    <CardBody>
                        <div id="prjects-status" className="apex-charts" dir="ltr">
                            <DemandsStatusCharts series={chartData} dataColors='["--gws-primary", "--gws-primary-rgb, 0.85", "--gws-primary-rgb, 0.70", "--gws-primary-rgb, 0.50"]' />
                        </div>
                        <div className="mt-3">
                            <div className="d-flex justify-content-center align-items-center mb-4">
                                <h2 className="me-3 ff-secondary mb-0">{chartData[0] + chartData[1] + chartData[2] + chartData[3] || 784}</h2>
                                <div>
                                    <p className="text-muted mb-0">Demandas Totais</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-success align-middle me-2"></i>Concluído</p>
                                <div>
                                    <span className="text-muted pe-5">{chartData[0]} Demandas</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-primary align-middle me-2"></i>Em Andamento</p>
                                <div>
                                    <span className="text-muted pe-5">{chartData[1]} Demandas</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-warning align-middle me-2"></i>Pendente de Início</p>
                                <div>
                                    <span className="text-muted pe-5">{chartData[2]} Demandas</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-2">
                                <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-danger align-middle me-2"></i>Cancelado</p>
                                <div>
                                    <span className="text-muted pe-5">{chartData[3]} Demandas</span>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default DemandsStatus;