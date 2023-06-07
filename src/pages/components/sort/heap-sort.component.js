import { useState } from "react";

export default function HeapSortComponent() {
    const [array, setArray] = useState([11, 21, 31, 41, 51, 61, 7, 8, 9, 10]);

    function heapSort() {
        let heap = [];
        for (let i = array.length - 1; i >= 0; i--) {
            heap.push(array[i]);
        }
        for (let i = array.length - 1; i > 0; i--) {
            let temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            heapify(0, i);
        }
        setArray([...array]);
    }
    function heapify(i, length) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;
        if (left < length && array[left] > array[largest]) {
            largest = left;
        }
        if (right < length && array[right] > array[largest]) {
            largest = right;
        }
        if (largest!== i) {
            let temp = array[i];
            array[i] = array[largest];
            array[largest] = temp;
            heapify(largest, length);
        }
    }
    return (
        <div>
            Heap Sort
            <ul>
                {
                    array.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div>
                <button onClick={() => heapSort()}> Short Array</button>
            </div>
        </div>
    )
}