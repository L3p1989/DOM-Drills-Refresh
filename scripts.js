//Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    //Create div
    let div = document.createElement('div');
    //Give div className "header-container"
    div.className = "header-container";
    //Create h1
    let h1 = document.createElement('h1');
    //Create text "This is an h1"
    let h1Text = document.createTextNode('This is an h1');
    //Add h1Text to h1
    h1.appendChild(h1Text);
    //Add h1 inside div.header-container
    div.appendChild(h1);
    //Grab body element
    document.body.appendChild(div)
})

