import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./asiosBaseQuery";


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['TOUR','USER', "DIVISION","BOOKING"],
    endpoints: (builder) => ({}),

});


