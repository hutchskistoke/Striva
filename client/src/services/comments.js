import api from './api-config';

export const getAllComments = async (id) => {
  const resp = await api.get(`/posts/${id}/comments`);
  return resp.data;
}

export const postComment = async (id, commentData) => {
  const resp = await api.post(`/posts/${id}/comments`, { comment: commentData });
  return resp.data;
}