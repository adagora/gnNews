import { Card, CardContent, CardHeader, Tooltip, Typography } from '@mui/material';
import { setOpen, setContent } from '../../../redux/slices/modalAction';
import { useDispatch } from 'react-redux';
import ImageIcon from '@mui/icons-material/Image';
import { Box } from '@mui/system';
interface NewsItemProps {
	title: string;
	sourceName: string;
	publishedAt: string;
	urlToImage: string;
	description: string;
	author: string;
	url: string;
	content: string;
}

const NewsItem = ({ title, sourceName, publishedAt, urlToImage, description, author, url, content }: NewsItemProps) => {
	const dispatch = useDispatch();

	const handleOpen = () => {
		dispatch(setOpen(true));
		dispatch(setContent({ title, urlToImage, description, author, url, content }));
	};

	return (
		<Card sx={{ width: 300, maxWidth: 345, height: 200, cursor: 'pointer' }} onClick={handleOpen}>
			<CardHeader
				title={title}
				subheader={sourceName}
				sx={{
					'& .MuiCardHeader-title': {
						fontSize: '1rem',
						fontWeight: 500,
					},
					'& .MuiCardHeader-subheader': {
						fontSize: '0.8rem',
						fontWeight: 400,
					},
				}}
			/>
			<CardContent>
				<Box display='flex' justifyContent='space-between' alignItems='flex-end'>
					<Typography variant='body2' color='text.primary'>
						{new Date(publishedAt).toLocaleString()}
					</Typography>
					{urlToImage && (
						<Tooltip title='show image'>
							<ImageIcon />
						</Tooltip>
					)}
				</Box>
			</CardContent>
		</Card>
	);
};

export default NewsItem;
