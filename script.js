let button = document.querySelector("button");

button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
    let parapgraph = document.querySelector("p");
    if(weather === "rainy"){
      parapgraph.innerHTML = "Bring an umbrella!"
    } else {parapgraph.innerHTML = "Enjoy the sun!"}
    // 1. Write a conditional statement:
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"


});