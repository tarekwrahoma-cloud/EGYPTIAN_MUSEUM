const timelineItems = document.querySelectorAll('.timeline-item');
const periodContents = document.querySelectorAll('.period-content');

const itemsArray = Array.from(timelineItems);
const contentsArray = Array.from(periodContents);

for (let i = 0; i < itemsArray.length; i++) {
  itemsArray[i].addEventListener('click', function() {
    
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