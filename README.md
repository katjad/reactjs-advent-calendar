reactjs-advent-calendar
=======================

Advent calendar running on Node/Express, with ReactJS for UI 

Using React Mini Router by Larry Myers : [https://github.com/larrymyers/react-mini-router](https://github.com/larrymyers/react-mini-router)<br />
Also, some elements taken from Mark Withers' Dog kennel: [https://github.com/markwithers/dog-feed](https://github.com/markwithers/dog-feed) 

Example here: [http://advent.kdurrani.co.uk/](http://advent.kdurrani.co.uk/)<br />

To run the project locally: 

```
git clone https://github.com/katjad/reactjs-advent-calendar.git
cd reactjs-advent-calendar
npm install
```

Build the react components and start the server 
```
grunt serve
```

Visit localhost:8081 to see the calendar

The text for the doors is in the public/days directory as json files 
You can optionally add a jpg picture that will display at the top of a post, by adding an image in the 
public/pics directory with the name [number].jpg 

