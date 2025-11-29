/*
1. I want to take the value of the input in the input field and display it on the 
 */


let searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const listContainer = document.getElementById("list-container");
let searchesArray = [];




searchBtn.addEventListener ("click", function(){
    if (searchInput.value !== "") {
        searchesArray.push(searchInput.value);
        render();
    }

    else {
        alert("You must search for something!")
    }
    
})

window.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        searchesArray.push(searchInput.value);
        render();
    }

})


function render(){
    let renderedLists = ``;

    searchesArray.forEach(function(search){

        renderedLists = `<li class="search-item id="search-item"><image class="timer-img" id="timer-img" src="images/time.png">${search}<span id="remove">\u00d7</span></li>`
    })

    listContainer.innerHTML += renderedLists
    searchInput.value = "";
    saveToLocalStorage()
    
}

listContainer.addEventListener ("click", function(e){
    console.log(e);
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveToLocalStorage();
})


function saveToLocalStorage (){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showSearches(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showSearches();