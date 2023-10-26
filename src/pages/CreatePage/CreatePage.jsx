import './CreatePage.css';
import TemplateForm from "../../components/TemplateForm/TemplateForm";

export default function CreatePage({ user }) {
    return(
        <TemplateForm user={user}/>
    );
}