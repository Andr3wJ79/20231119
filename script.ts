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

interface Auto{
    gyarto:string;
    tipus:number;
    hengerurtartalom: number;
    benzinesE : boolean;
}


