import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import SearchBar from '../components/search_posts';

class PostsIndex extends Component {    
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <img className="post-img" src='https://static1.squarespace.com/static/54b811e1e4b0a17414b3036f/t/54bea6e8e4b0705272ba773c/1421780713767/blog-1.jpg?format=1500w' alt='post img' />
                        {post.title}
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className='index-nav'>
                    <SearchBar/>
                    <div className="text-right">
                        <Link className="btn btn-primary" to="/posts/new">Add a post</Link>
                    </div>
                </div>
                <h3>Posts</h3>
                <ul className='list-group post-list'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);