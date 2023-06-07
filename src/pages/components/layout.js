import { Outlet, Link } from "react-router-dom";
export default function Layout() {
    return (
        <div className='main-container'>
            <header>
                <h1>Data Strcuture And Algorithm</h1>
                <nav>
                    <ul>
                        <li>Sorting Algorithm
                            <ul>
                                <li><Link to="/bubblesort">Bubble Sort</Link></li>
                                <li><Link to="/heapsort">Heap Sort</Link></li>
                                <li><Link to="/insertionSort">Insertion Sort</Link></li>
                                <li><Link to="/mergeSort">Merge Sort</Link></li>
                                <li><Link to="/quickSort">Quick Sort</Link></li>
                                <li><Link to="/selectionSort">Selection Sort</Link></li>
                            </ul>
                        </li>
                        <li>Searching Algorithm
                            <ul>
                                <li><Link to="/">Binary Search</Link></li>
                                <li><Link to="/">Depth First Search</Link></li>
                                <li><Link to="/">Breadth First Search</Link></li>
                            </ul>
                        </li>
                        <li>Problem & Solution</li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div >
    );
}