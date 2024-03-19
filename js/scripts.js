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
            0: {
                firstname: "Vivien",
                lastname:  "Gajac",
                image:     "vivien.png",
                stacks: {
                           0: "JS",
                           1: "PHP",
                           2: "MySQL",
                           3: "Symfony",
                },
            },
            1: {
                firstname: "William",
                lastname:  "Truant",
                image:     "William.png",
                stacks: {
                           0: "Symfony",
                           1: "React",
                },
            },
        },
    },
    Desvres: {
        name:   "Desvres",
        x:      50.666672,
        y:      1.83333,
        people: {
            0: {
                firstname: "Kevin",
                lastname:  "Ledez",
                image:     "kevin.png",
                stacks: {
                           1: "Symfony",
                           2: "Angular",
                },
            },
        },
    },
    Ecques: {
        name:   "Ecques",
        x:      50.666672,
        y:      2.28333,
        people: {
            0: {
                firstname: "Jean-Baptiste",
                lastname:  "Lavisse",
                image:     "JB.jpg",
                stacks: {
                           1: "nextjs",
                           2: "vue",
                           5: "React",
                           6: "Symfony",
                },
            },
        },
    },
    LaCappelleLesBoulogne: {
        name:   "La Cappelle lès Boulogne",
        x:      50.73333,
        y:      1.7,
        people: {
            0: {
                firstname: "Théo",
                lastname:  "Couvelard",
                image:     "theo_C.webp",
                stacks: {
                           1: "nextjs",
                           2: "express",
                           3: "nodejs",
                           4: "typescript",
                },
            },
        },
    },
    Marquise: {
        name:   "Marquise",
        x:      50.816669,
        y:      1.7,
        people: {
            0: {
                firstname: "Geoffrey",
                lastname:  "Noel",
                image:     "Geoffrey.webp",
                stacks: {
                           1: "React",
                           2: "Symfony",
                },
            },
        },
    },
    Outreau: {
        name:   "Outreau",
        x:      50.700001,
        y:      1.58333,
        people: {
            0: {
                firstname: "Karl",
                lastname:  "Gavois",
                image:     "Karl.webp",
                stacks: {
                           1: "React",
                           2: "Symfony",
                },
            },
            1: {
                firstname: "Eric",
                lastname:  "Da Silva Rocha",
                image:     "Eric.png",
                stacks: {
                           1: "React",
                           2: "Symfony",
                },
            },
        },
    },
    SaintAndreLesLille: {
        name:   "Saint-André-lez-Lille",
        x:      50.66097900,
        y:      3.04773600,
        people: {
            0: {
                firstname: "Alexandre",
                lastname:  "Merlin",
                image:     "Alex_M.png",
                stacks: {
                           1: "dotnet",
                           2: "React",
                           3: "Angular",
                           4: "Csharp",
                },
            },
        },
    },
    SaintEtienneAuMont: {
        name:   "Saint-Étienne-au-Mont",
        x:      50.666672,
        y:      1.61667,
        people: {
            0: {
                firstname: "Théo",
                lastname:  "Duflos",
                image:     "Theo_D.png",
                stacks: {
                           1: "Angular",
                           2: "Java",
                           3: "dotnet",
                },
            },
        },
    },
    Samer: {
        name:   "Samer",
        x:      50.633333,
        y:      1.75,
        people: {
            0: {
                firstname: "Nicolas",
                lastname:  "Herbez",
                image:     "Nicolas.jpg",
                stacks: {
                           1: "PHP",
                           2: "Symfony",
                           3: "JS",
                },
            },
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

    const stackImages = {
        HTML:    "html-1.svg",
        CSS:     "w3_css-icon.svg",
        JS:      "javascript-1.svg",
        PHP:     "PHP-logo.svg.png",
        MySQL:   "mysql-logo-svgrepo-com.svg",
        Angular: "Angular_full_color_logo.svg.png",
        React:   "React-icon.svg.png",
        Symfony: "symfony-original-icon-512x512-ay9yzmde.png",
        Java:    "Java_Logo.svg",
        dotnet:  "Microsoft_.NET_Logo.svg.png",
        Csharp:  "Logo_C_sharp.svg",
        nextjs:  "next-js.svg",
        vue:     "Vue.js_Logo_2.svg",
        express: "expressjs-icon.svg",
        django:  "django.svg",
        typescript: "Typescript_logo_2020.svg.png",
        nodejs:    "node.png",
    }
    const cards = document.querySelector(".cards");

    for (const [key, value] of Object.entries(markers[city]["people"])) {
// console.log(value)
        let card = document.createElement("div");
        card.classList.add("card");

        let cardTop = document.createElement("div");

        let picture = document.createElement("img");
        picture.setAttribute("src", `img/${value["image"]}`);

        let title = document.createElement("h3");
        title.textContent = `${value["firstname"]} ${value["lastname"]}`;

        let stacksTitle = document.createElement("p");
        stacksTitle.textContent = "Les stacks";

        let stacks = document.createElement("div");
        stacks.classList.add("stacks");

        for (const [key, stack] of Object.entries(value["stacks"])) {
            console.log(stack);
            console.log(`img/${stackImages[stack]}`);
            let newStack = document.createElement("img");
            newStack.classList.add("small-img");
            newStack.setAttribute("src", `img/${stackImages[stack]}`);

            stacks.appendChild(newStack);
        }

        cardTop.appendChild(picture);
        cardTop.appendChild(title);
        cardTop.appendChild(stacksTitle);

        card.appendChild(cardTop);
        card.appendChild(stacks);

        cards.appendChild(card);
    };
});