import { useEffect } from "react";
import { Link } from 'react-router-dom';
import * as templatesAPI from "../../utilities/templates-api";
import TemplateGenerator from "../../components/TemplateGenerator/TemplateGenerator";

export default function IndexPage({user, templates, setTemplates}) {

    useEffect(function(){
        async function getTemplates(){
            const temps = await templatesAPI.getAll();
            setTemplates(temps);
        }
        getTemplates();
    }, []) 

    async function handleDelete(template){
        const templateId = template.template._id;
        const temps = await templatesAPI.deleteTemplate(templateId);
        setTemplates(temps);
    }


    const allTemplates = templates.map(function(template, idx){
        return <div>
            <TemplateGenerator template={template} key={idx} />
            {user._id === template.user && <>
            <button onClick={() => {handleDelete({template})}}>X</button>
            <Link to="/madlibs/edit" state={template}>Edit</Link>
            </>
            }
            </div>
    })

    

    return(
        <>
        <div>{allTemplates}</div>
        </>
    );
}