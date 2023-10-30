import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as templatesAPI from "../../utilities/templates-api";

export default function TemplateEditForm({template, templates, setTemplates}){
    const [changes, setChanges] = useState(template.body);
    const [current, setCurrent] = useState("");

    const navigate = useNavigate();

    const libList = ["noun", "adjective", "verb",
    "adverb", "exclamation", "pronoun", "plural noun",
    "number", "article of clothing", "part of body",
    "a city", "person", "shape", "food",
    "emotion", "game",]

    function handleChange(evt){
        const index = evt.target.getAttribute("idx")
        const newArray = changes;
        newArray[index].text = evt.target.value;
        setChanges(newArray);
        setCurrent(evt.target.value);
    }

    async function handleSubmit(evt){
        evt.preventDefault();

        try{
            const changedTemplate = await templatesAPI.editTemplate(template, template._id);
            const updatedTemplateList = templates.map(template => changedTemplate._id === template._id ? changedTemplate : template);
            setTemplates(updatedTemplateList)
            navigate(`/madlibs/${template.user}`)
        } catch {
          console.log("Failed");
        }
    }


    return (
        <form  autoComplete="off" onSubmit={handleSubmit}>
        <div className="template">{ changes.map(function(item, idx){
            
            if (libList.find(function(lib){return item.type === "lib"})){
            return <select name="libsSelect" onChange={handleChange} placeholder={item.text} value={item.text} key={idx} idx={idx}>
                        <option value="noun">Noun</option>
                        <option value="adjective">Adjective</option>
                        <option value="verb">Verb</option>
                        <option value="adverb">Adverb</option>
                        <option value="exclamation">Exclamation</option>
                        <option value="pronoun">Pronoun</option>
                        <option value="plural noun">Plural Noun</option>
                        <option value="number">Number</option>
                        <option value="article of clothing">Article Of Clothing</option>
                        <option value="part of body">Part Of Body</option>
                        <option value="a city">A City</option>
                        <option value="person">Person</option>
                        <option value="shape">Shape</option>
                        <option value="food">Food</option>
                        <option value="emotion">Emotion</option>
                        <option value="game">Game</option>
                    </select>
            } else {
            return <input className="phrase"  onChange={handleChange} key={idx}  placeholder={item.text} value={item.text} idx={idx}/>
        }
        }
        )}</div>
        <div className="createTemplate">
            <button>Save Changes</button>
        </div>
        </form>
    );
}