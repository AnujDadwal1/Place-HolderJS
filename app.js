const select =document.querySelector('select');
const inputall = document.querySelectorAll('input');
const myimg = document.querySelector("img");
let textArea = document.querySelector("textArea");
let urlobj={};
const removehash = (str)=>{
    return str.replace("#","")
}
const addplus = (str)=>{
  return str.split(" ").join("+");
}
const createImagePath=()=>{
    urlobj.size=select.value;
    urlobj.text=addplus(inputall[0].value);
    urlobj.bgClr=removehash(inputall[1].value);
    urlobj.txtClr=removehash(inputall[2].value);
    let urlPath=`http://via.placeholder.com/${urlobj.size}/${urlobj.bgClr}/${urlobj.txtClr}?text=${urlobj.text}`
myimg.src=urlPath;
textArea.value = urlPath 
textArea.focus();
textArea.select();
navigator.clipboard.writeText(textArea.value)
.then(()=>{
    console.log('Text copy ho gaya hai Bahi');
})
.catch((err)=>{
    console.log('Error aa raha hai bhai ',err);
});
}
inputall.forEach((curElem) => curElem.addEventListener('change',createImagePath));
select.addEventListener('change',createImagePath);