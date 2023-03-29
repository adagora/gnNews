interface TableSearchProps {
  /**
   * Rows from the table.
   */
  rows: Array<any>;
  /**
   * Columns from the table.
   */
  columns: Array<any>;
  /**
   * Title displayed above the search input.
   */
  tableSearchTitle?: string;
  /**
   * Sends the rows with the searched information back to Table.
   */
  onSearch?: (data: any) => void;
}

export default TableSearchProps;
