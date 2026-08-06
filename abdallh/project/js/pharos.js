var pharos=[
   {
    name: "Tutankhamun",
        gender: "male",
        dynasty: "18th Dynasty",
        period: "New Kingdom",
        date: "1323 BC",
        image: "images/tutankhamuns-mask-golden-mask-of-pharaoh-ancient-egypt.webp",
        page: "Tutankhamun.html"
    },
    {
        name: "Hatshepsut",
        gender: "female",
        dynasty: "18th Dynasty",
        period: "New Kingdom",
        date: "1479-1458 BC",
        image: "images/Queen-Hatshepsut-History-Egypt-Tours-Portal.webp",
        page: "Hatshepsut.html"
    },
    {
        name: "Nefertiti",
        gender: "female",
        dynasty: "18th Dynasty",
        period: "New Kingdom",
        date: "1370–1330 BC",
        image: "images/Queen-Nefertiti-6.webp",
        page: "Nefertiti.html"
    },
    {
        name: "Ramesses II",
        gender: "male",
        dynasty: "19th Dynasty",
        period: "New Kingdom",
        date: "1279-1213 BC",
        image: "images/3033.webp",
        page: "ramses_two.html"
    },
    {
        name: "Akhenaten",
        gender: "male",
        dynasty: "18th Dynasty",
        period: "New Kingdom",
        date: "1353-1336 BC",
        image: "images/5555.webp",
        page: "Akhenaten.html"
    },
    {
        name: "Thutmose III",
        gender: "male",
        dynasty: "18th Dynasty",
        period: "New Kingdom",
        date: "1479-1425 BC",
        image: "images/thuhotmo3.webp",
        page: "thutmose_three.html"
    },
    {
        name: "Cleopatra VII",
        gender: "female",
        dynasty: "Ptolemaic Dynasty",
        period: "Ptolemaic Period",
        date: "51-30 BC",
        image: "images/cleopatraIIV.webp",
        page: "cleopatraVII.html"
    }
];

localStorage.setItem("pharaohs", JSON.stringify(pharos));
console.log(pharos)
var pharaohs = JSON.parse(localStorage.getItem("pharaohs"));
console.log(pharaohs)


var artifactsGrid = document.getElementById("artifactsGrid");
// display
function displayPharaohs(list) {

    artifactsGrid.innerHTML = "";

    for (let i = 0; i < list.length; i++) {

        artifactsGrid.innerHTML += `
        <div class="col-lg-4 col-md-6 col-12 d-flex p-5 pharoh_card">
<a href="${list[i].page}" class="link">
            <article class="artifact-card bg-white mt-4 overflow-hidden position-relative">

                <div class="artifact-image"
                     style="background-image: url(${list[i].image});">
                </div>

                <div class="artifact-content">
                    <h3 class="artifact-title">${list[i].name}</h3>
                    <p class="artifact-dynasty">${list[i].dynasty}</p>
                    <p class="artifact-date">${list[i].date}</p>
                </div>

                <div class="More text-center w-100">
                    
                    
                </div>

            </article>
</a>
        </div>
        `;
    }
}

displayPharaohs(pharaohs);


// search
var searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    var searchText = searchInput.value.toLowerCase();

    var filtered = [];

    for (let i = 0; i < pharaohs.length; i++) {

        if (pharaohs[i].name.toLowerCase().includes(searchText)) {

            filtered.push(pharaohs[i]);

        }
    }

    displayPharaohs(filtered);

});
