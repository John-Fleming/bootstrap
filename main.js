const ducks = [
    {
        color: 'blue',
        isRubber: true,
        gender: 'female',
        isMigratory: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Regina',
        imageUrl: 'https://m.media-amazon.com/images/I/51WEvgpXwYL._SR500,500_.jpg'
    },
    {
        color: 'yellow',
        isRubber: true,
        gender: 'male',
        isMigratory: false,
        socialStatus: 'happily married',
        diet: 'carnivore',
        age: 20,
        featherNum: 1,
        name: 'Steve',
        imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/500x659/products/498/10249/Yellow-Rubber-Duck-Ad-Line-3__46410.1569184121.jpg?c=2'
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'male',
        isMigratory: true,
        socialStatus: 'recently widowed',
        diet: 'carnivore',
        age: 72,
        featherNum: 30,
        name: 'Albert',
        imageUrl: 'https://pbs.twimg.com/profile_images/2685375868/bcc1c9d669b396a59b0a37d69d69525f.jpeg'
    },
    {
        color: 'yellow',
        isRubber: false,
        gender: 'female',
        isMigratory: true,
        socialStatus: "it's complicated",
        diet: 'kito',
        age: 39,
        featherNum: 50,
        name: 'Lucinda',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1SCxROXXXXXXcapXXq6xXFXXXQ/Animal-series-Yellow-duck-On-a-wooden-barrel-2D-print-creative-Pillow-case-Square-cotton-polyester.jpg'
    },
    {
        color: 'white',
        isRubber: true,
        gender: 'female',
        isMigratory: true,
        socialStatus: "betrothed",
        diet: 'taco bell',
        age: 18,
        featherNum: 0,
        name: 'Samantha',
        imageUrl: 'https://images.squarespace-cdn.com/content/59698a7d29687fd47a2a7c52/1503197682875-R447L8LSE0Q9L7EKKL9D/image-asset.jpeg?content-type=image%2Fjpeg'
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'male',
        isMigratory: false,
        socialStatus: "afraid of others",
        diet: 'bread',
        age: 25,
        featherNum: 100,
        name: 'Brett',
        imageUrl: 'https://i.pinimg.com/originals/29/c5/b8/29c5b87479d30e7ae81be8fe347db7c3.jpg'
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'male',
        isMigratory: true,
        socialStatus: "just needs his bros",
        diet: 'fish',
        age: 30,
        featherNum: 5,
        name: 'Chad',
        imageUrl: 'https://images.squarespace-cdn.com/content/59698a7d29687fd47a2a7c52/1514687447190-5T3YFV28M014HJ8MEPVM/image-asset.jpeg?content-type=image%2Fjpeg'
    },
    {
        color: 'yellow',
        isRubber: true,
        gender: 'male',
        isMigratory: false,
        socialStatus: "life of the party",
        diet: 'cookies',
        age: 8,
        featherNum: 0,
        name: 'Tim',
        imageUrl: 'http://sc01.alicdn.com/kf/HTB1ymB8gnnI8KJjSszgq6A8ApXar/Interesting-Design-PVC-Big-Yellow-Duck-Inflatable.jpg'
    }
];

// filter by color, isRubber, and Gender

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const duckCardCreator = (quackers) => {
    let domString = '';
    for (let i = 0; i < quackers.length; i++) {
        domString += '<div class="col-md-6 col-lg-4">';
        domString += '<div class="card">';
        domString += `  <img src=${quackers[i].imageUrl} class="card-img-top" alt="...">`;
        domString += '  <div class="card-body">';
        domString += `      <h5 class="card-title">${quackers[i].name}</h5>`;
        domString += `      <p class="card-text">${quackers[i].socialStatus}</p>`;      
        domString += `      <p class="card-text">${quackers[i].diet}</p>`;
        domString += '  </div>';
        domString += '</div>';
        domString += '</div>';
    }
    printToDom('ducks-container', domString);
};



const chooseGender = (e) => {
    const buttonId = e.target.id;
    const selectedGender = [];
    for (let i = 0; i < ducks.length; i++) {
        if (ducks[i].gender === buttonId) {
            selectedGender.push(ducks[i]);
        }
    } 
    duckCardCreator(selectedGender);
};

const chooseRubber = () => {
    const selectedDuck = [];
    for (let i = 0; i < ducks.length; i++) {
        if (ducks[i].isRubber) {
            selectedDuck.push(ducks[i]);
        }
    } 
    duckCardCreator(selectedDuck);
};

const chooseColor = (e) => {
    const buttonId = e.target.id;
    const filteredDucks = [];
    for (let i = 0; i < ducks.length; i++) {
        if (ducks[i].color === buttonId) {
            filteredDucks.push(ducks[i]);
        }
    }
    duckCardCreator(filteredDucks);
};

const events = () => {
    document.getElementById('yellow').addEventListener('click', chooseColor);
    document.getElementById('blue').addEventListener('click', chooseColor);
    document.getElementById('white').addEventListener('click', chooseColor);
    document.getElementById('female').addEventListener('click', chooseGender);
    document.getElementById('male').addEventListener('click', chooseGender);
    document.getElementById('rubber').addEventListener('click', chooseRubber);
};


const init = () => {
    duckCardCreator(ducks);
    events();
};

init();