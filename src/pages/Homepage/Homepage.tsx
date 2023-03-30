import { Container } from '@mui/system';
import { PageTitle } from '../../components/PageTitle';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
	const { t } = useTranslation();

	return (
		<Container sx={{ position: 'absolute' }}>
			<PageTitle title={t('Homepage')} sx={{ paddingBottom: 1 }} />
			<Typography variant='h6'>
				{t('This application is demo, it shows you news from api for each available country.')}
			</Typography>
			<Typography variant='body1'>{t('Choose country from menu on the left.')}</Typography>
		</Container>
	);
};

export default Homepage;
