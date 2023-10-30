import * as entriesAPI from "../../utilities/entries-api";

export default function EntryGenerator({ entry, title, entries, setEntries, id }){
    const body = entry.map(function(answer, idx){
        return <div className="phrase"key={idx}> {answer} </div>
    })

    async function handleDelete({ entry }){
        const entryId = id;
        const deletedEntry = await entriesAPI.deleteEntry(entryId);
        const newArray = entries.filter(entry => entry._id !== deletedEntry._id)
        setEntries(newArray);
    }

    return (
        <>
        <div className="entry">
            <h3>{title ? title : "Untitled"}</h3>
            { body }
            </div>
            <div className="entryButton" onClick={() => {handleDelete({entry})}}>Delete</div>
            </>
    )
}