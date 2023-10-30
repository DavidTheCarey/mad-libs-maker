import { Link } from "react-router-dom";
import * as templatesAPI from "../../utilities/templates-api";

export default function TemplateGenerator({ template=null, user, templates, setTemplates, done=true }){
    const libList = ["noun", "adjective", "verb",
    "adverb", "exclamation", "pronoun", "plural noun",
    "number", "article of clothing", "part of body",
    "a city", "person", "shape", "food",
    "emotion", "game",]

    async function handleTemplateDelete(template){
        const templateId = template.template._id;
        const deletedTemplate = await templatesAPI.deleteTemplate(templateId);
        const newArray = templates.filter(template => deletedTemplate._id !== template._id)
        setTemplates(newArray);
    }



    return (
        <div className="templateContainer">
            <div className="template">
                <h3>{template.title ? template.title : "Untitled"}</h3>
                { template ? template.body.map(function(item, idx){
                    if (libList.find(function(lib){return item.text === lib})){
                    return <div className="lib" key={idx}> {item.text} </div>
                    } else {
                    return <div className="phrase" key={idx}> {item.text} </div>
                    }
                }) : ""}
            </div>
            {done && 
            <div className="buttonContainer" >
                <Link  to="/madlibs/entry/new" className="createLink" state={template}>Create a Madlib with this template</Link> 
                { user._id === template.user &&
                <>
                <Link to="/madlibs/edit" className="editLink" state={template}>Edit</Link>
                <div className="deleteButton" onClick={() => {handleTemplateDelete({template})}}>Delete</div>
                </>
                }
            </div>
            }
        </div>
    );
}