import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, List, TextField } from '@material-ui/core';

import { getAllPosts, deletePost } from '../../services/api/post';

import Post from '../../components/Post';

import { Title, StyledList, FilterContainer } from './styles';

export default function Main() {
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    async function loadPosts() {
        const response = await getAllPosts();
        setPosts(response.posts);
    }

    useEffect(() => {
        loadPosts();
    }, []);

    function handleClick(post) {
        history.push(`/details/${post.id}`, { post });
    }

    async function handleDelete(post) {
        await deletePost(post.id);

        logicalExclusion(post.id);
    }

    function logicalExclusion(id) {
        var clonedPosts = [...posts];
        var postsWithoutDeletedPost = clonedPosts.filter(x => x.id !== id);

        setPosts(postsWithoutDeletedPost);
    }

    return (
        <Container>

            <Title>Posts</Title>

            <FilterContainer>
                <TextField />
            </FilterContainer>

            <StyledList>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        showActions={true}
                        onClickView={() => handleClick(post)}
                        onClickDelete={() => handleDelete(post)}
                    />
                ))}
            </StyledList>

        </Container>
    );
}