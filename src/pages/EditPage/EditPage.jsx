import { useLocation } from "react-router-dom";
import './EditPage.css';
import TemplateEditForm from "../../components/TemplateEditForm.jsx/TemplateEditForm";

export default function EditPage({templates, setTemplates}) {
    let { state } = useLocation();

    return(
        <TemplateEditForm template={state} templates={templates} setTemplates={setTemplates}/>
    );
}