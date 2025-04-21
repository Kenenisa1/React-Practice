import React, { useState } from 'react';
import './index.css'

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carName, setCarName] = useState('');

    function handleAddCar() {
        const newCar = {
            year: carYear,
            name: carName,
        };
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarName('');
    }

    function handleYear(ind) {
        setCarYear(ind.target.value);
    }

    function handleCarName(ind) {
        setCarName(ind.target.value);
    }

    return (
        <div className="my-component-container">
            <h2 className="car-list-heading">List of Cars</h2>
            <ul className="car-list">
                {cars.map((car, index) => (
                    <li key={index} className="car-list-item">
                        <span className="car-name">{car.name}</span> <span className="car-year">{car.year}</span>
                    </li>
                ))}
            </ul>
            <div className="input-group">
                <input
                    type="number"
                    value={carYear}
                    onChange={handleYear}
                    className="year-input"
                />
                <input
                    type="text"
                    value={carName}
                    onChange={handleCarName}
                    placeholder="Enter a car name"
                    className="name-input"
                />
                <button onClick={handleAddCar} className="add-button">Add Car</button>
            </div>
        </div>
    );
}

export default MyComponent;