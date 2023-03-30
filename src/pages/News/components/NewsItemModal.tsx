import { CardActions, CardContent, CardHeader, CardMedia, Link, Tooltip, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { selectOpen, setClose } from '../../../redux/slices/modalAction';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../../components/Modal';
import { Box } from '@mui/system';
import { GAvatar } from '../../../components/GAvatar';

interface NewsItemProps {
	author: string;
	url: string;
	description: string;
	image: string;
	content: string;
}

const NewsItemModal = ({ author, url, description, image, content }: NewsItemProps) => {
	const dispatch = useDispatch();
	const isModalOpen = useSelector(selectOpen);

	const handleClose = () => {
		dispatch(setClose());
	};

	return (
		<Modal isOpen={isModalOpen} handleClose={handleClose}>
			<Box>
				<CardHeader
					title={author}
					subheader={content}
					avatar={<GAvatar name={author} />}
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

				{image && <CardMedia component='img' height='194' image={image} alt='modal-img' />}

				<CardContent>
					{description ? (
						<Typography variant='body1' color='text.primary'>
							{description}
						</Typography>
					) : (
						<Typography variant='body1' color='text.primary'>
							No description
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
