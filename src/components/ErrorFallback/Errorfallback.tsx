import React, { Suspense } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Alert, AlertTitle } from '@mui/material';
import { AButton } from '../Button/Button';
import { Box } from '@mui/system';
import { CircleLoader } from '../CircleLoader';
import { PageTitle } from '../PageTitle';

interface ErrorFallbackProps {
	children: React.ReactNode;
	errorMessage?: string;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
	children,
	errorMessage = 'Sorry, we have troubles getting information about this settings from our server!',
}: ErrorFallbackProps): JSX.Element => {
	const history = useHistory();
	const location = useLocation();

	return (
		<QueryErrorResetBoundary>
			{({ reset }) => (
				<ErrorBoundary
					onReset={reset}
					fallbackRender={({ resetErrorBoundary }) => (
						<>
							<PageTitle
								title={
									location.pathname.replaceAll('/', ' ').trimStart().charAt(0).toUpperCase() +
									location.pathname.replaceAll('/', ' ').trimStart().slice(1)
								}
								sx={{ pb: 1 }}
							/>

							<Alert severity='error'>
								<AlertTitle>Error {errorMessage}</AlertTitle>
								<Box display='flex' alignContent={'center'} justifyContent='center' justifyItems={'center'} height={50}>
									<Box
										display='flex'
										role='button'
										tabIndex={0}
										width='30%'
										onClick={() => resetErrorBoundary}
										onKeyDown={() => resetErrorBoundary}>
										<AButton onClick={() => history.goBack()} color='primary'>
											Go back
										</AButton>
										<Box p={1} />
										<AButton onClick={() => resetErrorBoundary()} color='primary'>
											Try again
										</AButton>
									</Box>
								</Box>
							</Alert>
						</>
					)}>
					<Suspense fallback={<CircleLoader size={100} />}>{children}</Suspense>
				</ErrorBoundary>
			)}
		</QueryErrorResetBoundary>
	);
};
