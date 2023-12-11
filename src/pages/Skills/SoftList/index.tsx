import React, { useState, useCallback, useMemo, useEffect } from "react";
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
  FormFeedback,
  Spinner,
} from "reactstrap";
import BreadCrumb from "Components/Common/BreadCrumb";
import DeleteModal from "Components/Common/DeleteModal";
import TableContainer from "Components/Common/TableContainer";
import * as Yup from "yup";
import { useFormik } from "formik";
import Loader from "Components/Common/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api, { softResource } from "Services/Services";

const SoftList = () => {
  //UseStates
  const [updateListTrigger, setUpdateListTrigger] = useState<boolean>(false);
  const [loader, setLoader] = useState<Boolean>(false);
  const [id, setId] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [listSkills, setListSkills] = useState<Array<any>>([]);
  const [error, setError] = useState<boolean>(false);
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

  const handleDelete = async () => {
    try {
      await api.delete(`${softResource}/${id}`);
      setUpdateListTrigger((prev) => !prev);
      toast.success("Soft Skill deletada com sucesso!");
      setDeleteModal(false);
    } catch (error) {
      toast.error("Erro ao deletar soft skill.");
    }
  };

  const onClickDelete = (data: any) => {
    setDeleteModal(true);
    setId(data.id_softskills)
  };

  const handleUpdateSoft = useCallback((data: any) => {
    setId(data.id_softskills);
    setSkills(data.nome);
    setIsEdit(true);
    toggle();
  }, []);

  //UseEffects
  useEffect(() => {
    async function ListSkills() {
      try {
        const response = await api.get(softResource);
        const data = response.data;

        setListSkills(data);
      } catch (error) {
        toast.error("Erro ao carregar consultas agendadas.");
      }
    }

    ListSkills();
  }, [updateListTrigger]);


  //Formik Validation 
  const validation: any = useFormik({

    enableReinitialize: true,

    initialValues: {
      softSkill: skills || '',
    },
    validationSchema: Yup.object({
      softSkill: Yup.string().required("Por favor, Insira o nome da soft skill"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoader(true);

      try {
        const response = await api.put(`${softResource}/${id}`, {
          nome: values.softSkill
        });
        toast.success("Soft Skill atualizada com sucesso!");
        setUpdateListTrigger((prev) => !prev);
      } catch (error) {
        console.log(error);

        toast.error("Erro ao atualizar a soft skill.");
      }

      setLoader(false);
      resetForm();
    }
  });

  // Column
  const columns = useMemo(
    () => [
      {
        Header: "Soft Skills",
        accessor: "nome",
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
                      onClick={() => {
                        const data = cellProps.row.original;
                        handleUpdateSoft(data);
                      }}
                    >
                      <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                      Editar
                    </DropdownItem>
                    <DropdownItem
                      className="dropdown-item remove-item-btn"
                      href="#"
                      onClick={() => {
                        const data = cellProps.row.original;
                        onClickDelete(data);
                      }}
                    >
                      <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                      Deletar
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul >
          );
        },
      },
    ],
    [handleUpdateSoft, onClickDelete]
  );

  document.title = "Listar Soft Skills | GWS";
  return (
    <React.Fragment>
      <ToastContainer closeButton={false} />
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDelete}
          onCloseClick={() => setDeleteModal(false)}
        />
        <Container fluid>
          <BreadCrumb title="Listar Soft Skills" pageTitle="Skills" />
          <Row>

            <Col xxl={12}>
              <Card id="skillsList">
                <CardBody className="pt-0">
                  <div>
                    {listSkills && listSkills.length > 0 ? (
                      <TableContainer
                        columns={columns}
                        data={(listSkills || [])}
                        isGlobalFilter={true}
                        isAddUserList={false}
                        customPageSize={8}
                        className="custom-header-css"
                        divClass="table-responsive table-card mb-3"
                        tableClass="align-middle table-nowrap"
                        theadClass="table-light"
                        handleContactClick={handleUpdateSoft}
                        isContactsFilter={true}
                      />
                    ) : (<Loader error={error} />)
                    }
                  </div>

                  <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
                    <ModalHeader className="bg-primary-subtle p-3" toggle={toggle}>
                      {isEdit ? "Editar Soft Skill" : ""}
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
                            <div className="mb-3">
                              <Label className="form-label" htmlFor="project-title-input">Nome da Soft Skill</Label>
                              <Input type="text" className="form-control" id="project-title-input"
                                placeholder="Digite o nome da soft skill"
                                name="softSkill"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={"" || validation.values.softSkill}
                                invalid={
                                  validation.touched.softSkill && validation.errors.softSkill ? true : false
                                }
                              />
                              {validation.touched.softSkill && validation.errors.softSkill ? (
                                <FormFeedback type="invalid">{validation.errors.softSkill}</FormFeedback>
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

export default SoftList;
