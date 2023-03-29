import { styled } from '@mui/system';
import { AButton } from '../Button/Button';
import { Box } from '@mui/material';

const EmptyContainer = styled('div')`
	padding: 10px 10px 10px 10px;
`;
const Empty = styled('div')`
	width: 100%;
	height: 130px;
	border: 1px dotted rgb(115, 115, 115);
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
`;
const EmptyFont = styled('div')`
	font-size: 1em;
	color: rgb(115, 115, 115);
`;

export const EmptyResult: React.FC<{ description: string; refetch?: () => void }> = ({
	description = 'No data',
	refetch,
}): JSX.Element => {
	return (
		<EmptyContainer>
			<Empty>
				<EmptyFont>{description}</EmptyFont>
				{refetch && (
					<Box p={0.5}>
						<AButton onClick={refetch}>Try again</AButton>
					</Box>
				)}
			</Empty>
		</EmptyContainer>
	);
};
