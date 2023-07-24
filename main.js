import("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")

let myProjects = [
    {
        id: 1,
        name: "TechIt",
        description: '"TechIt" is a web electronic shop',
        image: "./images/Techit.jpg",
        link: "https://techit-kate.netlify.app/"
    },
    {
        id: 2,
        name: "MyAccount",
        description: 'Manage your incomes and expenses',
        image: "./images/MyAccount.png",
        link: "https://myaccount-kate.netlify.app"
    },
    {
        id: 3,
        name: "ManageU",
        description: 'Manage your tasks in one place',
        image: "./images/ManageU.png",
        link: "https://manageu-kate.netlify.app/"
    }
]

function projectsSlider() {
    for (let i = 0; i < myProjects.length; i++) {
        document.getElementById("projectsSlides").innerHTML += `
        <div class="slide">
            <div class="card" id="${myProjects[i].id}">
                <img src="${myProjects[i].image}" class="card-img-top" alt="${myProjects[i].name}" style="max-height: 35vh">
                <div class="card-body">
                    <h5 class="card-title">${myProjects[i].name}</h5>
                    <p class="card-text">${myProjects[i].description}</p>
                    <a href="${myProjects[i].link}" target="_blank" class="btn btn-primary">Go to site</a>
                </div>
            </div>
        </div>
      
        
        `
    }
}
projectsSlider();


function contactMe() {
    document.getElementById("contactForm").innerHTML += `
<div class="row justify-content-center mt-3">
    <div class="col-md-8">
        
            <div class="row justify-content-evenly">
                <div class="col-6 mb-3">
                    <label for="firstName" class="form-label">First name:</label>
                    <input type="text" class="form-control" id="firstName">
                </div>
                <div class="col-6 mb-3">
                    <label for="lastName" class="form-label">Last name:</label>
                    <input type="text" class="form-control" id="lastName">
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="phoneNumber" class="form-label">Phone number:</label>
                <input type="text" class="form-control" id="phoneNumber">
            </div>
            <div class="mb-3">
                <label for="textArea" class="form-label">Message:</label>
                <textarea class="form-control" id="textArea" rows="3"></textarea>
            </div>
            <div class="text-center mb-2">
                <button type="submit" class="btn btn-primary" style="width: 150px">Send</button>  
            </div>
    </div> 
</div>


`;
}
contactMe();