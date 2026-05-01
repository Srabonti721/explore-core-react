// export default function ToDo ({name, isDown}){
//     return(
//         <li>task: {name}</li>
//     )
// }

export default function ToDo ({name, isDown, time = 0}){
if(isDown === true){
    return <li className="shared">Done : {name} duration: {time}</li>
}
else{
    return <li className="student"> Not Done : {name} duration : {time}</li>
}
} 



