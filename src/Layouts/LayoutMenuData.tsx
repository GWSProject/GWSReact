import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState<boolean>(false);
    const [isPages, setIsPages] = useState<boolean>(false);
    const [isCliente, setIsCliente] = useState<boolean>(false);
    const [isSkills, setIsSkills] = useState<boolean>(false);






    // Pages
    const [isProfile, setIsProfile] = useState<boolean>(false);
    const [isSegmento, setIsSegmento] = useState<boolean>(false); //segmentos



    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("sub-items");
                const getID = document.getElementById(id) as HTMLElement
                if (getID)
                    getID.classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Segmentos') {
            setIsSegmento(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'Clientes') { //Clientes
            setIsCliente(false);
        }
        if (iscurrentState !== 'Skills') { //Skills
            setIsSkills(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isSegmento,
        isPages,
        isCliente,
        isSkills,
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboard",
            icon: <FeatherIcon icon="home" className="icon-dual" />,
            link: "/#",
            stateVariables: isDashboard,
            click: function (e: any) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "demandas",
                    label: "Demandas",
                    link: "/dashboard-demandas",
                    parentId: "dashboard",
                },
            ],
        },
        {
            id: "clientes",
            label: "Clientes",
            icon: <FeatherIcon icon="briefcase" className="icon-dual" />,
            link: "/#",
            stateVariables: isCliente,
            click: function (e: any) {
                e.preventDefault();
                setIsCliente(!isCliente);
                setIscurrentState('Clientes');
                updateIconSidebar(e);
            },
            subItems: [
                { id: "clicad", label: "Cadastrar Cliente", link: "/cadastrar-cliente", parentId: "clientes" },
                { id: "clilist", label: "Listar Clientes", link: "/listar-clientes", parentId: "clientes" },
            ],
        },
        {
            id: "segmento",
            label: "Segmentos",
            icon: <FeatherIcon icon="package" className="icon-dual" />,
            link: "/#",
            stateVariables: isSegmento,
            click: function (e: any) {
                e.preventDefault();
                setIsSegmento(!isSegmento);
                setIscurrentState('Segmentos');
                updateIconSidebar(e);
            },
            subItems: [
                { id: "segcad", label: "Cadastrar Segmento", link: "/cadastrar-segmento", parentId: "segmento" },
                { id: "seglist", label: "Listar Segmentos", link: "/listar-segmentos", parentId: "segmento" },
            ],
        },
        {
            id: "skills",
            label: "Skills",
            icon: <FeatherIcon icon="zap" className="icon-dual" />,
            link: "/#",
            stateVariables: isSkills,
            click: function (e: any) {
                e.preventDefault();
                setIsSkills(!isSkills);
                setIscurrentState('Skills');
                updateIconSidebar(e);
            },
            subItems: [
                { id: "skillshardcad", label: "Cadastrar Soft Skills", link: "/cadastrar-soft", parentId: "skills" },
                { id: "skillssoftlist", label: "Cadastrar Hard Skills", link: "/cadastrar-hard", parentId: "skills" },
                { id: "listsoftcad", label: "Listar Soft Skills", link: "/listar-soft", parentId: "skills" },
                { id: "listshardlist", label: "Listar Hard Skills", link: "/listar-hard", parentId: "skills" },
            ],
        }
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;