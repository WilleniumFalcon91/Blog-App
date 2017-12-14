import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
   

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
        console.log(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    
    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link className="btn home" to='/'>Back To Index</Link>
                <button
                    className="btn btn-danger pull-right delete"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3 className='post-title'>{post.title}</h3>
                <div className='post-container'>
                    <p className='post-body'>{post.content}</p>
                    <button className='tags z-index-3'>{post.categories}</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);