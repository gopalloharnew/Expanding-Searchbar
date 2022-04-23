console.log("Expanding Searchbar");

const clear = document.querySelector(".clear");
const searchForm = document.querySelector(".search-form");
const search = document.querySelector("#search");

clear.addEventListener("click", (e)=>{
    e.preventDefault();
    search.value = "";
    clear.classList.toggle("show", search.value);
    search.focus();
});

search.addEventListener("input", ()=>{
    clear.classList.toggle("show", search.value);
})

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    window.location.href = `https://google.com/search?q=${search.value}`
})

window.addEventListener("keydown", (e)=>{
    if(searchForm.contains(e.target)) return;
    if(e.key === "/"){
        e.preventDefault();
        search.focus();
    }
})