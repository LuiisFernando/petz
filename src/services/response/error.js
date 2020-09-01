export default function errorResponse (error) {

  if (error && error.response) {
    if (error.response.status === 400) {
      return error.response.data.error;
    }
  }
}
