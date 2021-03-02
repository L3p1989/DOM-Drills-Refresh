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
    //Create h3
    let h3 = document.createElement('h3');
    //Create text
    let h3Text = document.createTextNode('This is an h3');
    //Add `h3Text to `h3`
    h3.appendChild(h3Text);
    //Add `h3` to `div`
    div.appendChild(h3);
    //Create h4
    let h4 = document.createElement('h4');
    //Create text
    let h4Text = document.createTextNode('This is an h4');
    //Add `h4Text to `h4`
    h4.appendChild(h4Text);
    //Add `h4` to `div`
    div.appendChild(h4);
    //Create h5
    let h5 = document.createElement('h5');
    //Create text
    let h5Text = document.createTextNode('This is an h5');
    //Add `h5Text to `h5`
    h5.appendChild(h5Text);
    //Add `h5` to `div`
    div.appendChild(h5);
    //Create h6
    let h6 = document.createElement('h6');
    //Create text
    let h6Text = document.createTextNode('This is an h6');
    //Add `h6Text to `h6`
    h6.appendChild(h6Text);
    //Add `h6` to `div`
    div.appendChild(h6);
    //Give `h1` className "h1"
    h1.className = 'h1';
    //Give `h2` className "h2"
    h2.className = 'h2';
    //Give `h3` className "h3"
    h3.className = 'h3';
    //Give `h4` className "h4"
    h4.className = 'h4';
    //Give `h5` className "h5"
    h5.className = 'h5';
    //Give `h6` className "h6"
    h6.className = 'h6';
});