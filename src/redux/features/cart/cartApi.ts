/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    getBooks: builder.query({
      query: () => "/books",
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getSingleBookReview: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useCreateBookMutation,
  useGetSingleBookReviewQuery,
  usePostReviewMutation,
} = cartApi;
