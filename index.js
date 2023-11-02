function myBasicF (str){
    let splitStr = str.split("");
    splitStr.forEach(s=> {
        console.log(s * 2);
        
    });
    console.log("FIN");
}
myBasicF("Hello git");