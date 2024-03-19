// coord:zoom - laptop: 50.716671, 1.95:11 ; mobile: 50.716671, 1.9:9

const modal = document.querySelector("#modal");

let xMap;
let yMap;
let zoom;

if (window.innerWidth > 680)
{
    xMap = 50.716671;
    yMap = 2.2;
    zoom = 10.4;
} else {
    xMap = 50.716671;
    yMap = 2.3;
    zoom = 8;
}
let map = L.map('map').setView([xMap, yMap], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markers = {
    BoulogneSurMer: {
        name:   "Boulogne-sur-Mer",
        x:      50.716671,
        y:      1.61667,
        people: {
            VivienGajac: {
                firstname: "Vivien",
                lastname:  "Gajac",
                image:     "",
                stack: {
                           0: "HTML",
                           1: "CSS",
                           2: "JS",
                           3: "PHP",
                           4: "MySQL",
                           5: "Symfony",
                },
            },
        },
    },
    Desvres: {
        name:   "Desvres",
        x:      50.666672,
        y:      1.83333,
        people: {

        },
    },
    Ecques: {
        name:   "Ecques",
        x:      50.666672,
        y:      2.28333,
        people: {

        },
    },
    LaCappelleLesBoulogne: {
        name:   "La Cappelle lès Boulogne",
        x:      50.73333,
        y:      1.7,
        people: {

        },
    },
    Marquise: {
        name:   "Marquise",
        x:      50.816669,
        y:      1.7,
        people: {

        },
    },
    Outreau: {
        name:   "Outreau",
        x:      50.700001,
        y:      1.58333,
        people: {

        },
    },
    SaintAndreLesLille: {
        name:   "Saint-André-lez-Lille",
        x:      50.66097900,
        y:      3.04773600,
        people: {

        },
    },
    SaintEtienneAuMont: {
        name:   "Saint-Étienne-au-Mont",
        x:      50.666672,
        y:      1.61667,
        people: {

        },
    },
    Samer: {
        name:   "Samer",
        x:      50.633333,
        y:      1.75,
        people: {

        },
    },
};

for (const [key, value] of Object.entries(markers))
{
    let marker = L.marker([value['x'], value['y']])
    .addTo(map)
    .bindPopup(`
        <p class="city-name">${value['name']}</p>
        <button class="see-more" data-city="${key}">Voir plus</button>
    `);
};

window.addEventListener("click", (e) => {
    switch (e.target.id)
    {
        case "modal":
        case "closeModal":
            modal.classList.toggle("hidden");
        break;
        case "":
            switch (e.target.className)
            {
                case "see-more":
                    popModal(e.target.dataset.city);
                break;
            }    
        break;
    }
});

const popModal = (city) => {
    hydrateModal(city);
    modal.classList.toggle("hidden");
};

const hydrateModal = (city => {
    Object.entries(markers[city]['people']).forEach(entry => {
        let card = document.createElement("div");
        card.classList.add("card");

        let picture = document.createElement("div");
        picture.classList.add("card-picture");
        picture.style.backgroundImage = `url("assets/images/${entry["image"]})`;
    });
});