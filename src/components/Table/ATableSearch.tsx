import { useEffect, useState } from 'react';
import TableSearchProps from './models/TableSearchProps';
import { Input } from '../Input';
import { styled } from '@mui/system';

export const TableSearchTitle = styled('div')`
	font-size: 1.5em;
	letter-spacing: 0;
	color: #5a7681;
	opacity: 1;
	text-align: left;
	letter-spacing: 0px;
`;

export const TableSearchMain = styled('div')`
	display: flex;
	margin: 0 calc(4px + 1px) 0 calc(4px + 1px);
`;

export const TableSearchSearch = styled('div')`
	display: flex;
	max-width: 260px;
	margin: 0 calc(12px - 1px) 0 auto;
	padding: calc(4px + 2px);
`;

/**
 * Search fields for CM Table component.
 */
export const ATableSearch = ({
	rows,
	columns,
	tableSearchTitle,
	onSearch = () => null,
}: TableSearchProps): JSX.Element => {
	const [tableRows] = useState(rows);
	const [tableColumns] = useState(columns);
	const [unsearchableColumns] = useState(Array);

	useEffect(() => {
		for (let i = 0; i < tableColumns.length; i += 1) {
			// eslint-disable-next-line no-prototype-builtins
			if (tableColumns[i].hasOwnProperty('unsearchable') && tableColumns[i].unsearchable) {
				unsearchableColumns.push(tableColumns[i].key);
			}
		}
	}, [tableColumns]);

	const [searchTerm, setSearchTerm] = useState('');
	useEffect(() => {
		function filterData(dt: any, term: string): any {
			if (term === '') {
				return dt;
			}
			const result = dt.filter((row: any) => {
				for (const [key, value] of Object.entries(row)) {
					if (unsearchableColumns.includes(key)) {
						continue;
					}

					if (typeof value === 'string') {
						if (value.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
							return true;
						}
					} else if (typeof value === 'number') {
						if (value.toString().indexOf(term) >= 0) {
							return true;
						}
					}
				}
				return false;
			});
			return result;
		}

		const delayDebounceFn = setTimeout(() => {
			onSearch(filterData(tableRows, searchTerm));
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	return (
		<div>
			<TableSearchMain>
				{tableSearchTitle && <TableSearchTitle>{tableSearchTitle}</TableSearchTitle>}
				<TableSearchSearch>
					<Input placeholder='Search by title' onChange={(e) => setSearchTerm(e.target.value)} />
				</TableSearchSearch>
			</TableSearchMain>
		</div>
	);
};
