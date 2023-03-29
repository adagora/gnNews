import React from 'react';

// TypeScript interface with XOR
// Solution for missing conditional types in TypeScript
// https://stackoverflow.com/questions/44425344/typescript-interface-with-xor-barstring-xor-cannumber

type Without<T, U> = {
	[P in Exclude<keyof T, keyof U>]?: never;
};

export type XOR<T, U> = T | U extends Record<string, unknown> ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

interface RawOptions {
	raw: boolean;
	customClassName?: string;
}

interface RendererOptions<TRow = any> {
	render: (value: any, row: TRow) => React.ReactNode;
	customClassName?: string;
}

interface NestedDataOptions<TRow = any> {
	enableNestedDataAccess: string;
	customClassName?: string;
}

export interface TableColumn<TRow = any> {
	/**
	 * Column label that is displayed to the user.
	 */
	title: string;
	/**
	 * Column unique identifier and key used to access row value
	 */
	key: string;
	/**
	 * Disables sorting for given column
	 */
	disableSorting?: boolean;
	/**
	 * Custom sort function for given column
	 */
	customSort?: (rows: any, columnKey: any, order: any) => any;
	/**
	 * Additional column options.
	 */
	options: XOR<RawOptions, XOR<RendererOptions, NestedDataOptions<TRow>>>;
	/**
	 * Exludes columns from search.
	 */
	unsearchable?: boolean;
	/**
	 * left' | 'center' | 'right.
	 */
	textAlign?: 'left' | 'center' | 'right';
}

interface TableProps<TRow = any> {
	/**
	 * Data for columns inserted into table.
	 */
	columns: Array<TableColumn<TRow>>;
	/**
	 * Data for rows inserted into table.
	 */
	rows: Array<TRow>;
	/**
	 * Insert a unique key in table row from table column key.
	 */
	rowKey?: string;
	/**
	 * Sets the size of the table.
	 */
	size?: 'small' | 'medium';
	/**
	 * Shows the search field.
	 */
	showSearch?: boolean;
	/**
	 * Title displayed above the search input.
	 */
	tableSearchTitle?: string;
	/**
	 * Disables sorting.
	 */
	disableSorting?: boolean;
	/**
	 * Determines if the table header is visible.
	 */
	hideHeader?: boolean;
	/**
	 * Determines if the table header is fixed when scrolling.
	 */
	fixedHeader?: boolean;
	/**
	 * Sets the max width of the table.
	 */
	tableMaxWidth?: string | number;
	/**
	 * Sets the max height of the table.
	 */
	tableMaxHeight?: string | number;
	/**
	 * Sets the cells padding/size.
	 */
	cellPadding?: string;
	/**
	 * Determines if information within the cell are multilined or in one row.
	 */
	multiline?: boolean;
	/**
	 * @param overrideMuiStyles - overrides material ui styles
	 */
	overrideMuiStyles?: any;
	/**
	 * When sorting is changed (by clicking the header),
	 * passes information about the current sorting state (before the event).
	 */
	onSortChange?: (columnName: string, sortDirection: 'desc' | 'asc') => void;
	/**
	 *  If set to true, table will not perform client-side sorting when sort changes.
	 */
	useExternalSort?: boolean;
	/**
	 * Use the rest of Table props https://material-ui.com/api/table/
	 */
	otherTableProps?: any;
	/**
	 * Use the rest of TableBody props https://material-ui.com/api/table-body/
	 */
	otherTableBodyProps?: any;
	/**
	 * Use the rest of TableCell props https://material-ui.com/api/table-cell/
	 */
	otherTableCellProps?: any;
	/**
	 * Use the rest of TableContainer props https://material-ui.com/api/table-container/
	 */
	otherTableContainerProps?: any;
	/**
	 * Use the rest of TableHead props https://material-ui.com/api/table-head/
	 */
	otherTableHeadProps?: any;
	/**
	 * Use the rest of TableRow props https://material-ui.com/api/table-row/
	 */
	otherTableRowProps?: any;
	/**
	 * Use the rest of TableSortLabel props https://material-ui.com/api/table-sort-label/
	 */
	otherTableSortLabelProps?: any;
}

export default TableProps;
