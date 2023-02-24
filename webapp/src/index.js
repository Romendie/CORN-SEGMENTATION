import "./style.css";
import * as blazeface from '@tensorflow-models/blazeface';
import * as tf from '@tensorflow/tfjs-core';
import * as tfjsWasm from '@tensorflow/tfjs-backend-wasm';

tfjsWasm.setWasmPath("./assets/tfjs-backend-wasm.wasm");

import { library, icon, dom } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitterSquare, faGithub, faCoffee, faUserCircle);

dom.watch();

const heightRatio = 0.33603092783;
const headTopRatio = 0.11002474226;

const marginLeftRatio = 0.30577839955;
const