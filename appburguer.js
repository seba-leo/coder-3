class hamburguesa{
    constructor(nombre,tamaño,price){
        this.nombre=nombre;
        this.tamaño=tamaño;
        this.price=price;

    }
}
const cheemsBurguer= new hamburguesa(' cheemsBurguer','mediano',5)
const Clasica= new hamburguesa('Clasica','mediano',13)
const ClasicaDoble= new hamburguesa('ClasicaDoble','grande',15)
const TriFuerza= new hamburguesa('TriFuerza','mediano',20)
const Empagueza= new hamburguesa('Empagueza','mediano',25)

localStorage.setItem("cheemsBurguer",JSON.stringify(cheemsBurguer));
localStorage.setItem("Clasica",JSON.stringify(Clasica));
localStorage.setItem("ClasicaDoble",JSON.stringify(ClasicaDoble));
localStorage.setItem("TriFuerza",JSON.stringify(TriFuerza));
localStorage.setItem("Empagueza",JSON.stringify(Empagueza));
const caja=document.getElementById('caja')
const vacio=document.getElementById('vacio')
const button0=document.getElementById('boton0');
const button1=document.getElementById('boton1');
const button2=document.getElementById('boton2');
const button3=document.getElementById('boton3');
const button4=document.getElementById('boton4');
const button6=document.getElementById('buton6')
const Total=document.getElementById('total');
const Total1=document.getElementById('total1');
const Tota2=document.getElementById('total2');


let arrayburguer=[]
//funciones


function precio(burger,num,Total){ 
                let valor=burger.price;
                burger.price =burger.price + num;
                Total.innerText=valor
                console.log(valor)
                }
function resta(burguer,num,total){
    burguer.price=burguer.price-num;
    total.innerText=burguer.price -num;
    console.log(burguer.price -num)
}

//
button0.addEventListener('click',()=>{ 
        const divElement=document.createElement('div');
        divElement.setAttribute('id','Box1');
        let content= `
            <div class="card" style="width: 18rem;">
            <img src="https://www.hogar.mapfre.es/media/2018/09/hamburguesa-sencilla.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">La ${cheemsBurguer.nombre} es una hamburguesa con un medallon de carne y salsa barbacoa, es de tamaño  ${cheemsBurguer.tamaño} y sale 5 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
    //suma precios
        precio(cheemsBurguer,5,Total)

        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.setAttribute('class','btn btn-primary')
        //boton borrar
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box1')
        Borrar1.removeChild(Borrar2)
        //resta precio
        resta(cheemsBurguer,5,Total)

            })
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
        arrayburguer.push(cheemsBurguer)
        console.log(arrayburguer)
        }
        )
button1.addEventListener('click',()=>{
    const divElement=document.createElement('div');
        divElement.setAttribute('id','Box2');
        let content= `<div class="card" style="width: 18rem;">
                <img src="https://www.clarin.com/img/2022/05/27/xP5S1HdN4_720x0__1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">La ${Clasica.nombre} es una hamburguesa de carne con cheddar, ${Clasica.tamaño} y sale 13 usd </p></div>`;
        divElement.innerHTML=content;
        
        caja.append(divElement)

            precio(Clasica,13,Total1)

        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box2')
        Borrar1.removeChild(Borrar2)
        //resta cantidad
        resta(Clasica,13,Total1)

        })
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
            }
        )
button2.addEventListener('click',()=>{
    const divElement=document.createElement('div');
        divElement.setAttribute('id','Box3');
        let content= `<div class="card" style="width: 18rem;">
                <img src="https://www.clarin.com/img/2022/05/26/04YncCFJS_720x0__1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">La  ${ClasicaDoble.nombre} es una hamburguesa de doble medallon de carne con doble cheddar y panceta ${ClasicaDoble.tamaño} y sale 15 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
         //suma cantidad
        precio(ClasicaDoble,15,total2)
        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box3')
        Borrar1.removeChild(Borrar2)
        //resta cantidad
        resta(ClasicaDoble,15,total2)
            })
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
            }
        )
