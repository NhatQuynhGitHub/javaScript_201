

// Because we would like to get a random character so the first step is write the random number
// Eighth: if we want some info of character show up in html page, we wil do 
const nameCharacter = document.getElementById("name");
const born = document.getElementById("born");
const height = document.getElementById("height");
const image = document.getElementById("image");
const homeWorld = document.getElementById("homeworld")
// Third: Going to html create a button bc we would like to get a random character by click on a button and some div.id about the info that we want to show in the page
// Fourth: then going to JS to select that button and create an event listener around it
const button = document.querySelector(".getRandomCharacter");
button.addEventListener('click', (e) => { // (e) is a parameter, it represents the event object that is automatically passed to the event handler function when the click event occurs. You can use this event object to access information about the event.
    e.preventDefault() // all that's going to do is if this is part of a form, it's not going to submit the form.
    nameCharacter.innerHTML = '<em>Loading ...</>' 
    born.innerHTML = '<em>Loading ...</>' 
    height.innerHTML = '<em>Loading ...</>' 
    homeWorld.innerHTML = '<em>Loading ...</>'
    image.innerHTML = '<em>Loading ...</>' 

    //console.log("CLICKED") //:this line is just for testing, whenever we click this, we can see it says click at the bottom there
    
    // Sixth: Now let's do exactly what we want it to do, grab all code bellow

    // Seventh: the code that we are going to grab here, below
    // First: write a random number base on Math.random and because there are 83 characters so our random number will time to 83 (* 83)
    const randomNumber = Math.ceil(Math.random()*83)
    // Second: fetch with the Url of api, with an example number that we can see what information we can get
    fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(Response => Response.json())
        .then(CharacterData => {
            console.log(CharacterData)
            // Ninth: Populate those information that we wanna them show up in the page.
            nameCharacter.innerHTML = CharacterData['name'];
            born.innerHTML = CharacterData['born'];
            height.innerHTML = CharacterData['height'];
            homeWorld.innerHTML = CharacterData['homeworld']
            image.src = CharacterData['image'];

        })


})




