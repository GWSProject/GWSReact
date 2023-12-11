import React from 'react';
import CountUp from "react-countup";

//Import Icons
import FeatherIcon from "feather-icons-react";
import { Card, CardBody, Col, Row } from 'reactstrap';

//Deixar codigo flexivel para fazer as contagens
const externalSource = {
    counterValue: "500"
}

const Widgets = () => {

    const widgets = [
        {
            id: 1,
            feaIcon: "briefcase",
            feaIconClass: "primary",
            label: "Demandas",
            badgeClass: "danger",
            icon: "ri-arrow-down-s-line",
            caption: "Demandas Ativas",
            subCounter: [{ id: 1, counter: externalSource.counterValue, suffix: "" }]
        },
        {
            id: 2,
            feaIcon: "clipboard",
            feaIconClass: "primary",
            label: "Tarefas",
            badgeClass: "success",
            icon: "ri-arrow-up-s-line",
            caption: "Tarefas Ativas",
            subCounter: [{ id: 1, counter: "500", suffix: "", separator: "," }]
        },
        {
            id: 3,
            feaIcon: "users",
            feaIconClass: "primary",
            label: "Membros",
            badgeClass: "danger",
            icon: "ri-arrow-down-s-line",
            caption: "Membros Ativos",
            subCounter: [{ id: 1, counter: "80"}]
        },
        {
            id: 4,
            feaIcon: "clock",
            feaIconClass: "primary",
            label: "Horas",
            badgeClass: "danger",
            icon: "ri-arrow-down-s-line",
            caption: "Horas de Trabalho",
            subCounter: [{ id: 1, counter: "168", suffix: "h" }, { id: 1, counter: "40", suffix: "m" }]
        }
    ];

    return (
        <React.Fragment>
            <Row>
                {(widgets || []).map((item, key) => (
                    <Col xl={3} key={key}>
                        <Card className="card-animate">
                            <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className={`avatar-title bg-${item.feaIconClass}-subtle text-${item.feaIconClass} rounded-2 fs-2`}>
                                            <FeatherIcon icon={item.feaIcon} className={`text-${item.feaIconClass}`} />
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden ms-3">
                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-3">{item.label}</p>
                                        <div className="d-flex align-items-center mb-3">
                                            <h4 className="fs-4 flex-grow-1 mb-0">
                                                {item.subCounter.map((item: any, key: number) => (<span className="counter-value me-1" data-target="825" key={key}>
                                                    <CountUp
                                                        start={0}
                                                        suffix={item.suffix}
                                                        separator={item.separator}
                                                        end={item.counter}
                                                        duration={4}
                                                    />
                                                </span>))}
                                            </h4>
                                            <span className={"fs-12 badge bg-" + item.badgeClass + "-subtle text-" + item.badgeClass}></span>
                                        </div>
                                        <p className="text-muted text-truncate mb-0">{item.caption}</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};

export default Widgets;