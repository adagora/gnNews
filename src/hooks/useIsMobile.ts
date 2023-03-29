import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useIsMobile = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.down(size));
};

export default useIsMobile;
