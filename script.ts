function vanENegativ(szamTomb:number[]):boolean{
    for(var i:number = 0; i < szamTomb.length; i++){
        if(szamTomb[i] < 0){
            return true;
        }
    }   
    return false;
}

var szamTomb:number[] = [2, 23, 56, -4, 78];
console.log(vanENegativ(szamTomb));


function korKT(sugar:number):[number,number]{
    var Kerulet:number = 2 * sugar * Math.PI
    var Terulet:number = sugar * sugar * Math.PI
    var eredmeny:[number,number] = [Kerulet, Terulet]
    console.log(eredmeny);
    return eredmeny;
}

console.log(korKT(12));

interface auto{
    gyarto:string;
    tipus:string;
    hengerurtartalom: number;
    benzinesE : boolean;
}

function legkisebbHengerurtartalom(autok:auto[]):number{
    var eredmeny:number = 0;
    var aktualis:number = autok[0].hengerurtartalom;

    for(var i:number = 1; i < autok.length; i++){
        if (aktualis > autok[i].hengerurtartalom){
            eredmeny = i;
        }
    }
    return eredmeny;
}

var a1:auto = {gyarto:"Opel", tipus:"Astra", hengerurtartalom:1400, benzinesE:true};
var a2:auto = {gyarto:"Opel", tipus:"Combo", hengerurtartalom:1399, benzinesE:false};
var a3:auto = {gyarto:"Nissan", tipus:"350Z", hengerurtartalom:3500, benzinesE:true};
var autok:auto[] = [a1,a2,a3]
console.log(legkisebbHengerurtartalom(autok));

function benzinesEDarab(autok:auto[]):number{
    var eredmeny:number = 0;

    for(var i:number = 0; i < autok.length; i++){
        if (autok[i].benzinesE){
            eredmeny += 1;
        }
    }
    return eredmeny;

}

console.log(benzinesEDarab(autok));