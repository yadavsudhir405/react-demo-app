import * as React from "react";
import * as ReactDOM from "react-dom";
import {Dummy} from "./component/dummy/dummy";

const ROOT = document.querySelector('.root');
ReactDOM.render(<Dummy></Dummy>, ROOT);