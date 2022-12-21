import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbars from "./Component/Navbars/Navbars";
import routes from "./routes";
import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          {routes.map(({ name, path, Component }) => (
            <Route
              path={path}
              key={`${path}-${name}`}
              element={
                <>
                  <Suspense>
                    <Component />
                  </Suspense>
                </>
              }
            ></Route>
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
