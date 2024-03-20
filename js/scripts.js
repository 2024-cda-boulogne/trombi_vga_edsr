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

const key = 'pgdNIeiA9riZaGOUspQU';

const map = L.map('map').setView([xMap, yMap], zoom);
const mtLayer = L.maptilerLayer({
apiKey: key,
style: L.MaptilerStyle.BACKDROP, // optional
}).addTo(map);

const mapStyleBtns = document.querySelectorAll(".map-style");
mapStyleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".map-btn-active").classList.toggle("map-btn-active");
        let style = L.MaptilerStyle.BACKDROP;
        switch (btn.id)
        {
            case 'backdrop':
                style = L.MaptilerStyle.BACKDROP;
            break;
            case 'basic':
                style = L.MaptilerStyle.BASIC;
            break;
            case 'bright':
                style = L.MaptilerStyle.BRIGHT;
            break;
            case 'dataviz':
                style = L.MaptilerStyle.DATAVIZ;
            break;
            case 'landscape':
                style = L.MaptilerStyle.LANDSCAPE;
            break;
            case 'ocean':
                style = L.MaptilerStyle.OCEAN;
            break;
            case 'openstreetmap':
                style = L.MaptilerStyle.OPENSTREETMAP;
            break;
            case 'outdoor':
                style = L.MaptilerStyle.OUTDOOR;
            break;
            case 'satellite':
                style = L.MaptilerStyle.SATELLITE;
            break;
            case 'streets':
                style = L.MaptilerStyle.STREETS;
            break;
            case 'toner':
                style = L.MaptilerStyle.TONER;
            break;
            case 'topo':
                style = L.MaptilerStyle.TOPO;
            break;
            case 'winter':
                style = L.MaptilerStyle.WINTER;
            break;
        }
        mtLayer.setStyle(style);
        btn.classList.toggle("map-btn-active");
    });
});


const nav = document.querySelector("#nav");
const carousel = document.querySelector(".carousel");

carousel.addEventListener("wheel", (e) => {
    let move = e.deltaY;
    nav.scrollLeft += move;
});

const previousStyle = document.querySelector("#previousStyle");
const nextStyle = document.querySelector("#nextStyle");
previousStyle.addEventListener("click", () => {
    nav.scrollLeft -= 100;
});
nextStyle.addEventListener("click", () => {
    nav.scrollLeft += 100;
});

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
                hobbies: {
                    0: "Jeux vidéo",
                    1: "Guitare",
                },
                github:    "viviengajac",
                linkedin:  "vivien-gajac-b43a0b2a2",
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
                hobbies: {
                    0: "Jeux vidéo",
                },
                github:    "notlimai",
                linkedin:  "william-truant-b57b92244",
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
                hobbies: {
                    0: "Jeux vidéo",
                    1: "Programmation",
                    2: "Musique",
                },
                github:    "kevin-ledez",
                linkedin:  "kevin-ledez/",
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
                hobbies: {
                    0: "Piano",
                    1: "Cinéma",
                },
                github:    "jblavisse",
                linkedin:  "jblavisse",
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
                hobbies: {
                    0: "Musculation",
                    1: "Jeux video",
                },
                github:    "Theo02-12",
                linkedin:  "théo-couvelard-4089111b5/",
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
                hobbies: {
                    0: "Basket-ball",
                },
                github:    "Geoffrey184",
                linkedin:  "geoffrey-noel-093683269/",
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
                hobbies: {
                    0: "Jeux vidéo",
                    1: "Formule 1"
                },
                github:    "Karl-Gavois",
                linkedin:  "karl-gavois/",
                stacks: {
                           1: "React",
                           2: "Symfony",
                },
            },
            1: {
                firstname: "Eric",
                lastname:  "Da Silva Rocha",
                image:     "Eric.png",
                hobbies: {
                    0: "Jeux vidéo",
                },
                github:    "Ericdsr",
                linkedin:  "eric-da-silva-rocha/",
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
                hobbies: {
                    0: "Jeux vidéo",
                    1: "Peinture"
                },
                github:    "Merlinovitch",
                linkedin:  "alexandre-merlin-82a395a8/",
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
                hobbies: {
                    0: "Jeux vidéo",
                    1: "Cinéma",
                    2: "Animé",
                },
                github:    "Yokokorico",
                linkedin:  "théo-duflos-8625a8262/",
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
                hobbies: {
                    0: "Programmation",
                    1: "Café",
                },
                github:    "nicolas-herbez",
                linkedin:  "nicolas-herbez-hdf/",
                stacks: {
                           1: "PHP",
                           2: "Symfony",
                           3: "JS",
                },
            },
        },
    },
};

