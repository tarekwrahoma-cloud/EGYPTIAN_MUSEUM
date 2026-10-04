var pharaohs = [
  {
    name: "Tutankhamun",
    dynasty: "18th Dynasty",
    period: "New Kingdom",
    date: "1332–1323 BC",
    material: "Gold, Wood, Semi-precious stones",
    foundIn: "Valley of the Kings (KV62)",
    image: "images/Tutankhamun.png",
    description: "The young pharaoh whose nearly intact tomb was discovered in 1922 by Howard Carter. His death mask became one of the most famous artifacts in history.",
    didYouKnow: "Tutankhamun was only about 9 years old when he became pharaoh!",
    video:"https://www.youtube.com/shorts/mnJpL3EyjZc"

  },
  {
    name: "Hatshepsut",
    dynasty: "18th Dynasty",
    period: "New Kingdom",
    date: "c. 1478–1458 BC",
    material: "Limestone, Granite, Sandstone",
    foundIn: "Deir el-Bahari, Luxor",
    image: "images/WhatsApp Image 2026-08-06 at 2.32.36 AM.jpeg",
    description: "The Mortuary Temple of Hatshepsut is a masterpiece of ancient architecture. Built into the sheer cliffs of Deir el-Bahari, it features three massive terraces connected by long ramps, reflecting her powerful and prosperous reign.",
    didYouKnow: "Hatshepsut was one of the few female pharaohs and wore a false beard to assert her authority!"
  },
  {
    name: "Nefertiti",
    dynasty: "18th Dynasty",
    period: "New Kingdom",
    date: "1370–1330 BC",
    material: "Limestone, Painted stucco",
    foundIn: "Amarna",
    image: "images/nefirtiti.jpeg",
    description: "The Great Royal Wife of Akhenaten, famous for her beauty and the iconic bust discovered in 1912.",
    didYouKnow: "Nefertiti's name means 'the beautiful one has come'!"
  },
  {
    name: "Ramesses II",
    dynasty: "19th Dynasty",
    period: "New Kingdom",
    date: "1279–1213 BC",
    material: "Granite, Sandstone",
    foundIn: "Abu Simbel and various temples",
    image: "images/3033.webp",
    description: "Also known as Ramesses the Great. One of Egypt's most powerful and longest-reigning pharaohs.",
    didYouKnow: "Ramesses II lived to about 90 years old and had over 100 children!"
  },
  {
    name: "Akhenaten",
    dynasty: "18th Dynasty",
    period: "New Kingdom (Amarna Period)",
    date: "1353–1336 BC",
    material: "Sandstone, Painted Limestone",
    foundIn: "Karnak / Amarna",
    image: "images/5555.webp",
    description: "Originally Amenhotep IV, he introduced the exclusive worship of the sun disc Aten.",
    didYouKnow: "He moved Egypt's capital to a new city called Akhetaten (modern Amarna)!"
  },
  {
    name: "Thutmose III",
    dynasty: "18th Dynasty",
    period: "New Kingdom",
    date: "1479–1425 BC",
    material: "Granite, Diorite",
    foundIn: "Karnak / Thebes",
    image: "images/thutos.jpeg",
    description: "Known as the Napoleon of Egypt for his military genius and empire expansion.",
    didYouKnow: "He recorded the details of his battles on the walls of Karnak Temple!"
  },
  {
    name: "Cleopatra VII",
    dynasty: "Ptolemaic Dynasty",
    period: "Ptolemaic Period",
    date: "51–30 BC",
    material: "Marble, Bronze",
    foundIn: "Alexandria",
    image: "images/7.jpeg",
    description: "The last active ruler of Ptolemaic Egypt, famous for her intelligence and political skill.",
    didYouKnow: "Cleopatra spoke at least 9 languages and was the first Ptolemaic ruler to learn Egyptian!"
  }
];

var params = new URLSearchParams(window.location.search);
var pharaohName = params.get("name");

var selected = pharaohs.find(p => p.name === pharaohName);

if (selected) {
  document.getElementById("pharaohName").textContent = selected.name;
  document.getElementById("pharaohImage").src = selected.image;
  document.getElementById("pharaohImage").alt = selected.name;
  document.getElementById("pharaohDynasty").textContent = selected.dynasty;
  document.getElementById("pharaohPeriod").textContent = selected.period;
  document.getElementById("pharaohDate").textContent = selected.date;
  document.getElementById("pharaohMaterial").textContent = selected.material;
  document.getElementById("pharaohFoundIn").textContent = selected.foundIn;
  document.getElementById("pharaohDescription").textContent = selected.description;
  document.getElementById("pharaohDidYouKnow").textContent = selected.didYouKnow;
  document.getElementById("pharaohVideo").href = selected.video;
}