import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as entriesAPI from "../../utilities/entries-api"

export default function EntryForm({template, entries, setEntries, user=null}){

    const [current, setCurrent] = useState("");
    const [entry, setEntry] = useState({
        answers: template.body,
        template: template
    });

    const navigate = useNavigate();

    const libList = ["noun", "adjective", "verb",
    "adverb", "exclamation", "pronoun", "plural noun",
    "number", "article of clothing", "part of body",
    "a city", "person", "shape", "food",
    "emotion", "game",]


    function handleChange(evt){
        evt.preventDefault();
        const index = evt.target.getAttribute("idx")
        const newObj = entry;
        newObj.answers[index].text = evt.target.value;
        setEntry(newObj);
        setCurrent(evt.target.value);

    }

    async function handleSubmit(evt){
        evt.preventDefault();
        if (user){
            try {
            const madlib = await entriesAPI.createEntry(entry);
            setEntries([...entries, madlib])
            navigate(`/madlibs/${madlib.user}`)
            } catch {
                //
            }
        } else {
            entry.user = null;
            setEntries([...entries, entry])
            navigate(`/madlibs/guest`);
        }
    }

    return(
       <form onSubmit={handleSubmit}> 
            <div className="template">
            <h3>{template.title ? template.title : "Untitled"}</h3>
                { template ? template.body.map(function(item, idx){
                if (libList.find(function(lib){return item.type === "lib"})){
                return <div className="lib" key={idx} idx={idx} > <input placeholder={item.text} idx={idx} onChange={handleChange} /> </div>
                } else {
                return <div className="phrase" key={idx} idx={idx} > {item.text} </div>
                }
                }) : ""}</div> 
            <div className="createTemplate">
                <button>Create Madlib</button>
            </div>
            
        </form>
    )
}