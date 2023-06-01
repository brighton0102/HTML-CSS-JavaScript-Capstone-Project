async function api() {
    const response = await fetch("./utils/capstone.json");
    const jsonData = await response.json();
    jsonData.data.capstone.forEach((element, index) => {
        const cardTemplate = `
            <div class="specialist-info">
                <img src=${element.img} alt=${element.img + index}>
                <article class="specialist-info-container">
                    <h3 class="specialist-name">${element.name}</h3>
                        <p class="specialist-title">${element.title}</p>
                    <p>${element.description}</p>
                </article>
            </div>
        `;

        const el = document.querySelector(".specialist-cards");
        el.innerHTML += cardTemplate;
        
    });
}

api();