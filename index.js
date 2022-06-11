import commonFunction from './commonFunction.js';
const obj = {a:1,b:2,c:{d:3}}
const shallowClone = commonFunction.cloneObject(obj);
obj.c.d = 34;

commonFunction.logConsole(obj);
commonFunction.logConsole(shallowClone);
