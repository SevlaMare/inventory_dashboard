import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'http://localhost:4000';

export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),

  tagTypes: ['Post', 'User'],
  endpoints: builder => ({}),
});
