function formattedAttribute(html, attributeValue) {
  return html.replace("%data%", attributeValue);
}

var bio = {
  name: 'Mihir Parikh',
  role: 'Full-stack software developer',
  contacts: {
    mobile: '206-794-3643',
    email: 'mihir787@gmail.com',
    github: 'https://github.com/mihir787',
    location: 'Denver, CO'
  },
  welcomeMessage: 'Welcome to My Interactive Resume',
  skills: [
    'Ruby', 'Ruby on Rails', 'JavaScript', 'Test Driven Development',
    'Object Oriented Design', 'SQL', 'HTML5', 'CSS3', 'Backbone.js',
    'Pair-programming'
  ],
  biopic: 'images/mihir_picture.png',
  display: function() {
    var formattedMobile = formattedAttribute(HTMLmobile, this.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = formattedAttribute(HTMLemail, this.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = formattedAttribute(HTMLgithub, this.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedLocation = formattedAttribute(HTMLlocation, this.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    $("#header").append(formattedAttribute(HTMLwelcomeMsg, this.welcomeMessage));

    $("#header").append(formattedAttribute(HTMLbioPic, this.biopic));

    if (this.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      this.skills.forEach(function(skill) {
        $("#skills").append(formattedAttribute(HTMLskills, skill));
      });
    }

    $("#header").prepend(formattedAttribute(HTMLheaderRole, this.role));
    $("#header").prepend(formattedAttribute(HTMLheaderName, this.name));
  }
};

var education = {
  schools: [{
      name: 'University of Washington',
      location: 'Seattle, WA',
      degree: 'Bachelor of Science',
      majors: ['Molecular Biology'],
      dates: '2008-2012',
      url: 'https://www.washington.edu/'
    },
    {
      name: 'Turing School of Software and Design',
      location: 'Denver, CO',
      degree: 'Certificate in Web Application Development',
      majors: ['N/A'],
      dates: '02/2015-08/2015',
      url: 'https://www.turing.io/'
    },
  ],
  onlineCourses: [{
    title: 'Frontend Nanodegree',
    school: 'Udacity',
    dates: '05/2017-Present',
    url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }],
  display: function() {
    //schools
    this.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);
      var formattedNameAndDegree = formattedAttribute(HTMLschoolName, school.name) + formattedAttribute(HTMLschoolDegree, school.degree);

      $(".education-entry:last").append(formattedNameAndDegree);

      $(".education-entry:last").append(formattedAttribute(HTMLschoolDates, school.dates));

      $(".education-entry:last").append(formattedAttribute(HTMLschoolLocation, school.location));

      if (school.majors.length > 0) {
        school.majors.forEach(function(major) {
          $(".education-entry:last").append(formattedAttribute(HTMLschoolMajor, major));
        });
      }
    });
    //online classes
    $('#education').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      $('#education').append(HTMLschoolStart);

      var formattedTitleAndSchool = formattedAttribute(HTMLonlineTitle, course.title) + formattedAttribute(HTMLonlineSchool, course.school);
      $(".education-entry:last").append(formattedTitleAndSchool);

      $(".education-entry:last").append(formattedAttribute(HTMLonlineDates, course.dates));

      $(".education-entry:last").append(formattedAttribute(HTMLonlineURL, course.url));
    });
  }
};

var work = {
  jobs: [{
      employer: 'American Thrombosis and Hemostasis Network',
      title: 'Full-stack software developer',
      location: 'Denver, CO',
      dates: '08/2015-Present',
      description: 'Ruby on Rails and JavaScript developer'
    },
    {
      employer: 'Group Health Research Institute',
      title: 'Research Specialist',
      location: 'Seattle, WA',
      dates: '12/2012-05/2014',
      description: 'Worked on Phase II Vaccine Clinical Trials.'
    },
  ],
  display: function() {
    this.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);

      var formettedEmployerTitle = formattedAttribute(HTMLworkEmployer, job.employer); + formattedAttribute(HTMLworkTitle, job.title);
      $(".work-entry:last").append(formettedEmployerTitle);

      $(".work-entry:last").append(formattedAttribute(HTMLworkDates, job.dates));
      $(".work-entry:last").append(formattedAttribute(HTMLworkLocation, job.location));

      $(".work-entry:last").append(formattedAttribute(HTMLworkDescription, job.description));
    });
  }
};

var projects = {
  projects: [{
      title: 'Marvel.us',
      dates: '2015',
      description: 'Ruby on Rails application that analyzes tweets to match users with a superhero.',
      images: ['images/rsz_marvelus_small.png'],
    },
    {
      title: 'Hipster Bytes',
      dates: '2015',
      description: 'E-commerce site: select items, add to cart, and checkout.',
      images: ['images/rsz_hipster_bytes_small.png'],
    },
    {
      title: 'Phonatics',
      dates: '2015',
      description: 'Pivoted Hipster Bytes into a multi-tenant stock photography site.',
      images: ['images/rsz_phonatics_small.png'],
    },
    {
      title: 'mihirparikh.co',
      dates: '2015',
      description: 'Personal website',
      images: ['images/rsz_personal_website_small.png'],
    }
  ],
  display: function() {
    this.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);

      $(".project-entry:last").append(formattedAttribute(HTMLprojectTitle, project.title));

      $(".project-entry:last").append(formattedAttribute(HTMLprojectDates, project.dates));

      $(".project-entry:last").append(formattedAttribute(HTMLprojectDescription, project.description));

      if (project.images.length > 0) {
        project.images.forEach(function(image) {
          $(".project-entry:last").append(formattedAttribute(HTMLprojectImage, image));
        });
      }
    });
  },
};

bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
