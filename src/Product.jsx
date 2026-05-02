import './App.css'
export default function Product({list}){
    console.log(list);
    
    return (
        <div className='common'>
            <h2>products library</h2>
            <h2> name : {list.name} </h2>
            <p>{list.price}</p>
            <p>{list.brand}</p>
        </div>
    )
}