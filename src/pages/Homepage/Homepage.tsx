import { Container } from '@mui/system';
import { PageTitle } from '../../components/PageTitle';
import { Typography } from '@mui/material';

const Homepage = () => {
	return (
		<Container sx={{ position: 'absolute' }}>
			<PageTitle title='Homepage' sx={{ paddingBottom: 1 }} />
			<Typography variant='h6'>
				This application is demo, it shows you news from api for each available country.
			</Typography>
			<Typography variant='body1'>Choose country from menu on the left.</Typography>
		</Container>
	);
};

export default Homepage;
