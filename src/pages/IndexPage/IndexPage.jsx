import { useEffect } from "react";
import * as templatesAPI from "../../utilities/templates-api";
import TemplateGenerator from "../../components/TemplateGenerator/TemplateGenerator";

export default function IndexPage({templates, setTemplates}) {

    useEffect(function(){
        async function getTemplates(){
            const temps = await templatesAPI.getAll();
            setTemplates(temps);
        }
        getTemplates();
    }, []) 

    async function handleDelete(template){
        const temps = await templatesAPI.deleteTemplate(template._id);
        setTemplates(temps);
    }


    const allTemplates = templates.map(function(template, idx){
        // return <TemplateGenerator body={template} key={idx} />
        return <div>
            <div>{template.phrases[0]}</div>
            <button onClick={() => {handleDelete({template})}}>X</button>
            </div>// temporary code
    })

    

    return(
        <div>{allTemplates}</div>
    );
}