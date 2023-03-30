import logo from '../../assets/logo.png';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/system';
import { AppBar, Toolbar, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectValue, updateModule } from '../../redux/slices/toggleButton';
import { colors } from '../../styles/colors';
import { TaskDescriptionIcon } from '../TaskDescription';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { useLocation } from 'react-router';

export const Header = () => {
	const dispatch = useDispatch();

	const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
		if (nextView !== null) {
			dispatch(updateModule(nextView));
		}
	};

	const moduleType = useSelector(selectValue);

	const location = useLocation();

	return (
		<>
			<AppBar
				position='absolute'
				sx={{
					zIndex: (theme) => theme.zIndex.drawer - 1,
					padding: { xs: '16px 20px 5px 10px' },
					md: '20px 20px 13px 35px',
					boxShadow: 'none',
					backgroundColor: 'transparent',
				}}>
				<Toolbar disableGutters variant='dense'>
					<Box sx={{ display: { xs: 'flex', sd: 'flex', md: 'none' } }}>
						<img src={logo} alt='logo' width='57px' height='46px' />
					</Box>

					<Box
						display='flex'
						justifyContent='flex-end'
						alignItems='center'
						sx={{ flexGrow: 1, cursor: location.pathname === '/' ? 'not-allowed' : 'pointer' }}>
						{location.pathname === '/' && <LanguageSwitcher />}

						<TaskDescriptionIcon />

						<ToggleButtonGroup
							orientation='horizontal'
							value={moduleType}
							exclusive
							onChange={handleChange}
							disabled={location.pathname === '/'}>
							<Tooltip title='List view'>
								<ToggleButton value='list' aria-label='list' selected={moduleType === 'list'}>
									<ViewListIcon sx={{ color: colors.paco }} />
								</ToggleButton>
							</Tooltip>
							<Tooltip title='Module view'>
								<ToggleButton value='module' aria-label='module' selected={moduleType === 'module'}>
									<ViewModuleIcon sx={{ color: colors.paco }} />
								</ToggleButton>
							</Tooltip>
						</ToggleButtonGroup>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};
