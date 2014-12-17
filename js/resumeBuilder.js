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
	"welcomeMessage": "Hey everybody!",
	"skills" : ["Awesomness", "Delivering Things", "Cryogenic Sleep", "Saving the Universe"],
	"bioPic": "images/fry.jpg"
}

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
	"fromMock": {
		"description": "Create webpage to sell product from mock",
		"goals": ["Achieve less than 8% mismatch", "Write clean code!" ],
		"status": "Completed"
	}

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



for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);

}


