import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IArticle {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

interface INewsResponse {
	articles: IArticle[];
	status: string;
	totalResults: number;
}

const API_KEY = process.env.REACT_APP_API_KEY;

export const newsApiSlice = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints(builder) {
		return {
			fetchNews: builder.query<INewsResponse, { countryCode: string }>({
				query: ({ countryCode }) => `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${API_KEY}`,
			}),
		};
	},
});

export const { useFetchNewsQuery } = newsApiSlice;
