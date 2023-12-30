// ProjectsContent.js

const projectsData = [
    {
        title: "Galaga",
        description: "Arcade style space shooter game.",
        date: "2023-08-13",
        dependencies: "Python, OpenCV, Tensorflow, MediaPipe, AWS (EC2), Unity, C#",
        projectOverview: "There are not enough resources that convey STEM-related concepts and terminology for students who are Deaf or Hard of Hearing." +
        "Using Computer Vision, I used a method to track a students hand and recognize their gesture to determine the word they are spelling" + 
        "The recognized word that was spelled is sent to a Unity app which determines whether the student correctly spelled the word or not." + 
        "During this process, the student is able to play a Galaga/Space Invaders type game where the goal is to destroy all the enemies on screen" +
        "When the student requires a power-up a simple click of the button displays the STEM word that needs to be finger-spelled in sign language",
        whatILearned: ["Implemented MediaPipe (which uses Tensorflow) to recognize hand landmarks from a continuous video-stream",
                        "Trained a Keras model to recognize custom hand gestures that was fed into a csv file",
                        "Created an Amazon EC2 (Elastic Compute Cloud) instance to run a Python server on AWS.",
                        "Experimented with TCP and UDP sockets to send data from the server to Unity",
                        "Developed a Galaga game using C# and Unity Editor to create an engaging user experience"], 
        githubLink: "https://github.com/aneesh-123/MLUnityGameASLAspire",
    },
    {
        title: "The Runoff Report",
        description: "Polluted Stormwater Tracker",
        date: "2022-07-15",
        dependencies: "HTML, CSS, Javascript, Leaflet, ArcGIS THIS IS A TEST",
        projectOverview: "The Runoff Report is a tool created to plan green infrastructure projects. When it rains, stormwater runs off of" +
                         "buildings and picks up micropollutants like arsenic, lead, zinc that can contaminate our sewage systems and harm " +
                         "aquatic life. I created the Runoff Report to calculate the amount of pollution that a certain building or urban region "+
                         "produces to determine the best location for green infrastructure",
        whatILearned: ["Utilized Leaflet.js to display maps for users to pick any region available in the world",
                       "Worked with HTML and CSS to style and format the webpage so that it could be hosted on Github pages smoothly",
                       "Implemented Machine Learning algorithms to calculate the flow direction of water based on topography",
                       "Gained an in-depth understanding of gradients in relation to Calculus to configure flow direction and speed"],
        projectLink: "https://aneesh-123.github.io/",
        githubLink: "https://github.com/aneesh-123/aneesh-123.github.io",
        visualLink: "https://aneesh-123.github.io/"
    },
    {
        title: "Exerhelp",
        description: "Exercise Form Tracker",
        date: "2021-03-14",
        dependencies: "OpenCV, Python, Tensorflow THIS IS A TEST",
        projectOverview: "Exerhelp won first place at MenloHacks. It is created to track the form of a user's completion of a bicep curl " + 
                        "and assign an accuracy score to it. Based on ",
        whatILearned: ["Developed skills in game logic..."],
        projectLink: "https://galaga.example.com",
        githubLink: "https://github.com/galaga",
        visualLink: "https://visuals-galaga.example.com"
      },
    // ... more projects
  ];
  
  export default projectsData;
  