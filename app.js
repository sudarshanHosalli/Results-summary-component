import data from "./data.json" with { type: "json" };
const statsContainer = document.querySelector(".stats-container")

data.map((e) => {
   statsContainer.innerHTML += 
   `<div style="background-color: ${e.background}" class="stat-container">
   <span style="color: ${e.color}"  class="icon-text">
   <img class="icon"
            src=${e.icon}
            alt=${e.category} />
            ${e.category}
            </span>
   <div class="num"><span>${e.score}</span> / 100</div>
   </div>`
})

