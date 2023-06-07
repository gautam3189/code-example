import { useState } from "react";

export default function SelectionSortComponent() {
    const [array, setArray] = useState([11, 21, 31, 41, 51, 61, 7, 8, 9, 10]);
    
    const selectionSort = () => {
        array.sort((a, b) => a - b);
        setArray([...array]);
    }
    return (
        <div>
            Selection Sort
            <ul>
                {
                    array.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div>
                <button onClick={() => selectionSort()}> Short Array</button>
            </div>
        </div>
    )
}