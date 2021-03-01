//Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    //Create `div`
    let div = document.createElement('div');
    //Give `div` className "header-container"
    div.className = "header-container";
    //Create `h1`
    let h1 = document.createElement('h1');
    //Create text "This is an h1"
    let h1Text = document.createTextNode('This is an h1');
    //Add `h1Text` to `h1`
    h1.appendChild(h1Text);
    //Add `h1` inside `div`
    div.appendChild(h1);
    //Add `div` to `body`
    document.body.appendChild(div);
    //Create `h2`
    let h2 = document.createElement('h2');
    //Create text "This is an h2"
    let h2Text = document.createTextNode('This is an h2');
    //Add `h2Text` to `h2`
    h2.appendChild(h2Text);
    //Add `h2` to `div`
    div.appendChild(h2);
});

