interface TableHeadColumnProps {
    children: string;
}

function TableHeadColumn(props: TableHeadColumnProps) {

    return (
      <th>
        { props.children }
      </th>
    );
  }
  
  export default TableHeadColumn;