import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <AddTask />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListTask />} />

            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
