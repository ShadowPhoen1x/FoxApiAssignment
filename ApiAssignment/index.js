// https://randomfox.ca/floof/

// eventlistener 1 - get next image with button click

const fox_result = document.querySelector("#fox_results");
const fox_btn = document.querySelector("#fox_btn")


fox_btn.addEventListener('click', getRandomFox)

async function getRandomFox() {
    await fetch('https://randomfox.ca/floof/', {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        fox_result.innerHTML = `<img src="${data.image}"/>`
        count = 0;
        button.innerHTML = "Likes: " + count;
        document.querySelector("#unordered").innerHTML = "";
    })
}

// eventlistener 2 - like button 
var count = 0; //like counter
let button = document.querySelector("#likeBtn")
button.addEventListener("click", displayLike);
function displayLike() {
    let btnClicked = true;
    if (btnClicked === true) {
        count++;
    } 
    else {
        return count;
    }
    
    button.innerHTML = "Likes: " + count;
}

//eventlistener 3 - comment box 
let post = document.querySelector("#post"); //post button
post.addEventListener("click", function() {
    let commentBoxValue= document.querySelector("#comment-box").value; //where you type the comment
    let li = document.createElement("li"); //creates a list element
    let text = document.createTextNode(commentBoxValue); //creates textnode with value of comment box
    li.appendChild(text); //links them together
    document.querySelector("#unordered").appendChild(li); //appends everything
    document.querySelector("#comment-box").value = " "; // resets the comment box value back to 0
})