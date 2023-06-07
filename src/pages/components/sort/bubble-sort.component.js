import { useState } from "react";

export default function BubbleSortComponent() {
    const [array, setArray] = useState([11, 21, 31, 41, 51, 61, 7, 8, 9, 10]);

    function bubbleSort() {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
                setArray([...array]);
            }
        };
    }

    return (
        <div>
            <h4>Bubble Sort Algorithm</h4>
            <ul>
                {
                    array.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div>
                <button onClick={() => bubbleSort()}> Short Array</button>
            </div>
        </div>
    );
}
