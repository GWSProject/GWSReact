import React, { useState, useCallback, useMemo } from "react";

// Import Images
import avatar10 from "assets/images/users/avatar-10.jpg"

import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
  FormFeedback
} from "reactstrap";

import BreadCrumb from "Components/Common/BreadCrumb";
import DeleteModal from "Components/Common/DeleteModal";

//Redux
import TableContainer from "Components/Common/TableContainer";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";
import Loader from "Components/Common/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SegmentList = () => {

  const error = ("Erro !");

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  const handleDeleteContact = () => {
    setDeleteModal(false);
  };

  const onClickDelete = () => {
    setDeleteModal(true);
  };

  const handleContactClicks = () => {
    setIsEdit(false);
    toggle();
  };

  const crmdata = [
    {
      id: 1,
      segment: "Inteligência Artificial",
      date: "15 Dez, 2021"
    },
    {
      id: 2,
      segment: "Computação em Nuvem",
      date: "10 Jan, 2022"
    },
    {
      id: 3,
      segment: "Realidade Virtual",
      date: "20 Fev, 2022"
    },
    {
      id: 4,
      segment: "Internet das Coisas (IoT)",
      date: "05 Mar, 2022"
    },
    {
      id: 5,
      segment: "Big Data",
      date: "18 Mar, 2022"
    },
    {
      id: 6,
      segment: "Cibersegurança",
      date: "02 Abr, 2022"
    },
    {
      id: 7,
      segment: "Desenvolvimento Web",
      date: "25 Abr, 2022"
    },
    {
      id: 8,
      segment: "Blockchain",
      date: "10 Mai, 2022"
    },
    {
      id: 9,
      segment: "Robótica",
      date: "30 Mai, 2022"
    },
    {
      id: 10,
      segment: "5G",
      date: "15 Jun, 2022"
    }
  ];

  // Validação
  const validation: any = useFormik({

    enableReinitialize: true,

    initialValues: {
      segmentTitle: '',
    },
    validationSchema: Yup.object({
      segmentTitle: Yup.string().required("Por favor, Insira o título do segmento"),
    }),
    onSubmit: (values) => {
      console.log("values", values)
    }
  });

  // Column
  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        filterable: false,
        Cell: (id: any) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1 ms-2 name">
                {id.row.original.id}
              </div>
            </div>
          </>
        ),
      },
      {
        Header: "Segmentos",
        accessor: "segment",
        filterable: false,
      },
      {
        Header: "Data de Criação",
        accessor: "date",
        filterable: false,
      },
      {
        Header: "Ação",
        Cell: (cellProps: any) => {
          return (
            <ul className="list-inline hstack gap-2 mb-0">
              <li className="list-inline-item">
                <UncontrolledDropdown>
                  <DropdownToggle
                    href="#"
                    className="btn btn-soft-primary btn-sm dropdown"
                    tag="button"
                  >
                    <i className="ri-more-fill align-middle"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem
                      className="dropdown-item edit-item-btn"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setModal(true);
                        setIsEdit(true);
                      }}
                    >
                      <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                      Editar
                    </DropdownItem>
                    <DropdownItem
                      className="dropdown-item remove-item-btn"
                      href="#"
                      onClick={() => {
                        onClickDelete();
                      }}
                    >
                      <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                      Deletar
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          );
        },
      },
    ],
    []
  );


  document.title = "Listar Segmentos | GWS";
  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDeleteContact}
          onCloseClick={() => setDeleteModal(false)}
        />
        <Container fluid>
          <BreadCrumb title="Listar Segmentos" pageTitle="Segmentos" />
          <Row>

            <Col xxl={12}>
              <Card id="contactList">
                <CardBody className="pt-0">
                  <div>
                    {crmdata && crmdata.length > 0 ? (
                      <TableContainer
                        columns={columns}
                        data={(crmdata || [])}
                        isGlobalFilter={true}
                        isAddUserList={false}
                        customPageSize={8}
                        className="custom-header-css"
                        divClass="table-responsive table-card mb-3"
                        tableClass="align-middle table-nowrap"
                        theadClass="table-light"
                        handleContactClick={handleContactClicks}
                        isContactsFilter={true}
                      />
                    ) : (<Loader error={error} />)
                    }
                  </div>

                  <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
                    <ModalHeader className="bg-primary-subtle p-3" toggle={toggle}>
                      {isEdit ? "Editar Segmento" : ""}
                    </ModalHeader>

                    <Form className="tablelist-form" onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}>

                      <ModalBody>
                        <Input type="hidden" id="id-field" />
                        <Row className="g-3">
                          <Col lg={12}>
                            <div>
                              <Label className="form-label" htmlFor="project-title-input">Título do Segmento</Label>
                              <Input
                                placeholder="Insira o título do segmento"
                                name="segmentTitle"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.segmentTitle || ""}
                                invalid={
                                  validation.touched.segmentTitle && validation.errors.segmentTitle ? true : false
                                }
                              />
                              {validation.touched.segmentTitle && validation.errors.segmentTitle ? (
                                <FormFeedback type="invalid">{validation.errors.segmentTitle}</FormFeedback>
                              ) : null}
                            </div>
                          </Col>
                        </Row>
                      </ModalBody>

                      <ModalFooter>
                        <div className="hstack gap-2 justify-content-end">
                          <button type="button" className="btn btn-light" onClick={() => { setModal(false); }} >Fechar </button>
                          <button type="submit" className="btn btn-success" id="add-btn"> {!!isEdit ? "Atualizar" : ""} </button>
                        </div>
                      </ModalFooter>

                    </Form>
                  </Modal>
                  <ToastContainer closeButton={false} limit={1} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SegmentList;
