import "./../../sass/styles.scss";
console.log("heloow web pack");
import { random } from "lodash";
import {text} from 'bell';

const a = null;
let w = a ?? "sanjeewa";
console.log(w);

const fu = (a: number, b: number) => {
  return a + b;
};
const ab: number = fu(3, 4);
console.log(ab);
let x = random("chami", 30);
console.log("random", x);
