import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateGenerator from "../TemplateGenerator/TemplateGenerator";
import { createTemplate } from "../../utilities/templates-api";

export default function TemplateForm ({ user, templates,setTemplates }){
    const [buttonPressed, setButtonPressed] = useState(0);
    const [phrase, setPhrase] = useState("");
    const [lib, setLib] = useState("");
    const [templateData, setTemplateData] = useState({
        body: [],
        title: ""
      });

    const navigate = useNavigate();

    function handleButtonClick(val) {
      setButtonPressed(val);
    }
    function handleChange (evt){
      if (evt.target.name === "phrases"){
        setPhrase(evt.target.value)
      } else if (evt.target.name === "libs"){
        setLib(evt.target.value)
      } else if (evt.target.name === "title"){
        setTemplateData({...templateData, title: evt.target.value})
      }
 
    }
    function handleNewInput(evt) {
      const newArray = templateData[evt.target.name];
      const newBody = templateData.body;
      newBody.push(evt.target.name === "phrases" ? {text: phrase, type: "phrase"} : {text: lib, type: "lib"})
      setTemplateData({...templateData, [evt.target.name]: newArray, body: newBody});
      setButtonPressed(0);
    }
    async function handleSubmit(evt){
      evt.preventDefault();
      try{
        const template = await createTemplate(templateData);
        navigate("/madlibs");
        setTemplates({...templates, template});
      } catch {
        //
      }
    }
    return (
      <div>
        <TemplateGenerator template={templateData} user={user} templates={templates} setTemplates={setTemplates} done={false}/>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="titleContainer">
            <input className="titleInput" placeholder="Write Title Here" name="title" onChange={handleChange}></input>
          </div>
          { buttonPressed ? 
          <>
          { buttonPressed === 1 ?
          <div className="inputContainer">
          <input className="phrasesInput" name="phrases" type="text" onChange={handleChange} placeholder="Write text here..."></input>
          <button className="submitInput" name="phrases" type="button" onClick={handleNewInput}>✔</button>
          </div>
          :
          <div className="inputContainer">
          <select name="libs" onChange={handleChange}>
              <option>---</option>
              <option value="noun">Noun</option>
              <option value="adjective">Adjective</option>
              <option value="verb">Verb</option>
              <option value="adverb">Adverb</option>
              <option value="exclamation">Exclamation</option>
              <option value="pronoun">Pronoun</option>
              <option value="plural noun">Plural Noun</option>
              <option value="number">Number</option>
              <option value="article of clothing">Article Of Clothing</option>
              <option value="part of body">Part Of Body</option>
              <option value="a city">A City</option>
              <option value="person">Person</option>
              <option value="shape">Shape</option>
              <option value="food">Food</option>
              <option value="emotion">Emotion</option>
              <option value="game">Game</option>
          </select>
          <button className="submitInput" name="libs" type="button" onClick={handleNewInput}>✔</button>
          </div>
          } 
          </>
          : 
          <div className="addContainer">
          <button className="textButton" type="button" onClick={() => {handleButtonClick(1)}}>+ Text</button>
          <button className="libButton" type="button" onClick={() => {handleButtonClick(-1)}}>+ Lib</button>
          </div>
          } 
          <div className="createTemplate">
            <button>Create Template</button>
          </div>
        </form>
      </div>
    </div>
    );

}