import { useState } from "react";
import TemplateGenerator from "../TemplateGenerator/TemplateGenerator";
import { createTemplate } from "../../utilities/templates-api";

export default function TemplateForm ({ user, templates,setTemplates }){
    const [buttonPressed, setButtonPressed] = useState(0);
    const [phrase, setPhrase] = useState("");
    const [lib, setLib] = useState("");
    const [templateData, setTemplateData] = useState({
        phrases: [],
        libs: [],
        body: []
      });

      function handleButtonClick(val) {
        setButtonPressed(val);
      }

      function handleChange (evt){
        evt.target.name === "phrases" ?
        setPhrase(evt.target.value)
        :
        setLib(evt.target.value)
      }

      function handleNewInput(evt) {
        const newArray = templateData[evt.target.name];
        const newBody = templateData.body;
        newArray.push(evt.target.name === "phrases" ? phrase : lib)
        newBody.push(evt.target.name === "phrases" ? phrase : lib)
        setTemplateData({...templateData, [evt.target.name]: newArray, body: newBody});
        setButtonPressed(0);
      }

      async function handleSubmit(evt){
        evt.preventDefault();

        try{
          const template = await createTemplate(templateData);
          setTemplates({...templates, template});
        } catch {
          //
        }

      }

      return (
        <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            { buttonPressed ? 
            <>
            { buttonPressed === 1 ?
            <>
            <input name="phrases" type="text" onChange={handleChange}></input>
            <button name="phrases" type="button" onClick={handleNewInput}>Check Mark</button>
            </>
            :
            <>
            <select name="libs" onChange={handleChange}>
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
            <button name="libs" type="button" onClick={handleNewInput}>Check Mark</button>
            </>
            } 
            </>
            : 
            <>
            <button type="button" onClick={() => {handleButtonClick(1)}}>+ Text</button>
            <button type="button" onClick={() => {handleButtonClick(-1)}}>+ Lib</button>
            </>
            } 
            <button>Create Template</button>
          </form>
        </div>
        <TemplateGenerator template={templateData}/>
        {/* <p className="error-message">&nbsp;{error}</p> */}
      </div>
      );

}