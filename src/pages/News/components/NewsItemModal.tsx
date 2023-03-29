import { Avatar, CardActions, CardContent, CardHeader, CardMedia, Link, Tooltip, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { selectOpen, setClose } from '../../../redux/slices/modalAction';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../../components/Modal';
import { Box } from '@mui/system';

interface NewsItemProps {
	author: string;
	url: string;
	description: string;
	image: string;
}

const NewsItemModal = ({ author, url, description, image }: NewsItemProps) => {
	const dispatch = useDispatch();
	const isModalOpen = useSelector(selectOpen);

	const handleClose = () => {
		dispatch(setClose());
	};

	const authorInitials = author
		?.split(' ')
		.map((name) => name[0])
		.join('')
		.toUpperCase();

	const bgColorAvatar = Math.floor(0x1000000 * Math.random()).toString(16);

	return (
		<Modal isOpen={isModalOpen} handleClose={handleClose}>
			<Box>
				<CardHeader
					title={author}
					subheader={url}
					avatar={
						<Avatar sx={{ bgcolor: bgColorAvatar }} aria-label='recipe'>
							{authorInitials}
						</Avatar>
					}
				/>

				{image && <CardMedia component='img' height='194' image={image} alt='modal-img' />}

				<CardContent>
					{description && (
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					)}

					{url && (
						<CardActions disableSpacing>
							<Tooltip title='Source'>
								<Link href={url} target='_blank' rel='noopener noreferrer' underline='none'>
									<OpenInNewIcon />
								</Link>
							</Tooltip>
						</CardActions>
					)}
				</CardContent>
			</Box>
		</Modal>
	);
};

export default NewsItemModal;
