import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, IconButton, Tooltip } from '@material-ui/core';

import { FiArrowLeft } from 'react-icons/fi';

import { getAllCommentsByPost } from '../../services/api/post';

import Post from '../../components/Post';
import Comment from '../../components/Comment';

import {
    TitleContainer,
    Title, 
    StyledList,
    StyledListItem,
    StyledDivider
} from './styles';

export default function Details(props) {
    const [comments, setComments] = useState([]);

    const history = useHistory();
    const { id } = useParams();
    const { post } = props.location.state;


    
    useEffect(() => {
        async function loadCommentByPost() {
            const response = await getAllCommentsByPost(id);
            setComments(response.comments);
        }

        loadCommentByPost();
    }, [id]);

    function goBack() {
        history.push('/');
    }

    return (
        <Container>

            <TitleContainer>
                <Tooltip title="back to main page">
                    <IconButton onClick={goBack}>
                        <FiArrowLeft />
                    </IconButton>
                </Tooltip>
                <Title>Post</Title>
            </TitleContainer>


            <Post
                title={post.title}
                body={post.body}
                showActions={false}
            />


            <StyledList>
                {comments.map((comment, index) => (
                    <div key={comment.id}>
                        <StyledListItem>
                            <Comment title={comment.name} body={comment.body} />
                        </StyledListItem>
                        {(index + 1) < comments.length && (
                            <StyledDivider  />
                        )}
                    </div>
                ))}
            </StyledList>
        </Container>
    );
}