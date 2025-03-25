
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.png"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images for  use:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);

// Content for solutions
const resourceObject = {
    solarSolution: {
        headingContent: "Solar Solutions",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis, diam eget porta rutrum, turpis lectus condimentum nunc, posuere mattis nisi ipsum non lorem. Etiam egestas orci eget vestibulum sagittis. Aenean ex nunc, accumsan nec ante a, porta varius leo. Ut dolor dolor, gravida eu nisl in, congue sodales mi. Pellentesque vehicula egestas lacus at vehicula. Fusce tortor ligula, mattis vitae tellus in, imperdiet faucibus ante. Praesent placerat ex non ornare congue. Vestibulum bibendum rutrum velit, ac ullamcorper erat finibus vel. Ut eu aliquam nisi. Integer scelerisque ante in placerat venenatis. Sed quis eros posuere, faucibus enim quis, faucibus felis.",
        imgUrl: "./img/img-1.jpg",
        imgAlt: "Solar Panel Installation"
    },
    windSolution: {
        headingContent: "Wind Efficiency Innovations",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis, diam eget porta rutrum, turpis lectus condimentum nunc, posuere mattis nisi ipsum non lorem. Etiam egestas orci eget vestibulum sagittis. Aenean ex nunc, accumsan nec ante a, porta varius leo. Ut dolor dolor, gravida eu nisl in, congue sodales mi. Pellentesque vehicula egestas lacus at vehicula. Fusce tortor ligula, mattis vitae tellus in, imperdiet faucibus ante. Praesent placerat ex non ornare congue. Vestibulum bibendum rutrum velit, ac ullamcorper erat finibus vel. Ut eu aliquam nisi. Integer scelerisque ante in placerat venenatis. Sed quis eros posuere, faucibus enim quis, faucibus felis.",
        imgUrl: "./img/img-2.jpg",
        imgAlt: "Residential Wind Turbine"
    },
    efficiencySolution: {
        headingContent: "Energy Saving Programs",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis, diam eget porta rutrum, turpis lectus condimentum nunc, posuere mattis nisi ipsum non lorem. Etiam egestas orci eget vestibulum sagittis. Aenean ex nunc, accumsan nec ante a, porta varius leo. Ut dolor dolor, gravida eu nisl in, congue sodales mi. Pellentesque vehicula egestas lacus at vehicula. Fusce tortor ligula, mattis vitae tellus in, imperdiet faucibus ante. Praesent placerat ex non ornare congue. Vestibulum bibendum rutrum velit, ac ullamcorper erat finibus vel. Ut eu aliquam nisi. Integer scelerisque ante in placerat venenatis. Sed quis eros posuere, faucibus enim quis, faucibus felis.",
        imgUrl: "./img/img-3.jpg",
        imgAlt: "Energy Efficiency Audit"
    }
};

// Get references
const buttons = document.querySelectorAll('.solution-buttons button');
const contentContainer = document.getElementById('solution-content');


function handleSelection(event) {

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

   
    event.target.classList.add('active');


    let selectedContent;
    switch(event.target.id) {
        case 'solution1':
            selectedContent = resourceObject.solarSolution;
            break;
        case 'solution2':
            selectedContent = resourceObject.windSolution;
            break;
        case 'solution3':
            selectedContent = resourceObject.efficiencySolution;
            break;
    }


    contentContainer.innerHTML = `
        <h2>${selectedContent.headingContent}</h2>
        <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
        <p>${selectedContent.bodyText}</p>
    `;
}

// Loading initial conten;
window.addEventListener('load', () => {
   
    contentContainer.innerHTML = `
        <h2>${resourceObject.solarSolution.headingContent}</h2>
        <img src="${resourceObject.solarSolution.imgUrl}" alt="${resourceObject.solarSolution.imgAlt}">
        <p>${resourceObject.solarSolution.bodyText}</p>
    `;
});


buttons.forEach(button => {
    button.addEventListener('click', handleSelection);
});