import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {    
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a post</Link>
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