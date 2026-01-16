document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    const paragraph = document.querySelector("p");

    heading.addEventListener("click", () => {
        alert("You clicked the heading!");
    });

    paragraph.addEventListener("mouseover", () => {
        paragraph.style.color = "blue";
    });

    paragraph.addEventListener("mouseout", () => {
        paragraph.style.color = "#333";
    });
});