import { useState } from "react";

export default function MergeSortComponent() {
    const [array, setArray] = useState([11, 21, 31, 41, 51, 61, 7, 8, 9, 10]);
    
    function mergeSort(array) {
        if (array.length <= 1) {
            return array;
        }
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        console.log(left, right);
        const sortedArray =  merge(mergeSort(left), mergeSort(right));
        
        setArray([...sortedArray]);
        return sortedArray;
    }

    function merge(left, right) {
        const result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }
        return result;
    }

    return (
        <div>
            Merge Sort
            <ul>
                {
                    array.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div>
                <button onClick={() => mergeSort(array)}> Short Array</button>
            </div>
        </div>
    )
}