import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

class Post extends Component {
    // state = {
    //     // id: null
    //     post: null
    // }
    // componentDidMount() {
    //     let id = this.props.match.params.post_id
    //     // console.log(id)
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })
    //             // console.log(this.state.post)
    //         })
    //     // this.setState({
    //     //     id: id
    //     // })
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        // console.log(this.props);
        const post = this.props.post ? (
            // const post = this.state.post ? (
            <div className="post">
                <h5 className="center">{this.props.post.title}</h5>
                {/* <h5 className="center">{this.state.post.title}</h5> */}
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
                {/* <p>{this.state.post.body}</p> */}
                <h6 className="center">post number : {this.props.post.id}</h6>
                {/* <h6 className="center">post number : {this.state.post.id}</h6> */}
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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post) => {
            return post.id === id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
// export default Post