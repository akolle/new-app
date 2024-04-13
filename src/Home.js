import { useState, useEffect } from "react";
import Bloglist from './Bloglist';

/* THIS IS THE YOUTUBE TRAINING

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'This is going to be my developer portfolio website!', author: 'Andrew Koller', id: 1},
    {title: '100 Day of Coding', body: "This will be a list of what I've accomplished each day", author: 'Andrew Koller', id: 2},
    {title: 'Focus on React', body: 'My focus will be on mastering React and getting a front end dev job', author: 'Emily Osburn', id: 3}
  ]);
  
  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div>
     <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
     <button onClick={() => setName('Luigi')}>change name</button>
     <p>{ name }</p>
    </div>
  )
}
*/

const Home = () => {
  const [blogs, setBlogs] = useState([
    { 
      title: "Day 1", 
      body: ["Working on HTML. Building a cat photo app.",
            "Completed the Learn HTML by Building a Cat Photo App course on freeCodeCamp",
            "Started Learn Basic CSS by Building a Café Menu."],
      id: 1
    },
    {
      title: 'Day 2', 
      body: ["Completed Learn Basic CSS by Building a Café Menu"],
      id: 2
    },
    {
      title: 'Day 3', 
      body: ["Completed Learn CSS Colors by Building a Set of Colored Markers.",
            "Completed Learn HTML Forms by Building a Registration Form.",
            "Joined freeCodeCamp discord commited to 100 days of coding.",
            "Started Survey Form Certification Project"],
      id: 3
    },
    {
      title: 'Day 4',
      body: ["Finished completing my first project - Survey Form.",
            "Started and completed Learn the CSS Box Model by Building a Rothko Painting.",
            "Started working on Learn CSS Flexbox by Building a Photo Gallery."], 
      id: 4
    },
    {
      title: 'Day 5',
      body: ["Finished completing Learn CSS Flexbox by Building a Photo Gallery lesson.",
            "Started Learn Typography by Building a Nutrition Label"],
      id: 5
    },
    {
      title: 'Day 6',
      body: ["Completed Learn Typography by Building a Nutrition Label",
            "Started Learn Accessibility by Building a Quiz"], 
      id: 6
    },
    {
      title: 'Day 7',
      body: ["Working through Learn Accessibility by Building a Quiz",
            "Lessons are starting to get a little more challenging now"], 
      id: 7
    },
    {
      title: 'Day 8',
      body: ["Completed the Learn Accessibility by Building a Quizz",
            "Finished the Tribute Page Project",
            "Starting the Learn More About CSS Pseudo Selectors By Building A Balance Sheet"], 
      id: 8
    },
    {
      title: 'Day 9',
      body: ["Finished Learn More About CSS Pseudo Selectors By Building A Balance Sheet",
            "Starting the Learn Intermediate CSS by Building a Cat Painting"], 
      id: 9
    },
    {
      title: 'Day 10',
      body: ["Finished the Learn Intermediate CSS by Building a Cat Painting",
            "Started and completed Learn Responsive Web Design by Building a Piano",
            "Started and completed the Technical Documentation Page Project",
            "Started the Learn CSS Variables by building a City Skyline"], 
      id: 10
    },
    {
      title: 'Day 11',
      body: ["Finished the Learn CSS Variables by building a City Skyline",
            "Starting Learn CSS Grid by Building a Magazine"], 
      id: 11
    },
    {
      title: 'Day 12',
      body: ["Working through the CSS Grid by Building a Magazine lesson"], 
      id: 12
    },
    {
      title: 'Day 13',
      body: ["Finished Learn CSS Grid by Building a Magazine lesson",
            "Started the Product Landing page project"], 
      id: 13
    },
    {
      title: 'Day 14',
      body: ["Finished the Product Landing page project"], 
      id: 14
    },
    {
      title: 'Day 15',
      body: ["Started and completed the Learn CSS Animation by Building a Ferris Wheel",
            "Started Learn CSS Transforms by Building a Penguin"], 
      id: 15
    },
    {
      title: 'Day 16',
      body: ["Completed Learn CSS Transforms by Building a Penguin"], 
      id: 16
    },
    {
      title: 'Day 17',
      body: ["Working on personal portfolio project",
            "Starting Learn Basic Javascript by Building a Role Playing Game"], 
      id: 17
    },
    {
      title: 'Day 18',
      body: ["Working on personal portfolio project",
            "Starting Learn Basic Javascript by Building a Role Playing Game"], 
      id: 18
    },
    {
      title: 'Day 19',
      body: ["Finished the Responsive Web Design Certification!",
            "Continuing on to Basic JavaScript Building a Role Playing Game"], 
      id: 19
    },
    {
      title: 'Day 20',
      body: ["Working through the JavaScript Building a Role Playing Game"], 
      id: 20
    },
    {
      title: 'Day 21',
      body: ["Got my personal portfolio project up and running on github. Working on some updates with that"], 
      id: 21
    },
    {
      title: 'Day 22',
      body: ["Still working on finishing up Basic JavaScript Building a Role Playing Game"], 
      id: 22
    },
    {
      title: 'Day 23',
      body: ["Completed Learn Basic JavaScript Building a Role Playing Game",
            "Started the Calorie Counter project"], 
      id: 23
    },
    {
      title: 'Day 24',
      body: ["Completed the Calorie Counter project",
            "Started Learn Basic String and Array Methods by Building a Music Player"], 
      id: 24
    },
    {
      title: 'Day 25',
      body: ["Continuing to work through Learn Basic String and Array Methods by Building a Music Player"], 
      id: 25
    },
    {
      title: 'Day 26',
      body: ["Finished Learn Basic String and Array Methods by Building a Music Player"], 
      id: 26
    },
    {
      title: 'Day 27',
      body: ["Started and completed the Learn the Date Object by Building a Date Formatter",
            "Starting the Build a Palindrome Checker project"], 
      id: 27
    },
    {
      title: 'Day 28',
      body: ["Working through Build a Palindrome Checker project"], 
      id: 28
    },
    {
      title: 'Day 29',
      body: ["Worked for several hours on the palindrome checker project. Almost done!"], 
      id: 29
    },
    {
      title: 'Day 30',
      body: ["Finished the Palindrome Checker project!",
            "Started the Learn Modern JavaScript Methods by Building Football Team Cards"], 
      id: 30
    },
    {
      title: 'Day 31',
      body: ["Working through the Learn Modern JavaScript Methods by Building Football Team Cards"], 
      id: 31
    },
    {
      title: 'Day 32',
      body: ["Completed Learn Modern JavaScript Methods by Building Football Team Cards",
            "Starting Learn localStorage by Building a ToDo App"], 
      id: 32
    },
    {
      title: 'Day 33',
      body: ["Working through the Lean localStorage by Building a ToDo App"], 
      id: 33
    },
    {
      title: 'Day 34',
      body: ["Finished Learn localStorage by Building a ToDo App",
            "Started Learn Recursion by Building a Decimal to Binary Converter"], 
      id: 34
    },
    {
      title: 'Day 35',
      body: ["Working through Learn Recursion by Building a Decimal to Binary Converter"], 
      id: 35
    },
    {
      title: 'Day 36',
      body: ["Finished Learn Recursion by Building a Decimal to Binary Converter",
            "Working on the Roman Numeral Converter Project"], 
      id: 36
    },
    {
      title: 'Day 37',
      body: ["Working through the Roman Numeral Converter Project",
            "Picked the laptop back up and finished Roman Numeral Converter Project!!!"], 
      id: 37
    },
    {
      title: 'Day 38',
      body: ["Started and completed Learn Basic Algorithmic Thinking by Building a Number Sorter",
            "Started Learn Advanced Array Methods by Building a Statistics Calculator"], 
      id: 38
    },
    {
      title: 'Day 39',
      body: ["Finished Learn Advanced Array Methods by Building a Statistics Calculator",
            "Started Learn Functional Programming by Building a Spreadsheet"], 
      id: 39
    },
    {
      title: 'Day 40',
      body: ["Working through Learn Functional Programming by Building a Spreadsheet"], 
      id: 40
    },
    {
      title: 'Day 41',
      body: ["Working through Learn Functional Programming by Building a Spreadsheet"], 
      id: 41
    },
    {
      title: 'Day 42',
      body: ["Working through Learn Functional Programming by Building a Spreadsheet"], 
      id: 42
    },
    {
      title: 'Day 43',
      body: ["Completed Learn Functional Programming by Building a Spreadsheet",
            "Starting Learn Regular Expressions by Building a Spam Filter"], 
      id: 43
    },
    {
      title: 'Day 44',
      body: ["Working through Learn Regular Expressions by Building a Spam Filter"], 
      id: 44
    },
    {
      title: 'Day 45',
      body: ["Completed Learn Regular Expression by Building a Spam Filter",
            "Completed Build a Telephone Number Validator Project",
            "Starting Learn Basic OOP by Building a Shopping Cart"], 
      id: 45
    },
    {
      title: 'Day 46',
      body: ["Working through Learn Basic OOP by Building a Shopping Cart"], 
      id: 44
    },
    {
      title: 'Day 47',
      body: ["Working through Learn Basic OOP by Building a Shopping Cart"], 
      id: 47
    },
    {
      title: 'Day 48',
      body: ["Completed Learn Basic OOP by Building a Shopping Cart",
            "Starting the Learn Intermediate OOP by Building a Platformer Game"], 
      id: 48
    },
    {
      title: 'Day 49',
      body: ["Working through the Learn Intermediate OOP by Building a Platformer Game"], 
      id: 49
    },
    {
      title: 'Day 50',
      body: ["Completed the Learn Intermediate OOP by Building a Platformer Game"], 
      id: 50
    },
    {
      title: 'Day 51',
      body: ["Started Learn Intermediate Algorithmic Thinking by Building a Dice Game"], 
      id: 51
    },
    {
      title: 'Day 52',
      body: ["Completed Learn Intermediate Algorithmic Thinking by Building a Dice Game",
            "Started working on the Cash Register Project"], 
      id: 52
    },
    {
      title: 'Day 53',
      body: ["Working on the Cash Register Project"], 
      id: 53
    },
    {
      title: 'Day 54',
      body: ["Working on the Cash Register Project"], 
      id: 54
    },
    {
      title: 'Day 55',
      body: ["Still working on the Cash Register Project. Should be able to finish tomorrow"], 
      id: 55
    },
    {
      title: 'Day 56',
      body: ["I FINISHED THE C ASH REGISTER PROJECT WOOOHOOOOOOOOOOOOO"], 
      id: 56
    },
    {
      title: 'Day 57',
      body: ["Started and completed Learn Fetch and Promises by Building an fCC Authors Page",
            "Started Learn Asynchronous Programming by Building an fCC Forum Leaderboard"], 
      id: 57
    },
    {
      title: 'Day 58',
      body: ["Finished Learn Asynchronous Programming by Building an fCC Forum Leaderboard",
            "Started the Pokeman Search App Project"], 
      id: 58
    },
    {
      title: 'Day 59',
      body: ["Working through the Pokemon Search App Project"], 
      id: 59
    },
    {
      title: 'Day 60',
      body: ["Working through the Pokemon Search App Project"], 
      id: 60
    },
    {
      title: 'Day 61',
      body: ["Finished the Pokemon Search App Project and successfully completed the JavaScript Algorithms and Data Structures Certification!",
            "Starting Front End Development Libraries - Bootstrap"], 
      id: 61
    },
    {
      title: 'Day 62',
      body: ["Finished Front End Development Libraries - Bootstrap"], 
      id: 62
    },
    {
      title: 'Day 63',
      body: ["Front End Libraries - working on jQuery"], 
      id: 63
    },
    {
      title: 'Day 64',
      body: ["Completed - Front End Libraries - jQuery",
            "Starting - Front End Libraries - Saas"], 
      id: 64
    },
    {
      title: 'Day 65',
      body: ["Finished - Front End Libraries - Saas",
            "Starting - Front End Libraries - React!!!"], 
      id: 65
    },
    {
      title: 'Day 66',
      body: ["Working through - Front End Libraries - React"], 
      id: 66
    },
    {
      title: 'Day 67',
      body: ["Working through - Front End Libraries - React"], 
      id: 67
    },
    {
      title: 'Day 68',
      body: ["Working through - Front End Libraries - React"], 
      id: 68
    },
    {
      title: 'Day 69',
      body: ["Work in Progress - Front End Libraries - React 62% Completed"], 
      id: 69
    },
    {
      title: 'Day 70',
      body: ["Work in Progress - Front End Libraries - React 70% Completed"], 
      id: 70
    },
    {
      title: 'Day 71',
      body: ["Work in Progress - Front End Libraries - React 85% Completed"], 
      id: 71
    },
    {
      title: 'Day 72',
      body: ["Work in Progress - Front End Libraries - React 87% Completed"], 
      id: 72
    },
    {
      title: 'Day 73',
      body: ["Work in Progress - Front End Libraries - React 89% Completed"], 
      id: 73
    },
    {
      title: 'Day 74',
      body: ["Work in Progress - Front End Libraries - React 98% Completed"], 
      id: 74
    },
    {
      title: 'Day 75',
      body: ["COMPLETED - Front End Libraries - React!!!",
            "Starting - Front End Libraries - Redux 29% Completed"], 
      id: 75
    },
    {
      title: 'Day 76',
      body: ["Work in Progress - Front End Libraries - Redux 47% Completed"], 
      id: 76
    },
    {
      title: 'Day 77',
      body: ["Work in Progress - Front End Libraries - Redux 71% Completed"], 
      id: 77
    },
    {
      title: 'Day 78',
      body: ["COMPLETED - Front End Libraries - Redux!"], 
      id: 78
    },
    {
      title: 'Day 79',
      body: ["Work in Progress - Front End Libraries - Redux and React 10% Completed"], 
      id: 79
    },
    {
      title: 'Day 80',
      body: ["Work in Progress - Front End Libraries - Redux and React 10% Completed"], 
      id: 80
    },
    {
      title: 'Day 81',
      body: ["Work in Progress - Front End Libraries - Redux and React 60% Completed"], 
      id: 81
    },
    {
      title: 'Day 82',
      body: ["Completed - Front End Libraries - Redux and React"], 
      id: 82
    },
    {
      title: 'Day 83',
      body: ["Work in Progress - Random Quote Generator",
            "Got my vs code environment up and running and some basic structure set up. Got the cdn testing script in there and working fine. Already passing 4 tests but still lots of work  to be done. Super excited to be writing in vs code independently and building something using React"], 
      id: 83
    },
    {
      title: 'Day 84',
      body: ["Work in Progress - Random Quote Generator",
            "Some pains getting more familiar with vscode"], 
      id: 84
    },
    {
      title: 'Day 85',
      body: ["Work in Progress - Random Quote Generator",
            "Redid things using React now. Took me a bit to get the testing environment up and running using React but I got there. Now im moving along - 9/12 tests complete. Will plan to get most of it done tomorrow and take an extra day to make it clean. Really excited using React now"], 
      id: 85
    },
    {
      title: 'Day 86',
      body: ["Work in Progress - Random Quote Generator",
            "Trying to figure out how to fetch data from an API using react. Ran into some issues. Will try more tomorrow"], 
      id: 86
    },
    {
      title: 'Day 87',
      body: ["Work in Progress - Random Quote Generator",
            "Managed to work for an hour. Still struggling to fetch data from api using react. Proving to be a real struggle. Will keep trying tomorrow"], 
      id: 87
    },
    {
      title: 'Day 88',
      body: ["Work in Progress - Random Quote Generator",
            "Figured out how to fetch data from api using react so I can now display multiple quotes from a public api. Need to figure out how to randomly show 1 now",
            "Watched a video on youTube about fetching data from the pokemon api - this is review but it was good to see this again. ill finish this project eventually"], 
      id: 88
    },
    {
      title: 'Day 89',
      body: ["Work in Progress - Random Quote Generator",
            "10/12 tests passing. ALMOST THERE!!! I'm hoping tomorrow is the day :)"], 
      id: 89
    },
    {
      title: 'Day 90',
      body: ["Work in Progress - Random Quote Generator",
            "Still workin on it"], 
      id: 90
    },
    {
      title: 'Day 91',
      body: ["Completed - Random Quote Generator",
            "All test passing"], 
      id: 91
    },
    {
      title: 'Day 92',
      body: ["Focusing on fundamentals of React. Watching a Udemy course and course on youtube",
            "Spend a couple hours on the Udemy course today",
            "Plan on doing the same tomorrow and then starting next project later this week"], 
      id: 92
    },
    {
      title: 'Day 93',
      body: ["Watched youTube video on React dynamic variables and multiple components",
            "Put the code for the random quote generator on my GitHub"], 
      id: 93
    },
    {
      title: 'Day 94',
      body: ["Spent a solid hour working on deploying a react app with github pages. Still don’t have it figured out yet. Hoping for some better luck tomorrow",
            "Kept on it and got it working!"], 
      id: 94
    },
    {
      title: 'Day 95',
      body: ["Watched youTube videos on react for multiple components, some css stuff and click events",
            "Redoing the random quote generator project - still having issues fetching data from api and then displaying it in a component in an array without any errors",
            "Much more comfortable now using github pages to deploy webpages though"], 
      id: 95
    },
    {
      title: 'Day 96',
      body: ["Still working on the quote generator project with React. Figured out how to randomly render a quote from an api. Still need to figure out how to add a button that refreshes the page to get a new quote now",
            "Watched a couple hours of a Udemy class on React that i've really been enjoying. helping me with many of the concepts and excited about that and to continue getting better with React"], 
      id: 96
    },
    {
      title: 'Day 97',
      body: ["Continuing to learn React - working on useState hooks and pulling data objects from APIs"], 
      id: 97
    },
    {
      title: 'Day 98',
      body: ["Continuing to learn React - you tube tutorials on state and props making reusable components"], 
      id: 98
    },
    {
      title: 'Day 99',
      body: ["-Fiiiiiiiiiiinally figured out how to set an onclick handle to refresh data from an API and display it for the random quote generator project. Ahhh its been several days",
            "Continuing with youTube react tutorial with videos on functions as props and useEffect"], 
      id: 99
    },
    {
      title: 'Day 100',
      body: ["Day 100!!! Seems only fitting to end the last day of the challenge with the beginnings of a personal portfolio project documenting each day's progress. I used git hub pages to deploy the site. It only has the first 5 days so far but I will keep adding to it"], 
      id: 100
    },
    {
      title: 'Day 101',
      body: ["Working through a React course on Udemy",
            "reformatted my personal project of adding each days progress using a nested map function to display the info in a list format"], 
      id: 101
    },
    {
      title: 'Day 102',
      body: ["Working through a React course on Udemy",
            "added more days to my 100 days of coding project site and updated the readme file from default react to a custom welcome message"], 
      id: 102
    },
    {
      title: 'Day 103',
      body: ["Working through a React course on Udemy",
            "added the rest of the days to the 100 days of coding project site"], 
      id: 103
    },
  ]);
  
  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div>
     <Bloglist blogs={blogs} handleDelete={handleDelete}/>
    </div>
  )
}


export default Home;
