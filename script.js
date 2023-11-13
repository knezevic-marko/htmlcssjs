document.querySelector("#search-list").addEventListener("click", (e) => {
    target=e.target;
    if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();    
    }
})