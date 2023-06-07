import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/components/layout';
import BubbleSortComponent from './pages/components/sort/bubble-sort.component';
import HeapSortComponent from './pages/components/sort/heap-sort.component';
import SelectionSortComponent from './pages/components/sort/selection-sort.component';
import QuickSortComponent from './pages/components/sort/quick-sort.component';
import MergeSortComponent from './pages/components/sort/merge-sort.component';
import InsertionSortComponent from './pages/components/sort/insertion-sort.component';
import NotFound from './pages/notfound';

function App() {
  return (

    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="bubbleSort" element={<BubbleSortComponent />} />
          <Route path="heapSort" element={<HeapSortComponent />} />
          <Route path="insertionSort" element={<InsertionSortComponent />} />
          <Route path="mergeSort" element={<MergeSortComponent />} />
          <Route path="quickSort" element={<QuickSortComponent />} />
          <Route path="selectionSort" element={<SelectionSortComponent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >

    </>
  );
}

export default App;
