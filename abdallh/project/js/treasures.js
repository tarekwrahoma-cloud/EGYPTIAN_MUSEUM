var treasures = [
    {
        name: "Golden Mask of Tutankhamun",
        category: "",
        material: "Gold, Lapis Lazuli",
        period: "New Kingdom",
        date: "c. 1323 BC",
        image: "images/tutankhamuns-mask-golden-mask-of-pharaoh-ancient-egypt.webp",
        page: "Tutankhamun.html"
    },
    {
        name: "Golden Throne of Tutankhamun",
        category: "",
        material: "Wood, Gold Leaf, Glass",
        period: "New Kingdom",
        date: "c. 1332-1323 BC",
        image: "images/20.jpeg",
        page: "golden-throne.html"
    },
    {
        name: "Canopic Jars of Tutankhamun",
        category: "",
        material: "Calcite (Egyptian Alabaster)",
        period: "New Kingdom",
        date: "c. 1323 BC",
        image: "images/21.jpeg",
        page: "canopic-jars.html"
    },
    {
        name: "Scarab Pectoral of Amenhotep III",
        category: "",
        material: "Gold, Lapis Lazuli, Carnelian",
        period: "New Kingdom",
        date: "c. 1390-1352 BC",
        image: "images/22.jpeg",
        page: "scarab-pectoral.html"
    },
    {
        name: "Bust of Nefertiti",
        category: "",
        material: "Limestone, Stucco",
        period: "New Kingdom",
        date: "c. 1345 BC",
        image: "images/Queen-Nefertiti-6.webp",
        page: "nefertiti.html"
    },
    {
        name: "Ankh Amulet",
        category: "",
        material: "Gold, Faience",
        period: "New Kingdom",
        date: "c. 1550-1070 BC",
        image: "images/23.jpeg",
        page: "ankh-amulet.html"
    },
    {
        name: "Rosetta Stone",
        category: "",
        material: "Granodiorite",
        period: "Ptolemaic Period",
        date: "196 BC",
        image: "images/24.jpeg",
        page: "rosetta-stone.html"
    },
    {
        name: "Diadem of Princess Sithathoryunet",
        category: "",
        material: "Gold, Carnelian, Feldspar",
        period: "Middle Kingdom",
        date: "c. 1887-1813 BC",
        image: "images/25.jpeg",
        page: "diadem.html"
    }
];

localStorage.setItem("treasures", JSON.stringify(treasures));
var treasureList = JSON.parse(localStorage.getItem("treasures"));

var treasuresGrid = document.getElementById("treasuresGrid");
var activeCategory = "all";

function displayTreasures(list) {

    treasuresGrid.innerHTML = "";

    if (list.length === 0) {
        treasuresGrid.innerHTML = `<p class="text-center w-100 py-5 text-muted">No treasure matches your search.</p>`;
        return;
    }

    for (let i = 0; i < list.length; i++) {

        treasuresGrid.innerHTML += `
        <div class="col-lg-4 col-md-6 col-12 d-flex pharoh_card">

            <article class="artifact-card bg-white overflow-hidden position-relative">

                <div class="artifact-image"
                     style="background-image: url(${list[i].image});">
                    <span class="dynasty-badge">${list[i].category}</span>
                </div>

                <div class="artifact-content">
                    <h3 class="artifact-title">${list[i].name}</h3>
                    <p class="artifact-dynasty"><i class="fa-solid fa-gem me-1"></i>${list[i].material}</p>
                    <p class="artifact-date"><i class="fa-solid fa-calendar-days me-1"></i>${list[i].date} &middot; ${list[i].period}</p>
                </div>

                <div class="More text-center w-100">
                    
                </div>

            </article>

        </div>
        `;
    }
}

function applyFilters() {
    var searchText = document.getElementById("searchInput").value.toLowerCase();

    var filtered = treasureList.filter(function (t) {
        var matchesSearch = t.name.toLowerCase().includes(searchText);
        var matchesCategory = activeCategory === "all" || t.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    displayTreasures(filtered);
}

displayTreasures(treasureList);

document.getElementById("searchInput").addEventListener("input", applyFilters);

var categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        categoryButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-category");
        applyFilters();
    });
});
