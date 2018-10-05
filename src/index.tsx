import * as React from "react";
import * as ReactDOM from "react-dom";
import {Dummy} from "./component/dummy/dummy";
const addressV = {country: "India", state: "Jharkhand"};
const ROOT = document.querySelector('.root');
ReactDOM.render(<Dummy address={{country: "India", state:"Jharkhand"}}/>, ROOT);