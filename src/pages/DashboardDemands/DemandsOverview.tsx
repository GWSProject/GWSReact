import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { DemandsOverviewCharts } from './DashboardDemandsCharts';
import { getDemandsChartsData } from '../../slices/thunks';
import { createSelector } from 'reselect';

const DemandsOverview = () => {
    const dispatch = useDispatch<any>();

    const [chartData, setchartData] = useState<any>([]);

    const selectdemandData = createSelector(
        (state) => state.DashboardDemands.projectData,  // Updated path
        (projectData) => projectData
    );


    //Componente
    const demandData = useSelector(selectdemandData);

    useEffect(() => {
        setchartData(demandData);
    }, [demandData]);

    const onChangeChartPeriod = (pType: any) => {
        dispatch(getDemandsChartsData(pType));
    };

    useEffect(() => {
        dispatch(getDemandsChartsData("all"));
    }, [dispatch]);

    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card>
                        <CardHeader className="border-0 align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Visão Geral das Demandas</h4>
                            <div className="d-flex gap-1">
                                <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("all"); }}>
                                    Todos
                                </button>
                                <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("month"); }}>
                                    1 Mês
                                </button>
                                <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("halfyear"); }}>
                                    6 Meses
                                </button>
                                <button type="button" className="btn btn-soft-primary btn-sm" onClick={() => { onChangeChartPeriod("year"); }}>
                                    1 Ano
                                </button>
                            </div>
                        </CardHeader>

                        <CardHeader className="p-0 border-0 bg-light-subtle">
                            <Row className="g-0 text-center">
                                <Col xs={6} sm={3}>
                                    <div className="p-3 border border-dashed border-start-0">
                                        <h5 className="mb-1"><span className="counter-value" data-target="9851">
                                            <CountUp
                                                start={0}
                                                end={9851}
                                                separator={","}
                                                duration={4}
                                            />
                                        </span></h5>
                                        <p className="text-muted mb-0">Número de Demandas</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <div className="p-3 border border-dashed border-start-0">
                                        <h5 className="mb-1"><span className="counter-value">
                                            <CountUp
                                                start={0}
                                                end={1026}
                                                separator={","}
                                                duration={4}
                                            />
                                        </span></h5>
                                        <p className="text-muted mb-0">Demandas Ativas</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <div className="p-3 border border-dashed border-start-0">
                                        <h5 className="mb-1">R$<span className="counter-value" data-target="228.89">
                                            <CountUp
                                                start={0}
                                                end={228.89}
                                                decimals={2}
                                                duration={4}
                                            />
                                        </span>k</h5>
                                        <p className="text-muted mb-0">Custo</p>
                                    </div>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <div className="p-3 border border-dashed border-start-0 border-end-0">
                                        <h5 className="mb-1 text-success"><span className="counter-value" data-target="10589">
                                            <CountUp
                                                start={0}
                                                end={10589}
                                                separator={","}
                                                duration={4}
                                            />
                                        </span>h</h5>
                                        <p className="text-muted mb-0">Horas de Trabalho</p>
                                    </div>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody className="p-0 pb-2">
                            <div>
                                <div dir="ltr" className="apex-charts">
                                    <DemandsOverviewCharts series={chartData} dataColors='["--gws-primary", "--gws-primary-rgb, 0.1", "--gws-primary-rgb, 0.50"]' />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DemandsOverview;