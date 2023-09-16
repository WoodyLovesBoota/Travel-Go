import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import City from "./Routes/City";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/:destination" element={<City />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
