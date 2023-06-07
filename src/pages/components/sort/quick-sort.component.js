import { useState } from "react";

export default function QuickSortComponent() {
    const [array, setArray] = useState([11, 21, 31, 41, 51, 61, 7, 8, 9, 10]);
    
    const quickSort = () => {
        quickSortHelper(array, 0, array.length - 1);
        setArray([...array]);
    }

    const quickSortHelper = (array, left, right) => {
        if (left < right) {
            const pivotIndex = partition(array, left, right);
            quickSortHelper(array, left, pivotIndex - 1);
            quickSortHelper(array, pivotIndex + 1, right);
        }
    }
    
    const partition = (array, left, right) => {
        const pivot = array[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (array[j] <= pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        [array[i + 1], array[right]] = [array[right], array[i + 1]];
        return i + 1;
    }

    return (
        <div>
            Quick Sort
            <ul>
                {
                    array.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div>
                <button onClick={() => quickSort()}> Short Array</button>
            </div>
        </div>
    )
}