(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
})();
  

const items = [
  { title: "Pagination1", img: "img/icons/loading.gif" },
  { title: "Pagination2", img: "img/icons/loading.gif" },
  { title: "Pagination3", img: "img/icons/loading.gif" },
  { title: "Pagination4", img: "img/icons/loading.gif" },
  { title: "Pagination5", img: "img/icons/loading.gif" },
  { title: "Pagination6", img: "img/icons/loading.gif" },
  { title: "Pagination7", img: "img/icons/loading.gif" },
  { title: "Pagination8", img: "img/icons/loading.gif" },
  { title: "Pagination9", img: "img/icons/loading.gif" },
  { title: "Pagination10", img: "img/icons/loading.gif" },
  { title: "Pagination11", img: "img/icons/loading.gif" },
  { title: "Pagination12", img: "img/icons/loading.gif" },
  { title: "Pagination13", img: "img/icons/loading.gif" },
  { title: "Pagination14", img: "img/icons/loading.gif" },
  { title: "Pagination15", img: "img/icons/loading.gif" },
  { title: "Pagination16", img: "img/icons/loading.gif" },
  { title: "Pagination17", img: "img/icons/loading.gif" },
  { title: "Pagination18", img: "img/icons/loading.gif" },
  { title: "Pagination19", img: "img/icons/loading.gif" },
  { title: "Pagination20", img: "img/icons/loading.gif" },
  { title: "Pagination21", img: "img/icons/loading.gif" },
  { title: "Pagination22", img: "img/icons/loading.gif" },
  { title: "Pagination23", img: "img/icons/loading.gif" },
  { title: "Pagination24", img: "img/icons/loading.gif" },
  { title: "Pagination25", img: "img/icons/loading.gif" },
  { title: "Pagination26", img: "img/icons/loading.gif" },
  { title: "Pagination27", img: "img/icons/loading.gif" },
  { title: "Pagination28", img: "img/icons/loading.gif" },
  { title: "Pagination29", img: "img/icons/loading.gif" },
  { title: "Pagination30", img: "img/icons/loading.gif" },
  { title: "Pagination31", img: "img/icons/loading.gif" },
  { title: "Pagination32", img: "img/icons/loading.gif" },
  { title: "Pagination33", img: "img/icons/loading.gif" },
  { title: "Pagination34", img: "img/icons/loading.gif" },
  { title: "Pagination35", img: "img/icons/loading.gif" },
  { title: "Pagination36", img: "img/icons/loading.gif" }
];
let block = document.querySelector("#block");
let pagination = document.querySelector(".pagination__list");
let prevPage = document.querySelector(".pagination__arrow_prev");
let nextPage = document.querySelector(".pagination__arrow_next");
let notesOnPage = 4;

let countOfItems = Math.ceil(items.length / notesOnPage);

let paginationItem = [];
for (let i = 1; i <= countOfItems; i++) {
  let li = document.createElement("li");
  li.classList.add("pagination__item");
  pagination.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = i;
  li.appendChild(span);
  paginationItem.push(span);
}
let active;
showPage(paginationItem[0]);
for (let item of paginationItem) {
  item.addEventListener("click", function () {
    showPage(this);
  });
}

function showPage(item) {
  if (active) {
    active.classList.remove("_active");
  }
  active = item;
  item.classList.add("_active");
  

  let pageNum = +item.innerHTML;
  console.dir(item)
  let start = (pageNum - 1) * notesOnPage;
  let end = start + notesOnPage;
  let notes = items.slice(start, end);

  block.innerHTML = "";
  for (let note of notes) {
    block.insertAdjacentHTML("beforeend",
      `
    <div class="block__item">
      <h2 class="block__title">${note.title}</h2>
      <img class="block__img" src="${note.img}" alt="">
    </div>
    `
    );
  }
  hideOverPages();
}

prevPage.addEventListener("click", function () {
  if (active.parentElement.previousElementSibling) {
    showPage(active.parentElement.previousElementSibling.querySelector("span"));
  }
});
nextPage.addEventListener("click", function () {
  if (active.parentElement.nextElementSibling) {
    showPage(active.parentElement.nextElementSibling.querySelector("span"));
  }
});

/* Скрытие промежуточных номеров страниц */
function hideOverPages() {
  let items = [...pagination.children];
  console.log(items)
  if (items.length > 5) {
    items.forEach((item) => item.classList.add("_hide"));
    items[0].classList.remove("_hide");
    if (active.parentElement.previousElementSibling) {
      active.parentElement.previousElementSibling.classList.remove("_hide");
    }
    active.parentElement.classList.remove("_hide");
    if (active.parentElement.nextElementSibling) {
      active.parentElement.nextElementSibling.classList.remove("_hide");
    }
    items[items.length - 1].classList.remove("_hide");
  }
}

