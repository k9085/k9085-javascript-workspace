import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/*closure example*/
function hello() {
  var a = 10;
  function hello1() {
    console.log(a);
  }
  hello1();
}
var hellovalue = hello();
console.log(hellovalue);

/*reverse string */
var str = "hi hello world";
function reverseString(str) {
  var newValue = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newValue += str[i];
  }
  return newValue;
}

var reverseValue = reverseString(str);
console.log(reverseValue);

/*double the elements using simple function*/
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}
const mapValues = arr.map(double);
console.log(mapValues);

/*double the elements using map function*/

const arrMap = [5, 1, 3, 2, 6];
const valuesdouble = arrMap.map((x) => {
  return x * 2;
});
console.log("using map", valuesdouble);
