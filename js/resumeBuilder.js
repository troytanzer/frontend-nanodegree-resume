var work = {"jobs":[
    {"employer":"AMD",
     "title":"Member of Technical Staff",
     "location":"Austin, TX",
     "dates":"1999-2010",
     "description":"Process Engineer supporting semiconductor manufacturing tools and APC Engineer writing control applications for manufacturing tools"
    },
    {"employer":"Globalfoundries",
     "title":"Member of Technical Staff",
     "location":"Malta, NY",
     "dates":"2010-2012",
     "description":"Manufacturing Technology programmer, writing, deploying and supporting enterprise applications to support manufacturing operations"
    },
    {"employer":"Freescale",
     "title":"Member of Technical Staff",
     "location":"Austin, TX",
     "dates":"2012-Present",
     "description":"APC engineer responsible for designing, developing, deploying and supporting APC application to control  semiconductor processing"
    }
]}


var projects = {"projects":[
    {"title":"Sustaining engineering at AMD",
     "dates":"1999-2001",
     "description":"Support production on a day to day basis for the CMP, Etch and Think Films areas, troubleshooting problems, overseeing maintenance tasks, coordinating scheduling, identifying areas for efficiency improvements and conducting DOE for process enhancements",
     "images":[]
    },
    {"title":"APC Engineer at AMD",
     "dates":"2003-2007",
     "description":"Work with manufacturing engineers to determine requirements, and then design, develop, test and deploy solutions for APC (Advanced Process Control) to automate manufacturing processes and improve manufactuability of all products in the factory",
     "images":[]
    },
    {"title":"Expat for Dresden factory startup at AMD",
     "dates":"2001-2003",
     "description":"For initial fab ramp up of our Dresden, Germany factory, moved to Dresden to support onboarding on new employees, training and mentoring.  Also facilitated communication between the Dresden and Austin factories.",
     "images":[]
    },
    {"title":"Manufacturing Software Engineer at AMD/Global Foundries",
     "dates":"2007-2012",
     "description":"Met with customers to gather requirements, design, develop and implement various manufacturing software for the production of semiconductor products. Mostly JBoss/J2EE based solutions with reporting and data analysis functions.",
     "images":[]
    }
]
}
var bio= {"name":"Troy Tanzer",
	 "role":"Code Monkey",
	 "welcomeMessage":"Looking for challenging and interesting opportunities",
	 "contacts":{
	     "email":"ttanzer@dresdentexans.net",
	     "mobile":"518-860-8254",
	     "location":"Round Rock, TX",
	     "twitter":"@troytanzer"
	 },
	  "skills":["java","python","tcl","backend servers","heisenbug discovery", "troubleshooting","server maintenance", "automation"]
}
var education= {"schools":[
    {"name":"Harvey Mudd College",
     "location":"Claremont, CA",
     "degree":"BS",
     "majors":["Chemistry"],
     "dates":"1900-1994",
     "url":"http://hmc.edu"
    },
    {"name":"UIUC",
     "location":"Urbana, IL",
     "degree":"PhD",
     "majors":["Analytical Chemistry","Material Science"],
     "dates":"1994-1999",
     "url:":"http://uiuc.edu"
    }],
    "onlineCourses":[
	{"title":"Javascript Basics",
	 "school":"Udacity",
	 "dates":"2014",
	 "url":"http://udacity.com"
	},
	{"title":"Artificial Intelligence",
	 "school":"Udacity",
	 "dates":"2010",
	 "url":"http://udacity.com"
	},
	{"title":"Building a self driving car",
	 "school":"Udacity",
	 "dates":"2011",
	 "url":"http://udacity.com"
	},
	{"title":"Debugging programs",
	 "school":"Udacity",
	 "dates":"2012",
	 "url":"http://udacity.com"
	}]
}
$("#main").append(HTMLheaderName.replace("%data%",bio.name));
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skillno in bio.skills) {
	$("#skills").append(HTMLskills.replace("%data%",bio.skills[skillno]));
    }
}
function displayWork() {
    $("#workExperience").append(HTMLworkStart);
    for (job in work.jobs) {
	var formattedJobs = "";
	formattedJobs  = formattedJobs + HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	formattedJobs = formattedJobs + HTMLworkTitle.replace("%data%",work.jobs[job].title);
	formattedJobs = formattedJobs + HTMLworkDates.replace("%data%",work.jobs[job].dates);
	formattedJobs = formattedJobs + HTMLworkLocation.replace("%data%",work.jobs[job].location);
	formattedJobs = formattedJobs + HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedJobs);
    }
}

displayWork();

$(document).click(function(loc) {
    console.log("x location :" + loc.pageX);
});

$("#main").append(internationalizeButton);
function inName() {
    var name = bio.name;
    nameParts = name.split(" ");
    firstname = nameParts[0].slice(0,1).toUpperCase() + nameParts[0].slice(1).toLowerCase();
    lastname = nameParts[1].toUpperCase();
    return firstname + " " + lastname;
}

projects.display = function () {
    for (proj in this.projects) {
	console.log(this.projects[proj]);
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",this.projects[proj].title));
	$(".project-entry:last").append(HTMLprojectDates.replace("%data%",this.projects[proj].dates));
	$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",this.projects[proj].description));
    }
}
projects.display();
$("#mapDiv").append(googleMap);
