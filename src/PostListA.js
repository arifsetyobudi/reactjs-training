import PostList from './PostList';
import React from 'react';

export default class PostListA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <PostList posts={this.props.posts} deletePost={this.props.deletePost}></PostList>
        )
    }
}