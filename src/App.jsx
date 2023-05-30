import React  from "react";
import Header  from './Header';
import Footer from "./Footer";
import './styles.css'
import CreateItems from "./CreateItems";


const App =()=>{
    return<div>
        <Header />
       <div className="app">
       <CreateItems />
        <Footer />
        </div>
    </div>
}
export default App;