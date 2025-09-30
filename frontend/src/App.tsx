import Header from "./components/Header.tsx";

import Profil from "./header-components-pages/Profil.tsx";
import Favoriten from "./header-components-pages/Favoriten.tsx";
import Warenkorb from "./header-components-pages/Warenkorb.tsx";
import { Routes, Route } from "react-router-dom";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
              <Route path = "/profil" element = {<Profil />}/>
              <Route path= "/favoriten" element = {<Favoriten />}/>
              <Route path= "/warenkorb" element = {<Warenkorb />}/>
            </Routes>
        </div>
    );
}

export default App;
