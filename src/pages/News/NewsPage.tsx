import { Grid } from '@mui/material';
import NewsItem from './components/NewsItem';
import { useLocation } from 'react-router-dom';
import { EmptyResult } from '../../components/EmptyResult';
import { Overlay } from '../../components/Overlay/Overlay';
import { selectContent } from '../../redux/slices/modalAction';
import { selectValue } from '../../redux/slices/toggleButton';
import { useSelector } from 'react-redux';
import { useFetchNewsQuery } from '../../redux/features/news/newsApi';
import NewsItemModal from './components/NewsItemModal';
import { ATable } from '../../components/Table/ATable';
import { formatDate } from '../../helpers/TableHelpers';

const NewsPage = () => {
	const pathname = useLocation().pathname;
	const countryCode: any = pathname.split('/').pop()?.toLowerCase();

	const { data, isLoading, isError, refetch } = useFetchNewsQuery({
		countryCode: countryCode,
	});

	const content = useSelector(selectContent);
	const moduleType = useSelector(selectValue);

	if (isError) return <EmptyResult description={`Something went wrong`} refetch={refetch} />;

	return (
		<Overlay show={isLoading}>
			<Grid
				container
				spacing={2}
				sx={{
					justifyContent: 'space-between',
					'& > :last-child': {
						justifySelf: 'flex-end',
						alignSelf: 'flex-end',
					},
				}}>
				{moduleType === 'module'
					? data && data && data.articles.length > 0
						? data.articles.map((item, index) => (
								<Grid item key={index}>
									<NewsItem
										title={item.title}
										sourceName={item.source.name}
										publishedAt={item.publishedAt}
										image={item.urlToImage}
										other={``}
										description={item.description}
										author={item.author}
										url={item.url}
									/>
								</Grid>
						  ))
						: null
					: data &&
					  data &&
					  data.articles.length > 0 && (
							<ATable
								showSearch
								fixedHeader
								otherTableProps={{
									sx: {
										'& .MuiTableHead-root': {
											'& .MuiTableCell-root': {
												backgroundColor: 'transparent',
											},
										},
									},
								}}
								columns={[
									{
										title: 'publishedAt',
										key: 'publishedAt',
										disableSorting: true,
										textAlign: 'left',
										options: { render: (e) => formatDate(e) },
									},
									{
										title: 'author',
										key: 'author',
										textAlign: 'left',
										options: {
											render: (e) => e,
										},
									},

									{
										title: 'title',
										key: 'title',
										textAlign: 'right',
										options: {
											render: (e) => e,
										},
									},
									{
										title: 'source',
										key: 'source.name',
										textAlign: 'right',
										options: {
											render: (e) => console.log('source', e),
										},
									},
								]}
								rows={data.articles}
								size='medium'
							/>
					  )}
			</Grid>
			{data && data.articles?.length === 0 && <EmptyResult description='No articles found' />}

			<NewsItemModal
				author={content.author}
				url={content.url}
				description={content.description}
				image={content.urlToImage}
			/>
		</Overlay>
	);
};
export default NewsPage;
