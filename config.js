// déclaration des variables permettant de tester notre appli

const b = null

var bd1 = [ [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9]]


var bd2 = [ [b, b, b, b, b, b, b, b, b],
            [b, b, b, b, b, b, b, b, b],
            [b, b, b, b, b, b, b, b, b],
            [b, b, b, b, b, b, b, b, b],
            [b, b, b, b, b, b, b, b, b],
            [b, b, b, b, b, b, b, b, b],
            [b, b, b, b, b, b, b, b, b],
            [b, b, b, b, b, b, b, b, b],
            [b, b, b, b, b, b, b, b, b]]


var bd3 = [ [b, b, b, b, b, 8, 9, 1, b],
            [b, b, 1, b, b, b, b, b, 3],
            [9, b, b, b, 2, 7, b, b, 5],
            [3, b, 2, 5, 6, b, b, b, b],
            [5, b, b, b, b, b, b, b, 8],
            [b, b, b, b, 8, 3, 5, b, 4],
            [8, b, b, 7, 4, b, b, b, 2],
            [6, b, b, b, b, b, 1, b, b],
            [b, 5, 7, 3, b, b, b, b, b]]

var bd4 = [ [1, 2, 3, 4, 5, 6, 7, 8, b],
            [b, b, b, b, b, b, b, b, 2],
            [b, b, b, b, b, b, b, b, 3],
            [b, b, b, b, b, b, b, b, 4],
            [b, b, b, b, b, b, b, b, 5],
            [b, b, b, b, b, b, b, b, 6],
            [b, b, b, b, b, b, b, b, 7],
            [b, b, b, b, b, b, b, b, 8],
            [b, b, b, b, b, b, b, b, 9]]


// console.log(tab) test



  // On initialise la réponse avec "?"
  const placeHolder = " ? "
  for (var i = 1; i <= 9; i++){
      document.getElementById("row " + String(i)).innerHTML = placeHolder +  "\xa0\xa0\xa0\xa0\xa0\xa0"
      + placeHolder + "\xa0\xa0\xa0\xa0\xa0\xa0"
      + placeHolder + "\xa0\xa0\xa0\xa0\xa0\xa0"
      + placeHolder + "\xa0\xa0\xa0\xa0\xa0\xa0"
      + placeHolder + "\xa0\xa0\xa0\xa0\xa0\xa0"
      + placeHolder + "\xa0\xa0\xa0\xa0\xa0\xa0"
      +  placeHolder + "\xa0\xa0\xa0\xa0\xa0\xa0"
      +  placeHolder + "\xa0\xa0\xa0\xa0\xa0\xa0"
      + placeHolder
  }
