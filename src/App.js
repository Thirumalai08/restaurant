//import logo from './logo.svg';
import './App.css';
import React from 'react'
//import GetItems from './components/GetItems';
//import HooksGet from './components/HooksGet';
import ViewData from './crud/ViewData';
import AddData from './crud/AddData';
//import axios from 'axios'

function App() {
  /*const [posts,setPosts] = useState([])
  useEffect(()=>{
    //fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    getData()
  },[posts])
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res =>{
      setPosts(res.data)
      console.log(res.data)
    })
    //.then(json => console.log(json))
    .catch(err => console.log(err))
  }
  // handle delete function
  const handledelete = (id) => {
    alert(`Button Click ${id}`)
   /* axios.delete(`https://jsonplaceholder.typicode.com/posts?_limit=5/${id}`)
    .then(res=>{
      const del = posts.filter((item)=> item.id !== id)
      setPosts({ del })
      //console.log('Delete',res)
    })
    .catch(err => console.log(err)) */
  //} 
  return (
    <div className="App">
        <AddData />
        <h2>List</h2>
        {/*<GetItems />*/}
        {/*<HooksGet />*/}
        <ViewData />
        {/*<div>
          {posts.map((post)=>{
            return <div key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                      <div>
                        <button onClick={handledelete(post.id)}>Del</button>
                      </div>
                  </div> 
          })}
        </div>*/}
    </div>
  );
}

export default App;
