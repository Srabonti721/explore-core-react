
import "./App.css"
export default function Singer ({singer}){
    return (
        <div className="singer">
           <h2> name : {singer.name}</h2>
           <h3> age : {singer.age}</h3>
           <p>song : {singer.fevSong} </p>
        </div>
    )
}