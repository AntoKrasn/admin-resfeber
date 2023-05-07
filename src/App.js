import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Newplace from "./pages/place/newplace/Newplace";
import Place from "./pages/place/Place";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { placeInputs, userInputs, } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Opportunity from "./pages/opportunity/Opportunity";
import Placeinfo from "./pages/place/placeinfo/Placeinfo";
import Excursion from "./pages/excursion/Excursion";
import Excursioninfo from "./pages/excursion/excursioninfo/excursioninfo";
import Newexcursion from "./pages/excursion/newexcursion/newexcursion";
import Opportunityinfo from "./pages/opportunity/opportunityinfo/opportunityinfo";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Добавить пользователя" />}
              />
            </Route>

            <Route path="excursion">
              <Route index element={<Excursion />} />
              <Route path=":excursionId" element={<Excursioninfo />} />
              <Route
                path="newexcursion"
                element={<Newexcursion inputs={placeInputs} title="Добавить новую экскурсию" />}
              />
            </Route>

            <Route path="opportunity">
              <Route index element={<Opportunity />} />
              <Route path=":opportunityId" element={<Opportunityinfo />} />
             </Route>

            <Route path="places">
              <Route index element={<Place />} />
              <Route path=":placeId" element={<Placeinfo />} />
              <Route
                path="newplace"
                element={<Newplace inputs={placeInputs} title="Добавить новое место" />}
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
