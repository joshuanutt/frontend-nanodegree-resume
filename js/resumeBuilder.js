var formattedName = HTMLheaderName.replace("%data%", "Joshua Nutt");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
	"welcomeMessage": "Hey everybody, thank you for checking out my site.  Hope you enjoy it as much as I enjoyed making it!",
	"skills" : ["Awesomness", "Delivering Things", "Cryogenic Sleep", "Saving the Universe"],
	"bioPic": "images/fry.jpg"
}

var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMsg);

var mainPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(mainPic);


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
			"location": "Work from home",
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
			"description": "Create webpage to sell product from a mock pdf page.  I was required to acheive <8% mismatch",
		},
		{
			"title": "Not a real Project",
			"dates": "September 1942",
			"description": "This is a filler entry",
		}
	]
}

var education = {
	"school": [
		{
			"name": "Tarrant County College",
			"location": "Arlington, TX",
			"major": "Not Completed",
			"date": "2012-2014",
			"url": "tccd.edu"
		},
		{
			"name": "Udacity",
			"location": "Online",
			"major": "Front-End Web Development",
			"date": "2014-2015",
			"url": "udacity.com"
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


/* Function to add work history */
/*function displayWork() {	

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
}*/

work.display = function(){
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

/* Encapsulate display within projects object
   Display project information */
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
			for (image in projects.project[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
		}
	  }
	}
}

projects.display();

// Click Tracking //
$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});



/* Internationalize Feature
   Capitalizes last name and first lettter of first name. */
function inName(nameString) {
	var splitName = nameString.split(" ");
	console.log(splitName);
	var firstName = splitName[0];
	var lastName = splitName[1];

	firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
	lastName = lastName.toUpperCase();

	var newName = firstName + " " +lastName;
	console.log(newName);
	return newName;

}
$('#main').append(internationalizeButton);
/* */
$('#mapDiv').append(googleMap);