const flagIcon = L.icon({
    iconUrl: 'img/flag.png',
    shadowUrl: 'img/flag-shadow.png',

    iconSize:     [69, 95], // size of the icon
    shadowSize:   [82, 55], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [9, 55],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

for (const [key, value] of Object.entries(markers))
{
    let plural = "";
    if (Object.keys(value['people']).length > 1) plural ="s";
    const devCount = `<b>${(value['name'])}</b> : ${Object.keys(value['people']).length} Développeur${plural}`;
    
    const peopleCount = Object.keys(value['people']).length;
    let marker = L.marker([value['x'], value['y']], {
        opacity: .85,
        riseOnHover: true,
        icon: flagIcon,
    })
    .addTo(map)
    .bindTooltip(devCount);
};

window.addEventListener("click", (e) => {
    switch (e.target.id)
    {
        case "modal":
        case "closeModal":
            modal.classList.toggle("hidden");
            deleteAllCards();
        break;
        case "":
            if (e.target.classList.contains("leaflet-marker-icon"))
            {
                popModal(e.target.title);
            }    
        break;
    }
});

const deleteAllCards = () => {
    const cards = document.querySelector(".cards");
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
}
const popModal = (city) => {
    hydrateModal(city);
    modal.classList.toggle("hidden");
};

const hydrateModal = (city => {

    document.querySelector("#modal-city-name").textContent = markers[city]["name"];
    const stackImages = {
        HTML:    "html-1.svg",
        CSS:     "w3_css-icon.svg",
        JS:      "javascript-1.svg",
        PHP:     "PHP-logo.svg.png",
        MySQL:   "mysql-logo-svgrepo-com.svg",
        Angular: "Angular_full_color_logo.svg.png",
        React:   "React-icon.svg.png",
        Symfony: "symfony-logo.png",
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

    let i = 0;

    for (const [key, value] of Object.entries(markers[city]["people"])) {
// console.log(value)
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("style", `--i: ${i}s`);
        i+=.25;

        let cardTop = document.createElement("div");
        let cardBottom = document.createElement("div");

        let picture = document.createElement("img");
        picture.setAttribute("src", `img/${value["image"]}`);

        let hobbies = document.createElement("div");
        hobbies.classList.add("hobbies");
        let hobbiesTitle = document.createElement("p");
        hobbiesTitle.textContent = "Les hobbies";
        hobbies.appendChild(hobbiesTitle);
        for (const [key, hobby] of Object.entries(value["hobbies"])) {
            let newHobby = document.createElement("p");
            newHobby.textContent = hobby;
            hobbies.appendChild(newHobby);
        }
        
        let title = document.createElement("h3");
        title.textContent = `${value["firstname"]} ${value["lastname"]}`;

        let socialMedias = document.createElement("div");
        socialMedias.classList.add("social-medias");
        let github = document.createElement("a");
        github.setAttribute("href", `https://github.com/${value["github"]}`);
        github.setAttribute("target", "_blank");
        github.classList.add("github");
        let linkedin = document.createElement("a");
        linkedin.setAttribute("href", `https://linkedin.com/in/${value["linkedin"]}`);
        linkedin.setAttribute("target", "_blank");
        linkedin.classList.add("linkedin");
        
        socialMedias.appendChild(github);
        socialMedias.appendChild(linkedin);

        let stacksTitle = document.createElement("p");
        stacksTitle.textContent = "Les stacks";

        let stacks = document.createElement("div");
        stacks.classList.add("stacks");

        for (const [key, stack] of Object.entries(value["stacks"])) {
            // console.log(stack);
            // console.log(`img/${stackImages[stack]}`);
            let newStack = document.createElement("img");
            newStack.classList.add("small-img");
            newStack.setAttribute("src", `img/${stackImages[stack]}`);
            switch (stack)
            {
                case "Symfony":
                case "nextjs":
                    newStack.classList.add("white-stack");
                break;
                case "PHP":
                    newStack.classList.add("big-stack");
                break;
                
                case "MySQL":
                    newStack.classList.add("mysql");
                    newStack.classList.add("big-stack");
                break;
            }
            stacks.appendChild(newStack);
        }

        cardTop.appendChild(picture);
        cardTop.appendChild(hobbies);
        cardBottom.appendChild(title);
        cardBottom.appendChild(socialMedias);
        cardBottom.appendChild(stacksTitle);

        card.appendChild(cardTop);
        card.appendChild(cardBottom);
        card.appendChild(stacks);

        cards.appendChild(card);
    };
});