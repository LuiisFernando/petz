import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, TextField, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { getAllPosts, deletePost } from '../../services/api/post';

import Post from '../../components/Post';

import {
    Title,
    StyledList,
    FilterContainer,
    ButtonContainer,
    CounterPost
} from './styles';

export default function Main() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filterText, setFilterText] = useState('');
    const history = useHistory();

    const schema = Yup.object().shape({
        filter: Yup.string()
    });

    const initialValues = {
        filter: ''
    }

    const loadPostByCallback = useCallback(async () => {
        const response = await getAllPosts();
        setPosts(response.posts);
        setFilteredPosts(response.posts);
    }, []);

    const countFilteredPosts = useMemo(() => {
        return filteredPosts.length;
    }, [filteredPosts])

    useEffect(() => {
        loadPostByCallback();
    }, []);

    useEffect(() => {
        function filterPosts() {
            if (filterText) {
                const filteredPosts = posts.filter(x => x.title.toUpperCase().includes(filterText.toUpperCase()));
                setFilteredPosts(filteredPosts);
            }
        }

        filterPosts();
    }, [filterText]);


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

    function handleSubmit({ filter }) {
        setFilterText(filter);
    }

    function removeFilter(setFieldValue) {
        setFieldValue('filter', '');
        setFilteredPosts(posts);
    }

    return (
        <Container>

            <Title>Posts</Title>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(fields) => handleSubmit(fields)}
            >
                {(props) => (
                    <Form>
                        <Field
                            name="filter"
                            children={({ field }) => (
                                <FilterContainer>
                                    <CounterPost>
                                        Posts encontrado: {countFilteredPosts}
                                    </CounterPost>
                                    <TextField
                                        {...field}
                                        autoComplete="off"
                                        variant="outlined"
                                        label="Filter"
                                        placeholder="Search posts"
                                        style={{ width: '100%', background: 'white' }}
                                    />
                                </FilterContainer>
                            )}
                        />
                        <ButtonContainer>
                            <Button 
                                color="primary"
                                variant="contained"
                                type="submit"
                                style={{ marginRight: 10 }}
                            >
                                Search
                            </Button>
                            <Button
                                color="secondary"
                                variant="contained"
                                type="button"
                                onClick={() => removeFilter(props.setFieldValue)}
                            >
                                Remove filter
                            </Button>
                        </ButtonContainer>
                    </Form>
                )}
            </Formik>


            <StyledList>
                {filteredPosts && filteredPosts.map(post => (
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