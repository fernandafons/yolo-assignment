# Yolo Front-end Assignment

## The assignment
The objective of the project was to create a user interface that showcases mocked data related to games and users in an engaging and visually appealing manner. The design aimed to provide a seamless user experience by incorporating a clean, modern and responsive layout. 

## Search Feature
In the Games dashboard, you can search information by Category or date range, by clicking on the 'filter by range' button. 

- If the user doesn't select a start date, any game with the date before the end date chosen will be displayed.
- If the user doesn't select an end date, any game with the date after the start date chosen will be displayed.
- If the user chooses both dates, games within the chosen dates will be displayed.
- When ‘Hide filter’ is clicked any date filter is disregarded
- I changed the default date format from MM/DD/YYYY to DD/MM/YY, as according to my research this is the most common format in Estonia, where the company is based.

In the Users dashboard, you can search for information by name only.


## Development details
- No database was used in the development of this project, which means the data is stored in memory. If you reload the page any items added, deleted and edited will be lost and the original list will be restored. 

- Switching between the games and users' dashboard is smooth, and the data presented on both lists remains up to date, unless you refresh the page.

- In order to mimic a real API request, promises were implemented in the 'services' directory, ensuring that the components relying on fake data fetch are equipped with a loading component for a seamless user experience.

- Every email input field throughout this web application check the validity of the email input, ensuring that only valid email format is accepted.

- Every input field in this web application is required and an error message will be displayed in case this field is left blank.

- In both dashboards, you can add, delete and edit data. Items will be added at the list's end, which is scrollable.

## How to run the project

After clonning the project, in the project directory, run:

### `yarn`
Which will install all the dependencies needed for the project to run and then:

### `yarn start`
Which runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. (It usually opens automatically)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Author
[Maria Fernanda Abreu](https://www.linkedin.com/in/fernandafons/)