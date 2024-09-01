import "./App.css";
import Login from "./component/login";
import { Provider } from "react-redux";
import store from "./store/masterStore/mainStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import AddKaryakars from "./component/addKaryakars";
import AddEmceePoints from "./component/addEmceePoints";
import AddPrasang from "./component/addPrasang";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Jay Swaminarayan</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add-karyakars" element={<AddKaryakars />} />
            <Route path="/add-emcee-points" element={<AddEmceePoints />} />
            <Route path="/add-prasang" element={<AddPrasang />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
