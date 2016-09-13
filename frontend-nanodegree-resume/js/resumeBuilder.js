var i,j;

var bio = {
        "name" : "Srivalli",
        "role": "WebDeveloper",
        "contacts": {
            "mobile": "9177496662",
            "email": "valli.sri1996@gmail.com",
            "github": "valli96",
            "location": "India"
        },
        "welcomeMessage": "Hello!!!",
        "skills": ["Creative", "Artistic"],
        "biopic" : "./images/fry.jpg"
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
            "school" : "Udacity",
            "title": "Front End Nano Degree",
            "dates": "1-2-16",
            "url": "udacity.com"
        },
        {
            "school" :"Udacity",
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
    
    $("#header").append(HTMLskillsStart);
    for(i=0;i<bio.skills.length;i++)
    {
        
        var formattedSkill= HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkill);
        
    }
    
  
};



 work.display= function()
{
for(var i=0;i<work.jobs.length;i++)
{
    
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
     var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[i].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle ;
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDates=HTMLworkDates.replace("%data", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
    
    var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);
    }

};



projects.display = function() {
    for(var i=0;i< projects.projects.length;i++)
        {

            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);            
            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);
            
            if (projects.projects[i].images.length > 0)
                {
                    for(j=0;j< projects.projects[i].images.length;j++)
                        {
                            
                            var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
                            $(".project-entry:last").append(formattedImage);
                            
                        }
                }
        }
};




education.display= function()
{
    for(i=0;i<education.schools.length;i++)
        {
          
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[i].name);
            var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",education.schools.location);
            var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.schools[i].degree);
            var formattedSchoolDates=HTMLschoolDates.replace("%data%",education.schools[i].dates);
            
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,formattedSchoolDates,formattedSchoolLocation);
        }
    $(".education-entry:last").append(HTMLonlineClasses);
        for(i=0;i<education.onlineCourses.length;i++) {
            if (education.onlineCourses.hasOwnProperty(i)) {
                $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school));
                formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[i].url));
                
                $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates));
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





$("#mapDiv").append(googleMap);
