

// Définition des fonctions
function initialisation() {

    // initialiser le sudoku
    var tab = [ [b, b, b, b, b, b, b, b, b],
                [b, b, b, b, b, b, b, b, b],
                [b, b, b, b, b, b, b, b, b],
                [b, b, b, b, b, b, b, b, b],
                [b, b, b, b, b, b, b, b, b],
                [b, b, b, b, b, b, b, b, b],
                [b, b, b, b, b, b, b, b, b],
                [b, b, b, b, b, b, b, b, b],
                [b, b, b, b, b, b, b, b, b]]
    var j = 0

  // Met la valeur dans tab
    for (var i = 1; i <= 81; i++){
        const val = document.getElementById(String(i)).value
        if (val == ""){
            tab[j].push(null)
        }
        else {
            tab[j].push(Number(val))
        }
        if (i % 9 == 0 && i < 81){
            tab.push([])
            j++
        }
    }
  }


    const inputValid = validtab(TableauInitial)
    if (!inputValid){
        inputInvalide()
    }
    else{
        const reponse = solve(TableauInitial)
        nouveauTab(reponse, inputValid)
    }


function solve(tab) {
  // Vérifie si le sudoku a déjà été résolu
    if (solved(tab)) {
        return tab // Si c'est déjà résolu juste return le sudoku
    }
    else {
        const possibilities = prochainTab(tab) // cherche les nouvelles possibilités
        const validtabs = validation(possibilities) // affiche
        return rechercheSolution(validtabs) // utilise la fonction de backtracking
    }
}

// test //
// console.log(solve(bd4))


function rechercheSolution(tabs){
    // permet de trouver une solution valide au problème
    if (tabs.length < 1){
        return false // Si le tableau est vide
    } else {
        // recherche de la solution en prenant étape par étape c'est à dire
        // en prenant un élément, si on trouve on passe au suivant,
        // si on trouve pas on reviens au précédent pour tester un autre chiffre
        var first = tabs.shift() //prend le premier element
        const tryPath = solve(first) // essaie de résoudre avec le première élément
        if (tryPath != false){
            return tryPath // On a trouvé
        }else{
            return rechercheSolution(tabs) // On recommence
        }
    }
}


function solved(tab){
    // On vérifie que le tableau est bien rempli
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (tab[i][j] == null){
                return false
            }
        }
    }
    return true
}

//test // console.log(solved(bd3))


function prochainTab(tab){
    // trouve le premier carré vide et génére 9 possibilités (1...9)
    var res = []
    const firstVide = squareVide(tab)
    if (firstVide != undefined){
        const y = firstVide[0]
        const x = firstVide[1]
        for (var i = 1; i <= 9; i++){
            var newtab = [...tab]
            var row = [...newtab[y]]
            row[x] = i
            newtab[y] = row
            res.push(newtab)
        }
    }
    return res
}

function squareVide(tab){

    // trouver les coordonées i et j pour le premier carré vide
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (tab[i][j] == null) {
                return [i, j]
            }
        }
    }
}

// test
// console.log(prochainTab(bd3))
// console.log(squareVide(bd3))


function validation(tabs){
    // enlève tous les tableau invalide de la liste
    var res = []
    for (var i = 0; i < tabs.length; i++){
        if (validtab(tabs[i])){
            res.push(tabs[i])
        }
    }
    return res
}

// test
// console.log(validation([bd1, bd2, bd3]))



function validtab(tab){
    // permet de savoir si on à trouvé un sudoku valide
    return rowsBon(tab) && colonneBon(tab) && boxesBon(tab)
(tab)
}

function rowsBon(tab){
    // permet de voir si il ya pas de nomnbre qui se répète en ligne
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(tab[i][j])){
                return false
            } else if (tab[i][j] != null) {
                cur.push(tab[i][j])
            }
        }
    }
    return true
}


function colonneBon(tab){
    // permet de voir si il ya pas de nomnbre qui se répète en colonne
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(tab[j][i])){
                return false
            }
            else if (tab[j][i] != null){
                cur.push(tab[j][i])
            }
        }
    }
    return true
}
// Ne fonctionne pas
// function diagonalBon(tab) {
//     //premet de voir si il ya des nombres qui se répète en diagonale
//             var a = 0;
//             var cur = [];
//             for ( var i = 0; i<tab.Length; i++ ){
//                     for ( var j = 0 ; j<i+1; j++ ){
//                     a = tab[i - j][j];
//                     Console.log(a);
//                     Console.log(" ");
//                     }
//                 }
// }

function boxesBon(tab){
    const boxCoordinates = [[0, 0], [0, 1], [0, 2],
                            [1, 0], [1, 1], [1, 2],
                            [2, 0], [2, 1], [2, 2]]

    // permet de voir si il ya pas de nomnbre qui se répète dans une boite
    for (var y = 0; y < 9; y += 3){
        for (var x = 0; x < 9; x += 3){
            // on examine toutes les boites
            var cur = []
            for (var i = 0; i < 9; i++){
                var coordinates = [...boxCoordinates[i]]
                coordinates[0] += y
                coordinates[1] += x
                if (cur.includes(tab[coordinates[0]][coordinates[1]])){
                    return false
                }
                else if (tab[coordinates[0]][coordinates[1]] != null){
                    cur.push(tab[coordinates[0]][coordinates[1]])
                }
            }
        }
    }
    return true
}

//test
// console.log(rowsBon(bd1))
// console.log(rowsBon(bd2))
// console.log(rowsBon(bd3))
// console.log(colonneBon(bd1))
// console.log(colonneBon(bd2))
// console.log(colonneBon(bd3))
// console.log(boxesBon(bd1))
// console.log(boxesBon(bd2))
// console.log(boxesBon(bd3))
//console.log(diagonalBon(bd1))
// console.log(validtab(bd1))
// console.log(validtab(bd2))
// console.log(validtab(bd3))



function nouveauTab(tab) {
    // mettre la bonne réponse dans notre tableau de réponse
    if (tab == false){ //si on trouve rien
        for (i = 1; i <= 9; i++){
            document.getElementById("row " + String(i)).innerHTML = "PAS DE SOLUTION POUR CE TABLEAU"
        }}

        else{
        for (var i = 1; i <= 9; i++){ // si ontrouve
            var row = ""
            for (var j = 0; j < 9; j++){
                if (row == ""){
                    row = row + String(tab[i - 1][j])
                }
                else {
                    row = row + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + String(tab[i - 1][j])
                }
            }
            document.getElementById("row " + String(i)).innerHTML = row
        }
    }
}

function inputInvalide(){
    // si on a du null
    for (i = 1; i <= 9; i++){
        document.getElementById("row " + String(i)).innerHTML = "LE TABLEAU EST INVALIDE"
    }
}
