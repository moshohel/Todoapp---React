import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        // id: null
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id
        // console.log(id)
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
                // console.log(this.state.post)
            })
        // this.setState({
        //     id: id
        // })
    }
    render() {

        const post = this.state.post ? (
            <div className="post">
                <h5 className="center">{this.state.post.title}</h5>
                <p>{this.state.post.body}</p>
                <h6 className="center">post number : {this.state.post.id}</h6>
            </div>
        ) : (
                <div className="center"> Loading post...</div>
            )


        return (
            <div className="container">
                { post}
            </div>
        )
    }
}


export default Post