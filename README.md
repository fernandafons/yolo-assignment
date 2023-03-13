# Yolo Front-end Assignment

## The assignment
The goal was to present mocked data about games and users with a clean, modern
and responsive design.

## Features
In the Games dashboard, you can search information by Category or date range, by clicking on the 'filter by range' button. 
- If the user doesn't select a start date, any game with the date before the end date chosen will be displayed.
- If the user doesn't select an end date, any game with the date after the start date chosen will be displayed.
- If the user choose both dates, games within the choosen dates will be displayed.
- I changed the default date format from MM/DD/YYYY to DD/MM/YY, as according to my research (googling) this is the most common format in Estonia, where the company is based.

In the Users dashboard, you can search information by name only.

In both dashboards you can add, delete and edit data. Items will be added in the end of the list, which is scrollable.

## Limitations
No database was used in the development of this project, which means the data is stored in memory. If you reload the page any items added, deleted and edited will be lost and the original list will be restored. You can change from one dashboard to the other with no problem and both lists will keep up to date, unless you refresh the page.

## How to run the project

After clonning the project, in the project directory, you can run:

### `yarn`
Which will install all the dependencies needed for the project to run and then:

### `yarn start`
Which runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).