button3.addEventListener('click',()=>{
    const divElement=document.createElement('div');
        divElement.setAttribute('id','Box4');
        let content= 
                `<div class="card" style="width: 18rem;">
                <img src="https://www.clarin.com/img/2022/05/27/UbQXaCw4q_720x0__1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">El ${TriFuerza.nombre} es un perro de tamaño ${TriFuerza.tamaño} y sale 20 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
        //suma cantidad
        precio(TriFuerza,20,total3)
        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box4')
        Borrar1.removeChild(Borrar2)
         //resta cantidad
        resta(TriFuerza,20,total3)
            })
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
            }
        )
button4.addEventListener('click',()=>{
    const divElement=document.createElement('div');
        divElement.setAttribute('id','Box5');
        let content= `<div class="card" style="width: 18rem;">
                <img src="https://www.clarin.com/img/2022/05/27/zjB5u52M2_720x0__1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">El ${Empagueza.nombre} es un perro de tamaño ${Empagueza.tamaño} y sale 25 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
        //suma cantidad
        precio(Empagueza,25,total4)
        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box5')
        Borrar1.removeChild(Borrar2)
        //resta cantidad       
        resta(Empagueza,25,total4)
            }
            )
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
            }
        )
button6.addEventListener('click',()=>{
    const Pricesuma=cheemsBurguer.price+Clasica.price+ClasicaDoble.price+TriFuerza.price+Empagueza.price
    const Tprice=Pricesuma-78
    totaprecio.innerHTML=Tprice

})   


