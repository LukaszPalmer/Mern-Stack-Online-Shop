import Header from "./components/Header.tsx";

import Profil from "./header-components-pages/Profil.tsx";
import Favoriten from "./header-components-pages/Favoriten.tsx";
import Warenkorb from "./header-components-pages/Warenkorb.tsx";
import StartSeite from "./header-components-pages/StartSeite.tsx";
import Produkte from "./header-components-pages/Produkte.tsx";
import UeberUns from "./header-components-pages/UeberUns.tsx";
import Kontakt from "./header-components-pages/Kontakt.tsx";

import { Routes, Route } from "react-router-dom";


function App() {
    return (
        <div>
            <Header/>
            <main>
              <Routes>
                <Route path = "/" element = {<StartSeite/>}/>
                <Route path = "/profil" element = {<Profil/>}/>
                <Route path = "/favoriten" element = {<Favoriten/>}/>
                <Route path = "/warenkorb" element = {<Warenkorb/>}/>
                <Route path = "/produkte" element = {<Produkte/>}/>
                <Route path = "/ueber-uns" element = {<UeberUns/>}/>
                <Route path = "/kontakt" element = {<Kontakt/>}/>
              </Routes>
            </main>
        </div>
    );
}

export default App;
