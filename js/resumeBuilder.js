
var bio = {
	"name": "Joshua",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(682) 425 5555",
		"email" : "joshuadnutt@gmail.com",
		"github": "www.github.com/joshuanutt",
		"location": "Mansfield, TX"
	},
	"welcomeMessage": "<span id='highlight'>Hello, my name is Josh!</span> I'm currently studying <span id='highlight'>web development</span> at Udacity. I absolutely love <span id='highlight'>responsive design,</span> and can't wait to become a professional web developer.",
	"workMessage": "Here you will find some of my <span id='highlight'>projects</span> and <span id='highlight'>work experience.</span>",
	"personalMessage": "I've spent most of my life in the DFW metroplex, but <span id='highlight'>I'm willing to relocate</span> almost anywhere.",
	"skills" : ["Javascript", "jQuery", "HTML", "CSS"],
	"bioPic": "images/fry.jpg"
}

displayContact = function(){
	for (contact in bio.contacts) {
		var contact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact])
		$("#letsConnect:last").append(contact);
	}
}
displayContact();

var mainPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(mainPic);

var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMsg);

var workMsg = HTMLworkMsg.replace("%data%", bio.workMessage);
$("#work-header").append(workMsg);

var personalMsg = HTMLpersonalMsg.replace("%data%", bio.personalMessage);
$("#personal-header").append(personalMsg);

var work = {
	"jobs": [ 
		{   
			"employer": "Lowes Home Improvement",
			"title": "Receiving Associate",
			"location": "Mansfield, TX",
			"dates": "September 2014 - Current",
			"description": "Stocking freight, unloading trucks, general labor and providing exceptional customer service!",
			"url": "lowes.com"
		},
		
		{
			"employer": "Telenetwork",
			"title": "Tech Support Rep",
			"location": "Arlington, TX",
			"dates": "Jan 6th 2014 - Sept 2014",
			"description": "Provided customer service and tech support over the phone for a major internet service provider.",
			"url": "telenetwork.com"
		},

		{
			"employer": "Walmart",
			"title": "Receiving Associate",
			"location": "Arlington, TX",
			"dates": "May 2013 - Aug 2013",
			"description": "Provided customer service, unloaded trucks, and maintained good inventory practices. Left to go back to TCC.",
		},

		{
			"employer": "Lenders Recourse Inc",
			"title": "Spotter car driver",
			"location": "Burleson, TX",
			"dates": "September 2012 - Jan 2013",
			"description": "I was responsible for driving a company car all over the DFW metroplex while searching for cars to repossess. Left because the company closed.",
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Project One",
			"dates": "December 2014",
			"description": "Create webpage to sell product from a mock pdf page.  I was required to acheive <8% mismatch.",
			"images": ["images/doge-cookie.jpg"],
			"id": "projectOne"
		},
		{
			"title": "Not a real Project",
			"dates": "September 1900",
			"description": "This is a filler entry",
			"images": ["images/sleepy.jpg"],
			"id": "notReal"
		},
		{
			"title": "Meme Generator",
			"dates": "November 2013",
			"description": "I can't find the source code for this project, but when I do this will be a real entry",
			"images": ["images/sleepy.jpg"],
			"id": "memeGenerator"
		},
		{
			"title": "Another Filler",
			"dates": "December 1900",
			"description": "This is a filler entry",
			"images": ["images/sleepy.jpg"],
			"id": "alsoNotReal"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Udacity",
			"location": "Mansfield, TX",
			"major": "Front-End Web Development",
			"dates": "2014-2015",
			"url": "udacity.com"
		},
		{
			"name": "Tarrant County College",
			"location": "Arlington, TX",
			"major": "Not Completed",
			"dates": "2012-2014",
			"url": "tccd.edu"
		}

	]
}

var i = 0;
$("#header").append(HTMLskillsStart);

while (bio.skills.length > i) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
	i = i + 1;

}

work.display = function() {	

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

education.display = function() {	

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

	}
}
education.display();


$('#mapDiv').append(googleMap);

projects.display = function() {
	/* TODO: create modal and fill it 
	1) Get modal to work on all buttons */
	for (project in projects.projects) {
		// Add button
		var getID = String(projects.projects[project].id);
		var formattedButton = modalButton.replace("%data%", projects.projects[project].title).replace("%content%", projects.projects[project].id);
		$("#projects").append(formattedButton);

		// Create the div that contains the modal information
		var formattedDiv = modalDiv.replace("%data%", projects.projects[project].title); 
		$(".trigger-button:last").append(formattedDiv);
		// Append content to div
		var myContent = projects.projects[project].description;
		$(".modal-content:last").append(myContent);

		var triggerButton = document.getElementById(getID);

		triggerButton.addEventListener('click', function() {
		      myModal.open();
		});
		
	}
	
}

projects.display();



