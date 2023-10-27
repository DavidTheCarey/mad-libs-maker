import './CreatePage.css';
import TemplateForm from "../../components/TemplateForm/TemplateForm";

export default function CreatePage({ user, template=null }) {
    return(
        <>
        <div>{template}</div>
        <TemplateForm user={user}/>
        </>
    );
}