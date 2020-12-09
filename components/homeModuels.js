const aboutmeTag = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/assets/manager.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>Who Am I ?</h5>" +
        "<p class='card-text'>" +
        " Hello! I am Saurabh a full stack web-developer based in New Delhi. I design and build websites for fun and also for money." +
        "</p>" +
        "</div>" +
        "</div>";

const skillsTag = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/assets/skills2.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>My Skills </h5>" +
        "<p class='card-text'>" +
        "As a full stack web-developer I dont have money but what i do have is a very peticular set of skills which can be very useful to you. If you contact me just remember I will reach out to you and I will help you." +
        "</p>" +
        "<form action='/skills' method='GET'>" +
        "<button class='btn btn-outline-danger cardbtn ' type='submit'>CHECK-ALL</button>" +
        "</form>" +
        "</div>" +
        "</div>";

const projectsTag = "<div class='card ' style='width: 18rem; '>" +
        "<img class='card-img-top' src='/assets/project3.png'  alt='Card image cap' />" +
        "<div class='card-body'>" +
        "<h5 class='card-title font-weight-bold'>My Projects</h5>" +
        "<p class='card-text'>" +
        " Check out some of  my personal projects and after that you decide if I am good enough for the work you want to get done." +
        "</p>" +
        "<form action='/projects' method='GET'>" +
        "<button class='btn btn-outline-danger cardbtn ' type='submit'>PROJECTS</button>" +
        "</form>" +
        "</div>" +
        "</div>";

        module.exports = {
        	aboutmeTag,
        	skillsTag,
        	projectsTag
        }