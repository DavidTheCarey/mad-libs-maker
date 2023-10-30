import { useLocation } from "react-router-dom";
import './EntryPage.css';
import EntryForm from "../../components/EntryForm/EntryForm";

export default function EntryPage({ entries, setEntries }) {
    let { state } = useLocation();
    return(
        <>
            <h1 className="pageTitle">Create a Madlib</h1>
            <EntryForm template={state} entries={entries} setEntries={setEntries}/>
        </>
    );
}