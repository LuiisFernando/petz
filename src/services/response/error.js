import React from 'react';


export default function errorResponse (error) {

  if (error && error.response) {
    if (error.response.status === 400) {
      const throwError = {};
      return error.response.data.error;
    }
  }
}
