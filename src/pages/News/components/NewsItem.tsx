import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { setOpen, setContent } from '../../../redux/slices/modalAction';
import { useDispatch } from 'react-redux';

interface NewsItemProps {
	title: string;
	sourceName: string;
	publishedAt: string;
	image: string;
	other?: string;
	description: string;
	author: string;
	url: string;
}

const NewsItem = ({ title, sourceName, publishedAt, image, other, description, author, url }: NewsItemProps) => {
	const dispatch = useDispatch();

	const handleOpen = () => {
		dispatch(setOpen(true));
		dispatch(setContent({ title, sourceName, publishedAt, image, other, description, author, url }));
	};

	return (
		<Card sx={{ width: 300, maxWidth: 345, cursor: 'pointer' }} onClick={handleOpen}>
			<CardHeader title={title} subheader={sourceName} />
			<CardContent>
				<Typography variant='body2' color='text.primary'>
					{new Date(publishedAt).toLocaleString()}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default NewsItem;
