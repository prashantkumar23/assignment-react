import Test from "./Test";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useAction";
import { AppState } from "./state/reducers/data";

const App: React.FC = () => {
  const stateValue: AppState = useTypedSelector(({ state }) => state);
  console.log("State", stateValue);
  const { Add, Subtract, Divison, Multiply } = useActions();
  return (
    <Router>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.5fr 2fr",
        }}
      >
        <div style={{ backgroundColor: "gainsboro", minHeight: "95vh" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Link to="/add">
              <button>Add</button>
            </Link>
            <Link to="/subtract">
              <button>Subtract</button>
            </Link>
            <Link to="/multiply">
              <button>Multiply</button>
            </Link>
            <Link to="/divison">
              <button>Division</button>
            </Link>
          </div>
        </div>
        <div style={{ backgroundColor: "goldenrod" }}>
          <Routes>
            <Route
              path="/add"
              element={
                <Test
                  buttonText="Add"
                  description="Add"
                  totalValue={stateValue.totalValue}
                  Func={Add}
                />
              }
            />

            <Route
              path="/subtract"
              element={
                <Test
                  buttonText="Subtract"
                  description="Subtract"
                  totalValue={stateValue.totalValue}
                  Func={Subtract}
                />
              }
            />

            <Route
              path="/divison"
              element={
                <Test
                  buttonText="Division"
                  description="Division"
                  totalValue={stateValue.totalValue}
                  Func={Divison}
                />
              }
            />

            <Route
              path="/multiply"
              element={
                <Test
                  buttonText="Multiply"
                  description="Multiply"
                  totalValue={stateValue.totalValue}
                  Func={Multiply}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
