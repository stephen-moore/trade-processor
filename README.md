# Trade Board & Processor

This is an application used to process and read data from a MySQL database, built with React Frontend, PHP and MySQL Backend.
Bootstrap is used for styling elements.

The React application runs on http://localhost:3000

The PHP backend should be running on http://localhost:80


## Environment Setup
Quick Start:
1. Download GitHub Repo
2. Download xampp distribution at https://www.apachefriends.org/index.html, \
Install with all default settings.
3. Open the xampp control panel and run both apache and mysql. \
Once started, click the admin button under mysql. \
Click the import button and select the database.sql file to import. \
The database has now been setup with the required tables. 
4. Copy the tradeProcessor php folder to C:\xampp\htdocs
5. Ensure Apache is running in xampp. The server should now be running.
6. To setup the frontend, you will need to install node.js https://nodejs.org/en/download/. \
This will allow you to use node package manager in your cli.\
Run **npm install** to install all dependencies.\
Run the ui with **npm start** in the folder with package.json. \
You should now be able to navigate to localhost:3000 where the UI will be running. 


Database connection setting are configured in the connect.php file

## POSTING TO THE API
To post data for processing, post the json data to the following url: http://localhost/tradeProcessor/add.php

Sample JSON Data:
{"userId":"134256", "currencyFrom": "EUR", "currencyTo": "GBP", "amountSell": 1000, "amountBuy": 747.10, "rate": 0.7471, "timePlaced": "24-JAN-18 10:27:44", "originatingCountry": "GB"}

You can post data to the api from the frontend application by going to http://localhost:3000/add

## RETRIEVING DATA FROM THE API
The application retrieves the json encoded data from http://localhost/tradeProcessor/view.php

This is then rendered on the frontend of the React app on http://localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm install`

Install dependencies, creates node_modules folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### My approach to building this application
- I first started by installing React and setting up landing page.
- I then created the navigation menu and added react routing to the project.
- Setup my environment to run my Apache, PHP & MySQL installation.
- Next I created a database and setup the trades table.
- I created a connect.php file which contains the connection credentials and makes the connection to the database.
- I created add.php file which receives a JSON post, decodes and sanitizes the data. posts the sanitized data into the database.
- The view.php file does a select all from the trades table. It encodes the results in json array.
- Using axios I retrieved the data from the view.php and rendered in the ViewTrades React Component.
- On the AddTrade component, I used axios again to post data to add.php file.
- I added react-bootstrap to style the application.
- I added a react-toastify to add a nice Toast message when  add trade form is submitted.
- Added some unit tests to check that certain elements get rendered on the page.
