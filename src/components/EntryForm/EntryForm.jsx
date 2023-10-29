import { useEffect, useState } from "react";
import * as entriesAPI from "../../utilities/entries-api"

export default function EntryForm({template, entries, setEntries}){

    const [current, setCurrent] = useState("");
    const [entry, setEntry] = useState({
        answers: template.body,
        template: template._id
    });

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
        try {
        const madlib = await entriesAPI.createEntry(entry);
        console.log(madlib);
        setEntries({...entries, madlib})
        console.log(entries);
        } catch {
            //
        }
    }

    return(
       <form onSubmit={handleSubmit}> 
            <div className="template">{ template ? template.body.map(function(item, idx){
                if (libList.find(function(lib){return item.type === "lib"})){
                return <div className="lib" key={idx} idx={idx} > <input placeholder={item.text} idx={idx} onChange={handleChange} /> </div>
                } else {
                return <div className="phrase" key={idx} idx={idx} > {item.text} </div>
                }
            }) : ""}</div> 
            <button>Submit</button>
            
        </form>
    )
}