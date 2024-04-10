import { useState, useEffect } from "react";
import Bloglist from './Bloglist';

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

export default Home;
