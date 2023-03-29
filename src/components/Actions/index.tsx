import React from 'react';
import { MoreVert as MoreIcon } from '@mui/icons-material';

import { ActionItem } from './ActionItem';

interface ActionProps {
	total?: number;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	disableTooltip?: boolean;
}

export const More = ({ onClick, disableTooltip = false }: ActionProps) => (
	<ActionItem title='More' icon={MoreIcon} onClick={onClick} disableTooltip={disableTooltip} />
);
