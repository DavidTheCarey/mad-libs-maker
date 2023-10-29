export default function EntryGenerator({ entry }){
    const body = entry.map(function(answer, idx){
        return <div key={idx}> {answer} </div>
    })
    return (
        <div>{ body }</div>
    )
}