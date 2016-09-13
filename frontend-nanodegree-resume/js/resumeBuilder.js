

var bio = {
        "name" : "Srivalli",
        "role": "WebDeveloper",
        "contacts": {
            "mobile": 9177496662,
            "email": "valli.sri1996@gmail.com",
            "github": "valli96",
            "location": "India"
        },
        "welcomeMessage": "Hello!!!",
        "skills": ["Creative", "Artistic"],
        "biopic" : "../images/fry.jpg"
    };


var education = {
    
        "schools": [
            {   
          "name": "Vikas the concept School",
          "location": "Bachupally,Hyderabad",
          "degree": "SSC 10th Board",
          "majors": ["Maths","Science","Social","English","Hindi","Telugu"],
          "dates": "2016",
          "url": "example.com"
           },
            {    
          "name": "Vikas the concept School",
          "location": "Bachupally,Hyderabad",
          "degree": "SSC 10th Board",
          "majors": ["Maths","Science","Social","English","Hindi","Telugu"],
          "dates": "2016",
          "url": "example.com"
          }
        ],
    "onlineCourses":
    [
        {
            "title": "Front End Nano Degree",
            "dates": "1-2-16",
            "url": "udacity.com"
        },
        {
            "title": "Front End Nano Degree",
            "dates": "1-2-16",
            "url": "udacity.com"
        }
    ]
};


var work =
    {
        "jobs" :
        [
            {
                "employer" : "School of students",
                "title": "Web designer",
                "location": "hyderabad",
                "dates": "12-3-16",
                "description": "Developing web based applications and their web applications."
            },
            {
                "employer": "School of students",
                "title": "Web designer",
                "location": "India",
                "dates": "12-3-16",
                "description": "Developing web based applications and their web applications."
            }
        ]
        
    };
var projects=
{
    "projects":
    [
        {
            "title": "My portfolio",
            "dates": "12-34-16",
            "description": "About me",
            "images": ["../images/fry.jpg","../images/fry.jpg"]
        },
        {
            "title": "My portfolio",
            "dates": "12-34-16",
            "description": "About me",
            "images": ["../images/fry.jpg","../images/fry.jpg"]
        }
    ]
    
};

bio.display= function()
{
    var formattedName= HTMLheaderName.replace("%data%",bio.name);
    var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
    var formattedPic=HTMLbioPic.replace("%data%",bio.biopic);
    var formattedMessage=HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName,formattedRole);
    
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);
    
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 
  var formattedContacts = formattedEmail + formattedMobile + formattedGithub;
  $(" #topContacts").append(formattedContacts);
    $("#footerContacts").append(formattedContacts);
    
    if (bio.skills.length>0)
    {
        $("#header").append(HTMLskillsStart);
        var formattedSkill= HTMLskills.replace("%data%",bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill= HTMLskills.replace("%data%",bio.skills[1]);
        $("#skills").append(formattedSkill);
        
    }
    
  
};


 work.display= function()
{
for(var job in work.jobs)
{
    if(work.jobs[job].length>0){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
     var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle ;
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDates=HTMLworkDates.replace("%data", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    }
}
};



projects.display = function() {
    for(var project in projects.projects)
        {
            if(projects.projects[project]>0){
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);            
            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            
            if (projects.projects[project].images.length > 0)
                {
                    for(var image in projects.projects[project].images)
                        {
                            if( projects.projects[project].images[image].length>0){
                            var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                            $(".project-entry:last").append(formattedImage);
                            }
                        }
                }
        }
        }
};




education.display= function()
{
    for ( var school in education.schools)
        {
          if( education.schools[school].length>0){
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[school].name);
            var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
            var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            var formattedSchoolDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
            
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,formattedSchoolDates,formattedSchoolLocation);
        }
        }
    $(".education-entry:last").append(HTMLonlineClasses);
        for ( var edu in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(edu)) {
                formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[edu].url));
                $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[edu].dates));
            }
        }
};



bio.display();
work.display();
projects.display();
education.display();


$(document).click(function(loc){
                  
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x,y);
                  });


function inName(name)
{
 name= name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);
