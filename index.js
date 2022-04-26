import commonFunction from './commonFunction.js';
const arr = [
    {productID:123,productName:"Hàng 1",productQuantity:1,productAmount:2000},
    {productID:321,productName:"Hàng 2",productQuantity:2,productAmount:4000},
    {productID:456,productName:"Hàng 3",productQuantity:3,productAmount:6000},
    {productID:654,productName:"Hàng 4",productQuantity:4,productAmount:7000},
    {productID:123,productName:"Hàng 1",productQuantity:5,productAmount:9000},

]


commonFunction.logConsole(commonFunction.removeDuplicateElementArray(arr,["productID","productName"]));
