import { useLocation } from "react-router-dom";
import EntryForm from "../../components/EntryForm/EntryForm";

export default function EntryPage({ entries, setEntries }) {
    let { state } = useLocation();
    return(
        <EntryForm template={state} entries={entries} setEntries={setEntries}/>
    );
}