import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import * as templatesAPI from "../../utilities/templates-api";
import TemplateGenerator from "../../components/TemplateGenerator/TemplateGenerator";

export default function IndexPage({user, templates, setTemplates}) {

    const navigate = useNavigate();

    useEffect(function(){
        async function getTemplates(){
            const temps = await templatesAPI.getAll();
            setTemplates(temps);
        }
        getTemplates();
    },[]) 

    async function handleDelete(template){
        const templateId = template.template._id;
        const deletedTemplate = await templatesAPI.deleteTemplate(templateId);
        const newArray = templates.filter(template => deletedTemplate._id !== template._id)
        setTemplates(newArray);
    }


    const allTemplates = templates?.map(function(template, idx){
        return <div key={idx}>
            <TemplateGenerator user={template.user}template={template} key={idx} templates={templates} setTemplates={setTemplates} />
            </div>
    })

    

    return(
        <>
        <h1 className="pageTitle">Templates</h1>
        <div>{allTemplates}</div>
        </>
    );
}