import { urlPlaceholderApi } from './index';

export const endPointPost = () => `${urlPlaceholderApi}/posts`;

export const endPointCommnetsByPost = (postId) => `${urlPlaceholderApi}/posts/${postId}/comments`;

export const endPointDeletePost = (postId) => `${urlPlaceholderApi}/posts/${postId}`;