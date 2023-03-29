import { Container, Typography, Link as MUILink } from '@mui/material';
import { PageTitle } from '../components/PageTitle';

export const NotFoundPage = () => {
	return (
		<Container sx={{ position: 'absolute' }}>
			<PageTitle title='404 | Page not found' sx={{ paddingBottom: 1 }} />
			<Typography variant='body1'>
				The page you are looking for does not exist. Go to{' '}
				<MUILink href='/' target='_self' rel='noopener noreferrer'>
					home page
				</MUILink>
				.
			</Typography>
		</Container>
	);
};
