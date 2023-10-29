export default function TemplateGenerator({ template=null }){
    const libList = ["noun", "adjective", "verb",
    "adverb", "exclamation", "pronoun", "plural noun",
    "number", "article of clothing", "part of body",
    "a city", "person", "shape", "food",
    "emotion", "game",]


    return (
        <div className="template">{ template ? template.body.map(function(item, idx){
                if (libList.find(function(lib){return item.text === lib})){
                return <div className="lib" key={idx}> {item.text} </div>
                } else {
                return <div className="phrase" key={idx}> {item.text} </div>
                }
        }) : ""}</div>
    );
}