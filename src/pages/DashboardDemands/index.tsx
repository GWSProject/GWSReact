import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import ActiveDemands from './ActiveDemands';
import DemandsOverview from './DemandsOverview';
import DemandsStatus from './DemandsStatus';
import EstimatedxActual from './EstimatedxActual';
import Widgets from './Widgets';

const DashboardProject = () => {
    document.title="Dashboard Demandas | GWS";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Demandas" pageTitle="Dashboard" />
                    <Row className="project-wrapper">
                        <Col xxl={12}>
                            <Widgets />
                            <DemandsOverview />
                        </Col>
                    </Row>
                    <Row>
                        <ActiveDemands />
                    </Row>
                    <Row>
                        <EstimatedxActual />
                        <DemandsStatus />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardProject;