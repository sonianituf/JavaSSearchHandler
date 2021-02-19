const search = document.querySelector('#search');/* target the input to track the user search terms */
const boxTexts = document.querySelectorAll('.col p');/* target all p with class of .col */
    /* create a handleSearch function */
const handleSearch = event => {
    /* The first variable we will create in our handleSearch function, will track the letter the user typed into the search input field. To capture the users input we need to access the value property of the input element: event.target.value.
    To make sure that our search is case insensitive, we will attach the .toLowerCase() method to our variable declaration. This will convert any letter the user types into lowercase. */
const searchTerm = event.target.value.toLowerCase();
    /* Next we create a loop to cycle through all of the <p> elements on the page.
    We will be using the modern JavaScript forEach array iteration method to loop through them. */
boxTexts.forEach(boxText => {
        /* Inside of our loop we will create a variable that looks at what the text inside of each <p> element is and converts it to lowercase. */
    const text = boxText.textContent.toLowerCase();
        /* The next variable we declare will target the parent <div> element that the <p> element is nested inside of. This way we can hide the whole box completely if the text inside does not match the search term. */
    const box = boxText.parentElement;
            /* Lastly now we need to actually add the search functionality to our function.
            Using the text variable we created, we will check to see if any of the text includes the searchText */
        if(text.includes(searchTerm)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";  
        }
});
/* Below the handleSearch function, we can create an event handler tied to our search variable
 to track what the user types into the input search field. We will be using the keyup event listener 
to achieve this and calling our handleSearch() function after a user types a letter into the input element. */
search.addEventListener('keyup', handleSearch);

}