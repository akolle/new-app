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
    // {title: 'Day 7', body: "", id: 7},
    // {title: 'Day 8', body: "", id: 8},
    // {title: 'Day 9', body: "", id: 9},
    // {title: 'Day 10', body: "", id: 10},
    // {title: 'Day 11', body: "", id: 11},
    // {title: 'Day 12', body: "", id: 12},
    // {title: 'Day 13', body: "", id: 13},
    // {title: 'Day 14', body: "", id: 14},
    // {title: 'Day 15', body: "", id: 15},
    // {title: 'Day 16', body: "", id: 16},
    // {title: 'Day 17', body: "", id: 17},
    // {title: 'Day 18', body: "", id: 18},
    // {title: 'Day 19', body: "", id: 19},
    // {title: 'Day 20', body: "", id: 20},
    // {title: 'Day 21', body: "", id: 21},
    // {title: 'Day 22', body: "", id: 22},
    // {title: 'Day 23', body: "", id: 23},
    // {title: 'Day 24', body: "", id: 24},
    // {title: 'Day 25', body: "", id: 25},
    // {title: 'Day 26', body: "", id: 26},
    // {title: 'Day 27', body: "", id: 27},
    // {title: 'Day 28', body: "", id: 28},
    // {title: 'Day 29', body: "", id: 29},
    // {title: 'Day 30', body: "", id: 30},
    // {title: 'Day 31', body: "", id: 31},
    // {title: 'Day 32', body: "", id: 32},
    // {title: 'Day 33', body: "", id: 33},
    // {title: 'Day 34', body: "", id: 34},
    // {title: 'Day 35', body: "", id: 35},
    // {title: 'Day 36', body: "", id: 36},
    // {title: 'Day 37', body: "", id: 37},
    // {title: 'Day 38', body: "", id: 38},
    // {title: 'Day 39', body: "", id: 39},
    // {title: 'Day 40', body: "", id: 40},
    // {title: 'Day 41', body: "", id: 41},
    // {title: 'Day 42', body: "", id: 42},
    // {title: 'Day 43', body: "", id: 43},
    // {title: 'Day 44', body: "", id: 44},
    // {title: 'Day 45', body: "", id: 45},
    // {title: 'Day 46', body: "", id: 46},
    // {title: 'Day 47', body: "", id: 47},
    // {title: 'Day 48', body: "", id: 48},
    // {title: 'Day 49', body: "", id: 49},
    // {title: 'Day 50', body: "", id: 50},
    // {title: 'Day 51', body: "", id: 51},
    // {title: 'Day 52', body: "", id: 52},
    // {title: 'Day 53', body: "", id: 53},
    // {title: 'Day 54', body: "", id: 54},
    // {title: 'Day 55', body: "", id: 55},
    // {title: 'Day 56', body: "", id: 56},
    // {title: 'Day 57', body: "", id: 57},
    // {title: 'Day 58', body: "", id: 58},
    // {title: 'Day 59', body: "", id: 59},
    // {title: 'Day 60', body: "", id: 60},
    // {title: 'Day 61', body: "", id: 61},
    // {title: 'Day 62', body: "", id: 62},
    // {title: 'Day 63', body: "", id: 63},
    // {title: 'Day 64', body: "", id: 64},
    // {title: 'Day 65', body: "", id: 65},
    // {title: 'Day 66', body: "", id: 66},
    // {title: 'Day 67', body: "", id: 67},
    // {title: 'Day 68', body: "", id: 68},
    // {title: 'Day 69', body: "", id: 69},
    // {title: 'Day 70', body: "", id: 70},
    // {title: 'Day 71', body: "", id: 71},
    // {title: 'Day 72', body: "", id: 72},
    // {title: 'Day 73', body: "", id: 73},
    // {title: 'Day 74', body: "", id: 74},
    // {title: 'Day 75', body: "", id: 75},
    // {title: 'Day 76', body: "", id: 76},
    // {title: 'Day 77', body: "", id: 77},
    // {title: 'Day 78', body: "", id: 78},
    // {title: 'Day 79', body: "", id: 79},
    // {title: 'Day 80', body: "", id: 80},
    // {title: 'Day 81', body: "", id: 81},
    // {title: 'Day 82', body: "", id: 82},
    // {title: 'Day 83', body: "", id: 83},
    // {title: 'Day 84', body: "", id: 84},
    // {title: 'Day 85', body: "", id: 85},
    // {title: 'Day 86', body: "", id: 86},
    // {title: 'Day 87', body: "", id: 87},
    // {title: 'Day 88', body: "", id: 88},
    // {title: 'Day 89', body: "", id: 89},
    // {title: 'Day 90', body: "", id: 90},
    // {title: 'Day 91', body: "", id: 91},
    // {title: 'Day 92', body: "", id: 92},
    // {title: 'Day 93', body: "", id: 93},
    // {title: 'Day 94', body: "", id: 94},
    // {title: 'Day 95', body: "", id: 95},
    // {title: 'Day 96', body: "", id: 96},
    // {title: 'Day 97', body: "", id: 97},
    // {title: 'Day 98', body: "", id: 98},
    // {title: 'Day 99', body: "", id: 99},
    // {title: 'Day 100', body: "", id: 100}
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
