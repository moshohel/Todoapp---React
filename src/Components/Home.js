import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    // state = {
    //     posts: []
    // }

    // life cycle hook can only used by class based component
    // get external data by componentDidMount using axios
    // to get external data can also can use fatch

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             this.setState({
    //                 posts: res.data.slice(0, 5)
    //             })
    //         })
    // }

    render() {
        // console.log(this.props);
        // const { posts } = this.state;
        const { posts } = this.props;
        const postList = posts.length ? (posts.map(post => {
            return (
                <div className="post card" key={post.id}>

                    <img src={pokeball} alt="A pokeball" />
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
            <div className="container home">
                <h4 className="center"> Home </h4>
                {postList}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Home)
// export default Home