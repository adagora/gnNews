import { Typography } from '@mui/material';
import { SxProps } from '@mui/material';

export const PageTitle = ({ title, sx }: { title: string; sx?: SxProps }) => (
	<Typography variant='h1' sx={sx}>
		{title}
	</Typography>
);
