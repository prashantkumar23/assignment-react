import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useAction";
import { AppState } from "./state/reducers/data";
import Calculate from "./components/Calculate";
import { loadTheme } from "./utils/ThemeParser";

// Edit these to change the theme or use env file
// Argu: "DEFAULT" "COMPANYA" "COMPANYB"
const companyName =
  process.env.REACT_APP_COMPANY_NAME === undefined
    ? "DEFAULT"
    : process.env.REACT_APP_COMPANY_NAME;
const theme = loadTheme(companyName);

const App: React.FC = () => {
  const stateValue: AppState = useTypedSelector(({ state }) => state);
  const { Add, Subtract, Divison, Multiply } = useActions();

  return (
    <Router>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.5fr 2fr",
        }}
      >
        <div
          style={{
            backgroundColor: theme.backgroundColor,
            minHeight: "95vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
              rowGap: 15,
            }}
          >
            {/* Theme Applied */}
            <h3>{theme.name}</h3>
            <img src={theme.logo} alt={theme.name} />
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
        {/* Theme Applied */}
        <div style={{ backgroundColor: theme.backgroundColor }}>
          <Routes>
            <Route
              path="/"
              element={
                <h1 style={{ textAlign: "center" }}>Basic Calculator</h1>
              }
            />
            <Route
              path="/add"
              element={
                <Calculate
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
                <Calculate
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
                <Calculate
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
                <Calculate
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
