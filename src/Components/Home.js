import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        posts: []
    }
    // life cycle hook can only used by class based component
    // get external data by componentDidMount using axios
    // to get external data can also can use fatch
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 5)
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <div className="card-content">
                        {/* <Link to={'/posts/' + post.id}> */}
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })) : (
                <div className="center">No posts to show</div>
            )
        return (
            <div className="container">
                <h4 className="center"> Home </h4>
                {postList}
            </div>
        )
    }
}

export default Home