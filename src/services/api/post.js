import { endPointPost, endPointCommnetsByPost, endPointDeletePost } from '../endpoint/post';
import { responseGetAllPosts, responseGetAllCommentsByPosts } from '../response/post';
import { serviceGet, serviceDelete } from '../index';

async function getAllPosts() {
    const response = await serviceGet(endPointPost());
    return response ? responseGetAllPosts(response) : null;
}

async function getAllCommentsByPost(postId) {
    const response = await serviceGet(endPointCommnetsByPost(postId));
    return response ? responseGetAllCommentsByPosts(response) : null;
}

async function deletePost(postId) {
    await serviceDelete(endPointDeletePost(postId));
    return true;
}

export { getAllPosts, getAllCommentsByPost, deletePost };
