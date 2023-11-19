function vanENegativ(szamTomb) {
    for (var i = 0; i < szamTomb.length; i++) {
        if (szamTomb[i] < 0) {
            return true;
        }
    }
    return false;
}
var szamTomb = [2, 23, 56, -4, 78];
console.log(vanENegativ(szamTomb));
function korKT(sugar) {
    var Kerulet = 2 * sugar * Math.PI;
    var Terulet = sugar * sugar * Math.PI;
    var eredmeny = [Kerulet, Terulet];
    console.log(eredmeny);
    return eredmeny;
}
console.log(korKT(12));
function legkisebbHengerurtartalom(autok) {
    var minAuto = autok[0];
    for (var i = 1; i < autok.length; i++) {
        if (minAuto.hengerurtartalom > autok[i].hengerurtartalom) {
            minAuto = autok[i];
        }
    }
    return minAuto;
}
var a1 = { gyarto: "Opel", tipus: "Astra", hengerurtartalom: 1400, benzinesE: true };
var a2 = { gyarto: "Opel", tipus: "Combo", hengerurtartalom: 1399, benzinesE: false };
var a3 = { gyarto: "Nissan", tipus: "350Z", hengerurtartalom: 3500, benzinesE: true };
var autok = [a1, a2, a3];
console.log(legkisebbHengerurtartalom(autok));
function benzinesEDarab(autok) {
    var eredmeny = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE) {
            eredmeny++;
        }
    }
    return eredmeny;
}
console.log(benzinesEDarab(autok));
