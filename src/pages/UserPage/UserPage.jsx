import { useEffect } from "react";
import * as templatesAPI from "../../utilities/templates-api"
import * as entriesAPI from "../../utilities/entries-api"
import TemplateGenerator from "../../components/TemplateGenerator/TemplateGenerator";
import EntryGenerator from "../../components/EntryGenerator/EntryGenerator";
export default function UserPage({ user, templates, setTemplates, entries, setEntries }) {

    useEffect(function(){
        async function getTemplates(){
            const temps = await templatesAPI.getAll();
            setTemplates(temps);
        }
        async function getEntries(){
            const allEntries = await entriesAPI.getAll();
            setEntries(allEntries);
        }
        getTemplates();
        getEntries();
    }, []) 

    async function handleEntryDelete({ entry }){
        const entryId = entry._id;
        const changedEntries = await entriesAPI.deleteEntry(entryId);
        setEntries(changedEntries);
    }

    const userTemplates = templates.map(function(template, idx){
        if (template.user === user._id){
        return <TemplateGenerator template={template} key={idx} />
        }
    })

    const userEntries = entries.map(function(entry, idx){
        if (entry.user === user._id){
            const newArr =[];
            for(let i=0; i < entry.answers.length; i++){
              newArr.push(entry.answers[i].text);
            }
            return <div key={idx}>
            <EntryGenerator entry={newArr} key={idx}/>
            <button onClick={() => {handleEntryDelete({entry})}}>X</button>
            </div>
        }
    })

    return(
        <>
        <h1>{user.name}'s Page </h1>
        <h2> {user.name}'s Templates </h2>
        <div>{  userTemplates }</div>
        <h2>{user.name}'s Madlibs </h2>
        <div>{userEntries}</div>
        </>
    );
}