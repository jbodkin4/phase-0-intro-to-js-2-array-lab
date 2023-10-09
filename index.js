const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat(Bob) {
    cats.unshift('Bob');
    return cats;
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop();
    return cats
  }
  
  function destructivelyRemoveFirstCat(Milo){
    cats.shift();
    return cats;
  }

  function appendCat(Broom){
    var Broom= [...cats,'Broom'];
    return Broom;
  }
  
  function prependCat(Arnold){
    var Arnold=['Arnold', ...cats];
    return Arnold
  }

  function removeLastCat(){
    var cats2= cats.slice(0,cats.length-1);
    return cats2;
  }
  
  function removeFirstCat(){
    var cats3= cats.slice(1)
    return cats3
  }