import { useState } from "react"

export default function InsertionSortComponent() {
    const [array, setArray] = useState([11, 21, 31, 41, 51, 61, 7, 8, 9, 10]);
    
    function insertionSort(){
        for (let i = 1; i < array.length; i++) {
            for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
        setArray([...array]);
    }

    return (
        <div>
            Insertion Sort
            <ul>
                {
                    array.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div>
                <button onClick={() => insertionSort()}> Short Array</button>
            </div>
        </div>
    )
}