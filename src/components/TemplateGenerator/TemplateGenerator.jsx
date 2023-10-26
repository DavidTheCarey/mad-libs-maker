export default function TemplateGenerator({ body }){
    const libList = ["noun", "adjective", "verb",
    "adverb", "exclamation", "pronoun", "plural noun",
    "number", "article of clothing", "part of body",
    "a city", "person", "shape", "food",
    "emotion", "game",]

    
    const bodyItems = body.map(function(item, idx){
        if (libList.find(function(lib){return item === lib})){
        return <div className="lib" key={idx}> {item} </div>
        } else {
        return <div className="phrase" key={idx}> {item} </div>
        }
    })



    return (
        <div className="template">{ bodyItems}</div>
    );
}