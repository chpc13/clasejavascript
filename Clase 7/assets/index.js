const entrarAlBar=(edad,pago)=>{
    if (edad>=18 || pago===true) {
        console.log("Puede entrar al bar")
    }else{
        console.log("No puede entrar al bar")
    }
}

entrarAlBar(18,false)

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);