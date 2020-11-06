import React, { useEffect, useState } from 'react'
import Axios from 'axios'
function HooksGet(){
    const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
    // state
    const [posts,setPosts] = useState([])
    // fetch data
    useEffect(()=>{
        Axios.get(`${BASE_URL}`)
        .then(res=>{
            const result = res.data
            setPosts(result)
            console.log(result)
        })
    },[])
    // handle delete
    const handleDelete = async (post) => {
        await Axios.delete(`${BASE_URL}/${post.id}`)
        const del = posts.filter(item => item.id !== post.id)
        //setPosts({ del })
        setPosts(del)
        console.log('Delete',post.id)
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post)=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>
                                <button
                                onClick={()=>handleDelete(post)}
                                >Del</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default HooksGet