/*
class hamburguesa{
    constructor(nombre,tamaño,price,cantidad){
        this.nombre=nombre;
        this.tamaño=tamaño;
        this.price=price;
        this.cantidad=cantidad;
    }
}
const cheemsBurguer= new hamburguesa(' cheemsBurguer','mediano',5,1)
const Clasica= new hamburguesa('Clasica','mediano',13,1)
const ClasicaDoble= new hamburguesa('ClasicaDoble','grande',15,1)
const TriFuerza= new hamburguesa('TriFuerza','mediano',20,1)
const Empagueza= new hamburguesa('Empagueza','mediano',25,1)

const caja=document.getElementById('caja')
const vacio=document.getElementById('vacio')
const button0=document.getElementById('boton0');
const button1=document.getElementById('boton1');
const button2=document.getElementById('boton2');
const button3=document.getElementById('boton3');
const button4=document.getElementById('boton4');
const button5=document.getElementById('boton5');
const button6=document.getElementById('boton6');
const Total=document.getElementById('total');
const cantidad=document.getElementById('Cantidad');

//funciones
function Cantidad(burguer){
            burguer.cantidad=burguer.cantidad+1;
}
function menosCantidad(burguer){
            burguer.cantidad=burguer.cantidad-1
            cantidad.innerText=burguer.cantidad-1;
            burguer.cantidad=burguer.cantidad;
}
function precio(burger,num,Total){ 
                let valor=burger.price;
                burger.price =burger.price + num;
                console.log(valor)
                }
function resta(burguer,num,total){
    burguer.price=burguer.price-num;
    Total.innerText=burguer.price -num;
    console.log(burguer.price -num)
}
//
button0.addEventListener('click',()=>{ 
        const divElement=document.createElement('div');
        const row=document.querySelector('.row');
        divElement.setAttribute('id','Box1');
        let content= `<div class="card" style="width: 18rem;">
            <img src="https://www.hogar.mapfre.es/media/2018/09/hamburguesa-sencilla.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">La ${cheemsBurguer.nombre} es una hamburguesa con un medallon de carne y salsa barbacoa, es de tamaño  ${cheemsBurguer.tamaño} y sale 5 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
        //suma precios
        precio(cheemsBurguer,5,Total)
        //suma cantidad
        Cantidad(cheemsBurguer)
        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.setAttribute('class','btn btn-primary')
        //boton borrar
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box1')
        Borrar1.removeChild(Borrar2)
        //resta precio
        resta(cheemsBurguer,5)
        menosCantidad(cheemsBurguer)
            })
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
        }
        )
button1.addEventListener('click',()=>{
    const divElement=document.createElement('div');
        divElement.setAttribute('id','Box2');
        let content= `<div class="card" style="width: 18rem;">
                <img src="https://www.clarin.com/img/2022/05/27/xP5S1HdN4_720x0__1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">La ${Clasica.nombre} es una hamburguesa de carne con cheddar, ${Clasica.tamaño} y sale 13 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
         //suma cantidad
            precio(Clasica,13,Total)
            Cantidad(Clasica)
            let suma=cheemsBurguer.cantidad+Clasica.cantidad+ClasicaDoble.cantidad+TriFuerza.cantidad+Empagueza.cantidad
            
        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box2')
        Borrar1.removeChild(Borrar2)
        //resta cantidad
        resta(Clasica,13,Total)
        menosCantidad(Clasica)
        })
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
            }
        )
button2.addEventListener('click',()=>{
    const divElement=document.createElement('div');
        divElement.setAttribute('id','Box3');
        let content= `<div class="card" style="width: 18rem;">
                <img src="https://www.clarin.com/img/2022/05/26/04YncCFJS_720x0__1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">La  ${ClasicaDoble.nombre} es una hamburguesa de doble medallon de carne con doble cheddar y panceta ${ClasicaDoble.tamaño} y sale 15 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
         //suma cantidad
        precio(ClasicaDoble,15)
        Cantidad(ClasicaDoble,1)
        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box3')
        Borrar1.removeChild(Borrar2)
        //resta cantidad
        resta(ClasicaDoble)
        menosCantidad(ClasicaDoble)
            })
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
    
            }
        )
button3.addEventListener('click',()=>{
    const divElement=document.createElement('div');
        divElement.setAttribute('id','Box4');
        let content= `<div class="card" style="width: 18rem;">
                <img src="https://www.clarin.com/img/2022/05/27/UbQXaCw4q_720x0__1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">El ${TriFuerza.nombre} es un perro de tamaño ${TriFuerza.tamaño} y sale 20 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
        //suma cantidad
        precio(TriFuerza,20)
        Cantidad(TriFuerza,1)
        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box4')
        Borrar1.removeChild(Borrar2)
         //resta cantidad
        resta(TriFuerza,20)
        menosCantidad(TriFuerza)
            })
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
            }
        )
button4.addEventListener('click',()=>{
    const divElement=document.createElement('div');
        divElement.setAttribute('id','Box5');
        let content= `<div class="card" style="width: 18rem;">
                <img src="https://www.clarin.com/img/2022/05/27/zjB5u52M2_720x0__1.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">El ${Empagueza.nombre} es un perro de tamaño ${Empagueza.tamaño} y sale 25 usd </p></div>`;
        divElement.innerHTML=content;
        caja.append(divElement)
        //suma cantidad
        precio(Empagueza,20)
        Cantidad(Empagueza,1)
        //Elimina elementos creados
        const Boton=document.createElement('button')
        Boton.addEventListener('click',()=>{
        Borrar1=document.getElementById('caja')
        Borrar2=document.getElementById('Box5')
        Borrar1.removeChild(Borrar2)
        //resta cantidad       
        resta(Empagueza,25)
        menosCantidad(Empagueza)
            }
            )
        const Botontext= 'borrar'; 
        Boton.innerHTML=Botontext
        divElement.appendChild(Boton)
            }
        )
button6.addEventListener('click',()=>{
    const suma=cheemsBurguer.cantidad+Clasica.cantidad+ClasicaDoble.cantidad+TriFuerza.cantidad+Empagueza.cantidad
    const TotalSuma=suma-5
    cantidad.innerHTML=TotalSuma
//
    const Pricesuma=cheemsBurguer.price+Clasica.price+ClasicaDoble.price+TriFuerza.price+Empagueza.price
    const Tprice=Pricesuma-78
    total.innerHTML=Tprice

})   
*/
