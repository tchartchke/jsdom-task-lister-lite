document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("ul#tasks")

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const priorityColor = document.querySelector("select#priority").value
    item = `${document.querySelector("input#new-task-description").value} <button>x</button>`
    const li = document.createElement('li')
    li.innerHTML = item
    li.style.color = `#${priorityColor}`
    ul.appendChild(li)
    document.querySelector("input#new-task-description").value = ""

  }, false);

  ul.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      const li = event.target.parentNode;
      li.remove()
    }
  });


});