
    const heading = document.getElementById("btn");
    heading.addEventListener("click", () => {
        alert("The button is clicked by me")
    });

     const mouse = document.getElementById("heading");
    mouse.addEventListener("mouseover", () => {
        mouse.style.color="blue"
        console.log("mouse enter the page");
    });

    document.addEventListener("keydown", function(event){
    console.log(event.key);
});

document.addEventListener("click", function(event){
    console.log(event.target);
});

document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Data submitted");
})

const input = document.getElementById("name");

input.addEventListener("change", function(){
    console.log("Value changed:", input.value);
});

window.addEventListener("scroll", function(){
    console.log("Page scroll");
})

window.addEventListener("resize", function(){
    console.log("Window resized");
});
