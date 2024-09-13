import { BrowserRouter, Routes, Route } from "react-router-dom";


import Comps from "./pages/instagram";



export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Comps/>} />
            </Routes>
        </BrowserRouter>
    )
}
