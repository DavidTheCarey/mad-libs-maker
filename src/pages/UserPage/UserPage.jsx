import { useEffect } from "react";
import { Link } from "react-router-dom";
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


    const userTemplates = templates?.map(function(template, idx){
        if (template.user === user._id){
        return <>
        <TemplateGenerator user ={user}template={template} key={idx} templates={templates} setTemplates={setTemplates} />
        </>
        }
    })

    const userEntries = entries.map(function(entry, idx){
        if (entry.user === user._id){
            const newArr =[];
            for(let i=0; i < entry.answers.length; i++){
              newArr.push(entry.answers[i].text);
            }
            return <div key={idx}>
                <EntryGenerator title={entry.template.title}entry={newArr} id={entry._id} key={idx} entries={entries} setEntries={setEntries}/>
            </div>
        }
    })

    return(
        <>
        <h1 className="pageTitle">{user.name}'s Page </h1>
        <h1> {user.name}'s Templates </h1>
        <div>{  userTemplates }</div>
        <h1>{user.name}'s Madlibs </h1>
        <div>{userEntries}</div>
        </>
    );
}