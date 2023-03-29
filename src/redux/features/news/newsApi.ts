import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IArticle {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
	publishedAt: string;
	content: string | null;
}

interface INewsResponse {
	status: string;
	totalResults: number;
	articles: Record<string, IArticle>;
}

const API_KEY = process.env.REACT_APP_API_KEY;

export const newsApiSlice = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints(builder) {
		return {
			fetchNews: builder.query<any, { countryCode: string }>({
				query: ({ countryCode }) => `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${API_KEY}`,
			}),
		};
	},
});

export const { useFetchNewsQuery } = newsApiSlice;
