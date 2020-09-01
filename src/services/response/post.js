function responseGetAllPosts(r) {
    let response = {
        posts:
            typeof r.data !== 'undefined'
                ? r.data.map(
                    ({ id, body, title, userId }) => ({
                        id,
                        body,
                        title,
                        userId
                    })
                )
                : []
    };

    return response;
}

function responseGetAllCommentsByPosts(r) {
    let response = {
        comments:
            typeof r.data !== 'undefined'
                ? r.data.map(
                    ({ id, postId, name, email, body}) => ({
                        id,
                        postId,
                        name,
                        email,
                        body
                    })
                )
                : []
    };

    return response;
}


export { responseGetAllPosts, responseGetAllCommentsByPosts }; 