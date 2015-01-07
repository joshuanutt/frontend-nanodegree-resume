/*var formattedName = HTMLheaderName.replace("%data%", "Joshua Nutt");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var bio = {
	"name": "Joshua",
	"role": "Web Developer",
	"contacts": {
		"mobile": "555-555-5555",
		"email" : "me@example.com",
		"github": "me",
		"twitter": "@me",
		"location": "dallas"
	},
	"welcomeMessage": "<span id='intro'>Hello, my name is Josh!</span> I'm currently studying <span id='intro'>web development</span> at Udacity. I absolutely love <span id='intro'>responsive design,</span> and can't wait to make websites professionally.",
	"skills" : ["Javascript", "jQuery", "HTML", "CSS"],
	"bioPic": "images/fry.jpg"
}
var mainPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(mainPic);

var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMsg);

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
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Project One",
			"dates": "December 2014",
			"description": "Create webpage to sell product from a mock pdf page.  I was required to acheive <8% mismatch.",
			"images": ["images/doge-cookie.jpg"]
		},
		{
			"title": "Not a real Project",
			"dates": "September 1900",
			"description": "This is a filler entry",
			"images": ["images/sleepy.jpg"]
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
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
		}
	  }
	}
}

projects.display();



