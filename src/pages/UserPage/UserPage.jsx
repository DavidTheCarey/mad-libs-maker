import { useEffect } from "react";
import * as templatesAPI from "../../utilities/templates-api"
import TemplateGenerator from "../../components/TemplateGenerator/TemplateGenerator";
export default function UserPage({ user, templates, setTemplates }) {

    useEffect(function(){
        async function getTemplates(){
            const temps = await templatesAPI.getAll();
            setTemplates(temps);
        }
        getTemplates();
    }, []) 

    const userTemplates = templates.map(function(template, idx){
        if (template.user === user._id){
        return <TemplateGenerator template={template} key={idx} />
        }
    })

    return(
        <>
        <h1>{user.name}'s Page </h1>
        <h2> {user.name}'s Templates </h2>
        <div>{  userTemplates }</div>
        </>
    );
}