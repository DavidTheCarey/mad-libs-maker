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
        if (user){
        getTemplates();
        getEntries();
        }
    }, []) 

    
    const userTemplates = user ? templates?.map(function(template, idx){
        if (template.user === user._id){
        return <TemplateGenerator user ={user}template={template} key={idx} templates={templates} setTemplates={setTemplates} />
        }
    }) : "";

    
    const userEntries = entries.map(function(entry, idx){
        if (user){
            if (entry.user === user._id){
                const newArr =[];
                for(let i=0; i < entry.answers.length; i++){
                  newArr.push(entry.answers[i].text);
                }
                return <EntryGenerator title={entry.template.title}entry={newArr} id={entry._id} key={idx} entries={entries} setEntries={setEntries}/>
                
            }
        } else {
            if(entry.user === null){
                const newArr =[];
                for(let i=0; i < entry.answers.length; i++){
                  newArr.push(entry.answers[i].text);
                }
                return <EntryGenerator title={entry.template.title}entry={newArr} id={entry._id} key={idx} entries={entries} setEntries={setEntries}/>
            }
        }
    })

    return(
        <>
        <h1 className="pageTitle">{user ? user.name: "Guest"}'s Page </h1>
        <h1> {user ? user.name : "Guest"}'s Templates </h1>
        <div>{ user ? userTemplates : "You need to sign in to create Templates!" }</div>
        <h1>{user ? user.name : "Guest"}'s Madlibs </h1>
        <div>{userEntries}</div>
        </>
    );
}