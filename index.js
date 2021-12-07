//write your code here
const animals = ['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
function pluralize (animals){
    let pluralizedArray = [];
    pluralizedArray = animals.map((element) => {
        return element + `s`;
    });
    return pluralizedArray;
}
console.log(pluralize(['Mermaid', 'Lion']));

function uppercase(animals){
    const uppercases = animals.map((elements) => {
        return elements[0].toUpperCase() + elements.substr(1);
    })
    return uppercases;
}
console.log(uppercase([`mermaid`, `lion`]))

function longWords(animals){
    const filterWords = animals.filter((elements) => {
        return elements.length > 3;
    })
    return filterWords
}
console.log(longWords([`Dog`, `Cat`, `Lion`, `Polar Bear`]))

function shortWords(animals){
    const lessThanFive = animals.filter((animal) =>{
      return animal.length < 5 ;
    });
    return lessThanFive;
}

console.log(shortWords(animals));

function oddLength(animals){
    const oddNum = animals.filter((animal) =>{
        return animal.length % 2 === 1;
    })
    return oddNum;
}
console.log(oddLength(animals));

function longToShort(animals){
    const sorted = animals.sort((a, b) =>{
        return b.length - a.length;
    });
    return sorted;
}

console.log(longToShort(animals));


function sum(numbers){
    return numbers.reduce((accum, value) => accum  + value);
}
console.log(sum([1, 2, 3]))
