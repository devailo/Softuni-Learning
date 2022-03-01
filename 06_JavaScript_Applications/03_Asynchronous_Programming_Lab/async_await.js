const url ='https://swapi.dev/api';

//function declaration
async function getStarWarsCharacter(id){
    let response = await fetch(`${url}/${id}`);
    let character = await response.json();

    return character;
}


// //function expression
// const getStarWarsCharacter = async function(){

// }

// //arrow
// const getStarWarsCharacter = async () => {

// }