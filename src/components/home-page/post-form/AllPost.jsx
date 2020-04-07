import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post.jsx';
import EditComponent from './EditComponent.jsx';
import './index.scss';

class AllPost extends Component {
    render() {
        return (
            <div>{console.log(this.props.posts.length)}
                <h1 className="post_heading">All Posts</h1>
                {this.props.posts.length === 0 &&
                <h2 className="center">There is no post to display. Please create a post!!</h2>}
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
                            key={post.id} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);