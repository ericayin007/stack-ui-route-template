# README #

### IBM Stack Template1 - AngularJS UI-Router ###

![ui-route.jpg](https://bitbucket.org/repo/BgkpA7G/images/2038686077-ui-route.jpg)

Stack exploring and self-learning workshop on the subject topic - AngularJS UI-Router. This app demonstrates an UI Router.

Note:  There is a prerequisite to attend workshop1 (Stack Foundation Workshop1 - Node.js Setup Connection) before exploring workshop2 and beyond.

### What is this repository for? ###

* Objective:

    Learn to develop an UI Router.
    Learn to apply user entry form control.
    Learn form control and features with JavaScript on app functions

* Goal:

    Setup both client and server side for the app
    Design and code client-side UI
    Code client-side JavaScript app functions
    Start server
    Launch web browser for exploration

* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

* Procedure:

Download the package source code provided (tmpl_ui-route.zip)

    Setup both client and server side for an app
        Create a local new folder
        Download the above zip source code and unzip onto the new folder created.
         
    Design and code client-side UI
        Launch Visual Studio and navigate to /client/app/index.html
        This index.html reviews the client-side web browser view.
         
    Code client-side JavaScript on app functions
        Using the Visual Studio and navigate to /client/app/app.js and multiple /client/app/page directory.
        This app.js and controller review the client-side JavaScript app functions.
         
    Start server
        Launch a CLI (Command Line Interface), i.e Window Powershell
        Navigate to above Item1 created new folder with the source code unzip.
        Initialize server-side Express/Path (package.json) via typing at the command prompt:
            - npm install
        /* Initialize client-side Bootstrap/Angular (bower.json) via typing at the command prompt:
            - bower install */
        Note: Above "bower install" command is no longer needed to execute as it runs simultaneous, incorporated the script within npm installation package.
        Start the server application via typing at the command prompt:
            - nodemon
             
    Launch web browser for exploration
        Launch a web browser via typing on the URL: (strongly recommend Google Chrome for development)
            http://localhost:8000/index.html
        Ready to explore.

Note:  Ensure that the "Application started..." message appears on the PowerShell CLI to confirm the server runs before web browser (client-side) can launch successful.

===== End of README =====