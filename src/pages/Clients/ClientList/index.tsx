//Imports
import React, { useState, useCallback, useMemo } from "react";
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
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
  Label,
  FormFeedback
} from "reactstrap";
import BreadCrumb from "Components/Common/BreadCrumb";
import DeleteModal from "Components/Common/DeleteModal";
import TableContainer from "Components/Common/TableContainer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Images
import comp1 from "../../../assets/images/companies/img-1.png"
import comp2 from "../../../assets/images/companies/img-2.png"
import comp3 from "../../../assets/images/companies/img-3.png"
import comp4 from "../../../assets/images/companies/img-4.png"
import comp5 from "../../../assets/images/companies/img-5.png"
import comp6 from "../../../assets/images/companies/img-6.png"
import comp7 from "../../../assets/images/companies/img-7.png"
import comp8 from "../../../assets/images/companies/img-8.png"
import comp9 from "../../../assets/images/companies/img-9.png"
import dummyImg from "assets/images/users/multi-user.jpg"

const ClientList = () => {

  //MockUp
  const tableData = [
    {
      _id: '1',
      company_name: 'Empresa A',
      company_image_src: comp1,
      client_name: 'Cliente A',
      phone: '123-456-7890',
      email: 'cliente-a@email.com',
    },
    {
      _id: '2',
      company_name: 'Empresa B',
      company_image_src: comp2,
      client_name: 'Cliente B',
      phone: '123-456-7891',
      email: 'cliente-b@email.com',
    },
    {
      _id: '3',
      company_name: 'Empresa C',
      company_image_src: comp3,
      client_name: 'Cliente C',
      phone: '123-456-7892',
      email: 'cliente-c@email.com',
    },
    {
      _id: '4',
      company_name: 'Empresa D',
      company_image_src: comp4,
      client_name: 'Cliente D',
      phone: '123-456-7893',
      email: 'cliente-d@email.com',
    },
    {
      _id: '5',
      company_name: 'Empresa E',
      company_image_src: comp5,
      client_name: 'Cliente E',
      phone: '123-456-7894',
      email: 'cliente-e@email.com',
    },
    {
      _id: '6',
      company_name: 'Empresa F',
      company_image_src: comp6,
      client_name: 'Cliente F',
      phone: '123-456-7895',
      email: 'cliente-f@email.com',
    },
    {
      _id: '7',
      company_name: 'Empresa G',
      company_image_src: comp7,
      client_name: 'Cliente G',
      phone: '123-456-7896',
      email: 'cliente-g@email.com',
    },
    {
      _id: '8',
      company_name: 'Empresa H',
      company_image_src: comp8,
      client_name: 'Cliente H',
      phone: '123-456-7897',
      email: 'cliente-h@email.com',
    },
    {
      _id: '9',
      company_name: 'Empresa I',
      company_image_src: comp9,
      client_name: 'Cliente I',
      phone: '123-456-7898',
      email: 'cliente-i@email.com',
    },
    {
      _id: '10',
      company_name: 'Empresa J',
      company_image_src: comp1,
      client_name: 'Cliente J',
      phone: '123-456-7899',
      email: 'cliente-j@email.com',
    }
  ];

  //UseStates
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  //Functions
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

  //Formik Validation 
  const validation: any = useFormik({

    enableReinitialize: true,

    initialValues: {
      img: '',
      company: '',
      client: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      img: Yup.string().required("Por favor, Insira a imagem da empresa."),
      company: Yup.string().required("Por favor, Insira o nome da empresa."),
      client: Yup.string().required("Por favor, Insira o nome do cliente."),
      email: Yup.string().required("Por favor, Insira o email."),
      phone: Yup.string().required("Por favor, Insira o número de telefone."),
    }),
    onSubmit: (values) => {
      console.log("values", values)
    }
  });

  // Column
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Nome da Empresa",
        accessor: "company_name",
        Cell: (cellInfo: any) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                {cellInfo.row.original.company_image_src ? (
                  <img
                    src={`${cellInfo.row.original.company_image_src}`}
                    alt=""
                    className="avatar-xxs rounded-circle"
                  />
                ) : (
                  <div className="avatar-xs me-2">
                    <div className="avatar-title bg-info-subtle text-info rounded-circle fs-13">
                      {cellInfo.row.original.company_name}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-grow-1 ms-2 name">
                {cellInfo.row.original.company_name}
              </div>
            </div>
          </>
        ),
      },
      {
        Header: "Nome do Cliente",
        accessor: "client_name",
      },
      {
        Header: "Telefone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Ação",
        Cell: ({ row }: { row: any }) => (
          <ul className="list-inline hstack gap-2 mb-0">
            <li className="list-inline-item">
              <UncontrolledDropdown>
                <DropdownToggle href="#" className="btn btn-soft-primary btn-sm dropdown" tag="button">
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
                    <i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Editar
                  </DropdownItem>
                  <DropdownItem
                    className="dropdown-item remove-item-btn"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onClickDelete();
                    }}
                  >
                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Deletar
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
          </ul >
        ),
      },
    ],
    [setModal, setIsEdit, onClickDelete]
  );

  //Image Validation
  const [imgStore, setImgStore] = useState<any>();
  const [selectedImage, setSelectedImage] = useState<any>();

  const handleClick = (item: any) => {
    const newData = [...imgStore, item];
    setImgStore(newData);
    validation.setFieldValue('img', newData)
  }

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      validation.setFieldValue('img', e.target.result);
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  document.title = "Listar Clientes | GWS";
  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDeleteContact}
          onCloseClick={() => setDeleteModal(false)}
        />
        <Container fluid>
          <BreadCrumb title="Listar Clientes" pageTitle="Clientes" />
          <Row>

            <Col xxl={12}>
              <Card id="contactList">
                <CardBody className="pt-0">
                  <div>
                    <TableContainer
                      columns={columns}
                      data={(tableData || [])}
                      isGlobalFilter={true}
                      isAddUserList={false}
                      customPageSize={5}
                      className="custom-header-css"
                      divClass="table-responsive table-card mb-3"
                      tableClass="align-middle table-nowrap"
                      theadClass="table-light"
                      handleContactClick={handleContactClicks}
                      isContactsFilter={true}
                    />
                  </div>

                  <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
                    <ModalHeader className="bg-primary-subtle p-3" toggle={toggle}>
                      {isEdit ? "Editar Clíente" : ""}
                    </ModalHeader>

                    <Form className="tablelist-form" onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}>

                      <ModalBody>
                        <Input type="hidden" id="id-field" />
                        <Col lg={12} className="mb-2">
                          <div className="text-center">
                            <div className="position-relative d-inline-block">
                              <div className="position-absolute  bottom-0 end-0">
                                <Label htmlFor="customer-image-input" className="mb-0">
                                  <div className="avatar-xs cursor-pointer">
                                    <div className="avatar-title bg-light border rounded-circle text-muted">
                                      <i className="ri-image-fill"></i>
                                    </div>
                                  </div>
                                </Label>
                                <Input className="form-control d-none" id="customer-image-input" type="file"
                                  accept="image/png, image/gif, image/jpeg" onChange={handleImageChange}
                                  invalid={
                                    validation.touched.img && validation.errors.img ? true : false
                                  }
                                />
                              </div>
                              <div className="avatar-lg p-1" onClick={(item: any) => handleClick(item)}>
                                <div className="avatar-title bg-light rounded-circle">
                                  <img src={selectedImage || validation.values.img || dummyImg} alt="dummyImg" id="customer-img" className="avatar-md rounded-circle object-fit-cover" />
                                </div>
                              </div>
                            </div>
                            {validation.errors.img && validation.touched.img ? (
                              <FormFeedback type="invalid" className='d-block'> {validation.errors.img} </FormFeedback>
                            ) : null}
                          </div>

                          <div>
                            <Label
                              htmlFor="company-field"
                              className="form-label"
                            >
                              Nome da Empresa
                            </Label>
                            <Input
                              name="company"
                              id="company-field"
                              className="form-control"
                              placeholder="Digite o Nome da Empresa"
                              type="text"
                              validate={{
                                required: { value: true },
                              }}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.company || ""}
                              invalid={
                                validation.touched.company && validation.errors.company ? true : false
                              }
                            />
                            {validation.touched.company && validation.errors.company ? (
                              <FormFeedback type="invalid">{validation.errors.company}</FormFeedback>
                            ) : null}

                          </div>
                        </Col>

                        <Col lg={12} className="mb-2">
                          <div>
                            <Label
                              htmlFor="client-field"
                              className="form-label"
                            >
                              Nome do Cliente
                            </Label>
                            <Input
                              name="client"
                              id="client_name-field"
                              className="form-control"
                              placeholder="Digite o Nome do Cliente"
                              type="text"
                              validate={{
                                required: { value: true },
                              }}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.client || ""}
                              invalid={
                                validation.touched.client && validation.errors.client ? true : false
                              }
                            />
                            {validation.touched.client && validation.errors.client ? (
                              <FormFeedback type="invalid">{validation.errors.client}</FormFeedback>
                            ) : null}

                          </div>
                        </Col>

                        <Col lg={12} className="mb-2">
                          <div>
                            <Label
                              htmlFor="emailid-field"
                              className="form-label"
                            >
                              Email
                            </Label>

                            <Input
                              name="email"
                              id="emailid-field"
                              className="form-control"
                              placeholder="Digite o Email"
                              type="text"
                              validate={{
                                required: { value: true },
                              }}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={
                                validation.touched.email && validation.errors.email ? true : false
                              }
                            />
                            {validation.touched.email && validation.errors.email ? (
                              <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                            ) : null}

                          </div>
                        </Col>

                        <Col lg={12} className="mb-2">
                          <div>
                            <Label
                              htmlFor="phone-field"
                              className="form-label"
                            >
                              Telefone
                            </Label>

                            <Input
                              name="phone"
                              id="phone-field"
                              className="form-control"
                              placeholder="Digite o Telefone "
                              type="text"
                              validate={{
                                required: { value: true },
                              }}
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.phone || ""}
                              invalid={
                                validation.touched.phone && validation.errors.phone ? true : false
                              }
                            />
                            {validation.touched.phone && validation.errors.phone ? (
                              <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
                            ) : null}
                          </div>
                        </Col>
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

export default ClientList;
