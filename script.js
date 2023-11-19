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
