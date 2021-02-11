import { isString } from "util";

function abbreviateString(str) {
    var split_array=str.split(" ");
    var abb_str="";
    abb_str+=split_array[0]+" "+split_array[split_array.length-1].charAt(0).toUpperCase()+".";
    return abb_str;
}

export { abbreviateString };
