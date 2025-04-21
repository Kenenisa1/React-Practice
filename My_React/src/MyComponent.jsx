import React,{useState} from 'react'

function MyComponent (){
    const [cars, setCars] =useState([]);
    const [carYear, setCarYear]= useState(new Date().getFullYear());
    const [carName,setCarName]= useState("");

    function handleAddCar() 
    {
        const newCar= {
            year:carYear, 
            name: carName
        }
        setCars(c=> [...c,newCar])
        setCarYear(new Date().getFullYear());
        setCarName("");
    }
    function handleYear(ind)
    {
        setCarYear(ind.target.value)
    }
    function handleCarName(ind)
    {
        setCarName(ind.target.value)
    }

    return(
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car,index) =>
                    <li key={index}>
                        {car.name} {car.year}
                    </li>
                )}
            </ul>
            <input type="number"  value={carYear} onChange={handleYear}/>
            <input type="text" value={carName} onChange={handleCarName} placeholder='Enter a car name'/> <br/>  
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
} 

export default MyComponent