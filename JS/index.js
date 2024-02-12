const getColor=()=>{
    const randomNumber=Math.floor((Math.random()+0.01)*1677725) -1; /* use to caluclate 
    random number b/w 0 to 255*255*255*/
    
    const randomCode="#"+randomNumber.toString(16); /*use to convert color in the form of hexadecimal*/
    console.log(randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;
    navigator.clipboard.writeText(randomCode) // use to copy the code stored in randomCode
}
document.getElementById("btn").addEventListener("click",getColor); /*use to call getColor function 
 by clicking on the the text in id btn*/

 getColor(); /// initial call by itself so that back ground color not be white