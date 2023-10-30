import './CreatePage.css';
import TemplateForm from "../../components/TemplateForm/TemplateForm";

export default function CreatePage({ user, template=null }) {
    return(
        <>
        <h1 className="pageTitle">Create a Template</h1>
        <div>{template}</div>
        <TemplateForm user={user}/>
        </>
    );
}