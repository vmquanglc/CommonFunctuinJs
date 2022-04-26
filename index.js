import commonFunction from './commonFunction.js';
const param = [1,2,null,undefined,{
    name:"quang",
    age:10,
    address:"lao sky"
}];

commonFunction.logConsole(commonFunction.cleanArray(param));
