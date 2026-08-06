    var sites = {
      alexandria: {
        name: "Alexandria",
        region: "Mediterranean Coast, Lower Egypt",
        era: "Ptolemaic Period, founded 331 BC",
        desc: "Founded by Alexander the Great, Alexandria became the intellectual capital of the ancient world, home to its Great Library and the Lighthouse of Pharos — one of the Seven Wonders of the Ancient World.",
        link: { text: "See Cleopatra VII", href: "cleopatra-vii.html" }
      },
      giza: {
        name: "Giza & Cairo",
        region: "Nile Delta edge, Lower Egypt",
        era: "Old Kingdom, c. 2560 BC",
        desc: "Home to the Great Pyramids and the Sphinx, Giza was the royal necropolis of the Old Kingdom and remains the single most recognizable site in Egyptian history.",
        link: { text: "See the Golden Mask", href: "Tutankhamun.html" }
      },
      saqqara: {
        name: "Saqqara",
        region: "Necropolis of Memphis, Lower Egypt",
        era: "Old Kingdom, c. 2670 BC",
        desc: "Saqqara holds the Step Pyramid of Djoser — the earliest large-scale stone monument in Egypt, and the direct ancestor of the true pyramids at Giza.",
        link: null
      },
      luxor: {
        name: "Luxor (Ancient Thebes)",
        region: "Upper Egypt",
        era: "New Kingdom capital, c. 1550-1070 BC",
        desc: "Once the religious and political capital of Egypt, Luxor holds Karnak Temple, Luxor Temple, and — across the river — the Valley of the Kings, burial ground of Tutankhamun and Ramesses II.",
        link: { text: "See Ramesses II", href: "ramesses-ii.html" }
      },
      aswan: {
        name: "Aswan",
        region: "Southern border, Upper Egypt",
        era: "Trade hub since the Old Kingdom",
        desc: "Egypt's southern gateway and gatekeeper of trade with Nubia, Aswan was the source of granite used in monuments across the country, including many royal statues and obelisks.",
        link: null
      },
      abusimbel: {
        name: "Abu Simbel",
        region: "Nubia, far south",
        era: "New Kingdom, c. 1264 BC",
        desc: "Ramesses II carved two colossal rock temples here to mark Egypt's southern frontier — later moved, block by block, in the 1960s to save them from the rising waters of Lake Nasser.",
        link: { text: "See Ramesses II", href: "ramesses-ii.html" }
      }
    };

    var markers = document.querySelectorAll(".marker");
    var infoPanel = document.getElementById("infoPanel");
    var chipsWrap = document.getElementById("siteChips");

    function renderInfo(key) {
      var s = sites[key];
      if (!s) return;

      markers.forEach(function(m){ m.classList.toggle("active", m.getAttribute("data-site") === key); });
      document.querySelectorAll(".chip").forEach(function(c){ c.classList.toggle("active", c.getAttribute("data-site") === key); });

      infoPanel.innerHTML =
        '<span class="eyebrow">Site</span>' +
        '<h2>' + s.name + '</h2>' +
        '<div class="meta">' +
          '<span><i class="fa-solid fa-location-dot"></i>' + s.region + '</span>' +
          '<span><i class="fa-solid fa-clock-rotate-left"></i>' + s.era + '</span>' +
        '</div>' +
        '<p class="desc">' + s.desc + '</p>' +
        (s.link ? '<a class="related-link" href="' + s.link.href + '">' + s.link.text + '</a>' : '');
    }

    markers.forEach(function(m){
      var key = m.getAttribute("data-site");
      m.addEventListener("click", function(){ renderInfo(key); });
      m.addEventListener("keydown", function(e){
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); renderInfo(key); }
      });
    });

    Object.keys(sites).forEach(function(key){
      var btn = document.createElement("button");
      btn.className = "chip";
      btn.setAttribute("data-site", key);
      btn.textContent = sites[key].name;
      btn.addEventListener("click", function(){ renderInfo(key); });
      chipsWrap.appendChild(btn);
    });
