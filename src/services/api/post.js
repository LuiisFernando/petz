import { endPointPost } from '../endpoint/post';
import { serviceGet } from '../index';

async function getAllPosts() {
    const response = await serviceGet(endPointPost());
    return response;
}

export { getAllPosts };
