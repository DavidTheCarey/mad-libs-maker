export default function TemplateGenerator({ template=null, mode="new" }){
    const libList = ["noun", "adjective", "verb",
    "adverb", "exclamation", "pronoun", "plural noun",
    "number", "article of clothing", "part of body",
    "a city", "person", "shape", "food",
    "emotion", "game",]


    return (
        <div className="template">{ template ? template.body.map(function(item, idx){
            if (mode === "new"){
                if (libList.find(function(lib){return item === lib})){
                return <div className="lib" key={idx}> {item} </div>
                } else {
                return <div className="phrase" key={idx}> {item} </div>
                }
            } else if (mode === "edit"){
                if (libList.find(function(lib){return item === lib})){
                return <select name="libsSelect" placeholder={item} value={item}>
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
                } else {
                return <input className="phrase" key={idx}  placeholder={item} value={item}/>
                }
            }
        }) : ""}</div>
    );
}