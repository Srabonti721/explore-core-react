// export default function ToDo ({name, isDown}){
//     return(
//         <li>task: {name}</li>
//     )
// }

// conditional rendering - 1: if else
// export default function ToDo ({name, isDown, time = 0}){
// if(isDown === true){
//     return <li className="shared">Done : {name} duration: {time}</li>
// }
// else{
//     return <li className="student"> Not Done : {name} duration : {time}</li>
// }
// }

// conditional rendering - 2: if 
// export default function ToDo ({name, isDown, time}){
//     if(isDown === true){
//         return <li className="shared">Done : {name} duration: {time}</li>
//     }
//     return <li className="student"> not down : {name} duration : {time}</li>
// }

// conditional rendering - 3: ternary operator
// export default function ToDo ({name, isDown, time}){
//     return isDown === true? <li className="shared">Done : {name} duration: {time}</li>: <li className="student"> not down : {name} duration : {time}</li>
// }

// conditional rendering - 4 : &&
// export default function ToDo ({name, isDown, time}){
//     return isDown && <li className="shared">Done : {name} duration: {time}</li>
// }

// conditional rendering - 5: ||
// export default function ToDo ({name, isDown, time}){
// return isDown || <li className=" student">not down : {name}, duration : {time}</li>
// }

// conditional rendering - 6: variable
export default function ToDo ({name, isDown , time}){
    // if(isDown=== true){
    //     return null;
    // }
    // return <li className=" student">not down : {name}, duration : {time}</li>

    let listItem ;
    if(isDown){
        listItem = <li className="student">done : {name}, duration : {time}</li>
    }
    else{
        listItem = <li className="student">not down : {name}, duration : {time}</li>
    }
    return listItem;
}
