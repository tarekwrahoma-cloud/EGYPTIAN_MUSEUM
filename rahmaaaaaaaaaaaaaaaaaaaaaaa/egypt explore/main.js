const timelineItems = document.querySelectorAll('.timeline-item');
const periodContents = document.querySelectorAll('.period-content');
var next = document.querySelector(".next-btn");
var prev = document.querySelector(".prev-btn");

const itemsArray = Array.from(timelineItems);
const contentsArray = Array.from(periodContents);

var current_index = 0;

for (let i = 0; i < itemsArray.length; i++) {
  itemsArray[i].addEventListener('click', function () {
    current_index = i;

    for (let j = 0; j < itemsArray.length; j++) {
      itemsArray[j].classList.remove('active');
    }
    itemsArray[i].classList.add('active');

    const targetId = itemsArray[i].getAttribute('data-target');

    for (let k = 0; k < contentsArray.length; k++) {
      contentsArray[k].classList.remove('active');
      contentsArray[k].classList.add('d-none');
    }

    const activeContent = document.getElementById(targetId);
    activeContent.classList.remove('d-none');
    activeContent.classList.add('active');
  });
}

next.addEventListener("click", function () {
  slide(1);
});

prev.addEventListener("click", function () {
  slide(-1);
});

function slide(step) {
  current_index = current_index + step;

  if (current_index < 0) {
    current_index = itemsArray.length - 1;
  }

  if (current_index >= itemsArray.length) {
    current_index = 0;
  }

  for (let j = 0; j < itemsArray.length; j++) {
    itemsArray[j].classList.remove('active');
  }
  itemsArray[current_index].classList.add('active');

  for (let k = 0; k < contentsArray.length; k++) {
    contentsArray[k].classList.remove('active');
    contentsArray[k].classList.add('d-none');
  }

  const targetId = itemsArray[current_index].getAttribute('data-target');
  const activeContent = document.getElementById(targetId);
  activeContent.classList.remove('d-none');
  activeContent.classList.add('active');
}