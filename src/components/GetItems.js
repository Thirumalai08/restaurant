import Axios from 'axios'
import React, { Component } from 'react'

export default class GetItems extends Component {
    state = {
        posts: []
    }
    async componentDidMount(){
        //Axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        await Axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            const posts = res.data
            this.setState({ posts })
        })
    }
    /*deleteClick(id,e){
        //Axios.delete(`https://jsonplaceholder.typicode.com/posts_limit=5/${id}`)
        Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res.data)
            const posts = this.state.posts.filter((item)=>item.id !== id)
            this.setState({ posts })
        })
    }*/
    handleDelete = (post) =>{
        console.log('Delete',post)
    }
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            {/*<th>Body</th>*/}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post)=>(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                {/*<td>{post.body}</td>*/}
                                <td>
                                    <button
                                    onClick={()=>this.handleDelete(post)}
                                    //onClick={(e)=>this.deleteClick(post.id,e)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}