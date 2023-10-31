import { useEffect } from "react";
import * as templatesAPI from "../../utilities/templates-api";
import TemplateGenerator from "../../components/TemplateGenerator/TemplateGenerator";

export default function IndexPage({user, templates, setTemplates}) {


    useEffect(function(){
        async function getTemplates(){
            const temps = await templatesAPI.getAll();
            setTemplates(temps);
        }
        getTemplates();
    },[]) 

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