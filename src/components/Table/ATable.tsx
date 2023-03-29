/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import CMTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import _orderBy from 'lodash/orderBy';
import { v4 as uuidv4 } from 'uuid';

import TableProps from './models/TableProps';
import { ATableSearch } from './ATableSearch';
import { styled } from '@mui/system';

type Order = 'asc' | 'desc';

export const TableTextHeader = styled('div')`
	font-size: 12px;
	letter-spacing: 0;
	color: rgb(115, 115, 115);
	opacity: 1;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 18px;
`;

export const TableFontText = styled('div')`
	font-size: 12px;
	letter-spacing: 0;
	color: #fff;
	opacity: 1;
	font-weight: 400;
	line-height: 18px;
`;

export const TableEmptyContainer = styled('div')`
	padding: 20px 10px 20px 10px;
`;
export const TableEmpty = styled('div')`
	width: 100%;
	height: 150px;
	border: 1px dotted rgb(115, 115, 115);
	justify-content: center;
	align-items: center;
	display: flex;
	border-radius: 10px;
`;
export const TableEmptyFont = styled('div')`
	font-size: 1em;
	color: rgb(115, 115, 115);
`;

export const ATable = ({
	columns,
	rows,
	rowKey = '',
	size = 'medium',
	showSearch = true,
	tableSearchTitle,
	disableSorting = false,
	hideHeader = false,
	fixedHeader = false,
	tableMaxWidth,
	tableMaxHeight,
	cellPadding,
	multiline = false,
	onSortChange = () => null,
	useExternalSort,
	otherTableProps,
	otherTableBodyProps,
	otherTableCellProps,
	otherTableContainerProps,
	otherTableHeadProps,
	otherTableRowProps,
	otherTableSortLabelProps,
}: TableProps): JSX.Element => {
	const [order, setOrder] = useState<Order>('desc');
	const [orderBy, setOrderBy] = useState('');
	const [_columns] = useState(columns);
	const [_rows, setRows] = useState(rows);
	const [noDataContent, setNoDataContent] = useState(false);
	const [noSearchMatchContent, setNoSearchMatchContent] = useState(false);
	// const _rows = rows;

	useEffect(() => {
		if (rows.length === 0) {
			setNoDataContent(true);
		} else {
			setNoDataContent(false);
			setRows(rows);
		}
	}, [rows]);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: string): any => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
		onSortChange(property, order);
	};

	const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
		handleRequestSort(event, property);
	};

	function stableSort(array: any[], key: any, ordr: any): any {
		if (useExternalSort) {
			return array;
		}
		const sorted = _orderBy(array, key, ordr);
		return sorted;
	}

	function wrapStableSort(array: any[], key: any, ordr: any): any {
		if (key) {
			for (let i = 0; i < _columns.length; i += 1) {
				if (
					_columns[i].key === key &&
					// eslint-disable-next-line no-prototype-builtins
					_columns[i].hasOwnProperty('customSort')
				) {
					// eslint-disable-next-line no-prototype-builtins
					if (_columns[i].hasOwnProperty('customSort')) {
						return columns[i].customSort!(array, key, ordr);
					}
					break;
				}
			}
		}
		return stableSort(array, key, ordr);
	}

	function searchFilterFunction(filteredData: any): void {
		if (filteredData.length === 0) {
			setNoSearchMatchContent(true);
		} else {
			setNoSearchMatchContent(false);
		}
		setRows(filteredData);
	}

	function extractNestedData(columnKey: string, rowData: Record<string, any>, point: string): React.ReactNode {
		const enableNestedDataAccess = point;
		const extractor = (obj, path): React.ReactNode =>
			(enableNestedDataAccess ? path.split(enableNestedDataAccess) : path.split()).reduce(
				(value, el) => (value ? value[el] : undefined),
				obj
			);

		const extractedData = extractor(rowData, columnKey);
		return extractedData;
	}

	return (
		<>
			{showSearch && (
				<ATableSearch
					rows={rows}
					columns={columns}
					// eslint-disable-next-line react/jsx-no-bind
					onSearch={(e) => searchFilterFunction(e)}
					tableSearchTitle={tableSearchTitle}
				/>
			)}
			<TableContainer
				sx={{ boxShadow: 'none' }}
				style={{ maxWidth: tableMaxWidth, maxHeight: tableMaxHeight }}
				{...otherTableContainerProps}>
				<CMTable aria-label='Table' size={size} stickyHeader={fixedHeader} {...otherTableProps}>
					{!hideHeader && (
						<TableHead {...otherTableHeadProps}>
							<TableRow
								{...otherTableRowProps}
								sx={{
									// remove line between header and body
									'& th': { border: 0 },
								}}>
								{_columns.map((column: any) => (
									<TableCell
										// width='20%'
										// align='left'
										borderBottom='none'
										whiteSpace='nowrap'
										display='flex'
										key={column.key}
										style={{ padding: cellPadding, textAlign: column.textAlign }}
										{...otherTableCellProps}>
										{!disableSorting && (
											<TableSortLabel
												active={orderBy === column.key}
												direction={orderBy === column.key ? order : 'asc'}
												onClick={createSortHandler(column.key)}
												disabled={column.disableSorting}
												{...otherTableSortLabelProps}>
												<TableTextHeader>{column.title}</TableTextHeader>
											</TableSortLabel>
										)}
										{disableSorting && <TableTextHeader>{column.title}</TableTextHeader>}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
					)}
					<TableBody {...otherTableBodyProps}>
						{wrapStableSort(_rows, orderBy, order).map((row: any) => (
							<TableRow
								display='flex'
								sx={{
									// remove Line
									'& td': { border: 0 },
									// remove the last line
									'&:last-child td, &:last-child th': { border: 0 },
									// add hover
									'&:hover': {
										boxShadow: '0 0 10 rgba(47, 200, 111, 0.1)',
										backgroundColor: 'rgba(47, 200, 111, 0.1)',
									},
								}}
								key={rowKey ? row[rowKey] : uuidv4()}
								{...otherTableRowProps}>
								{_columns.map((column: any) => {
									return (
										<TableCell
											key={uuidv4()}
											style={{ padding: cellPadding }}
											{...otherTableCellProps}
											width='20%'
											borderBottom='none'
											whiteSpace='nowrap'
											display='flex'>
											<TableFontText
												sx={
													multiline
														? {
																wordBreak: 'break-word',
																whiteSpace: 'normal',
																maxWidth: '300px',
														  }
														: {
																maxWidth: '100%',
																textAlign: column.textAlign,
																overflow: 'hidden',
																textOverflow: 'ellipsis',
														  }
												}>
												{column.options && column.options.render && column.options.render(row[column.key], row)}
												{column.options &&
													column.options.enableNestedDataAccess &&
													extractNestedData(column.key, row, column.options.enableNestedDataAccess)}
												{column.options && column.options.raw && row[column.key]}
											</TableFontText>
										</TableCell>
									);
								})}
							</TableRow>
						))}
					</TableBody>
				</CMTable>
			</TableContainer>
			{noDataContent && (
				<TableEmptyContainer>
					<TableEmpty>
						<TableEmptyFont>No data</TableEmptyFont>
					</TableEmpty>
				</TableEmptyContainer>
			)}
			{noSearchMatchContent && !noDataContent && (
				<TableEmptyContainer>
					<TableEmpty>
						<TableEmptyFont>No matching content</TableEmptyFont>
					</TableEmpty>
				</TableEmptyContainer>
			)}
		</>
	);
};
