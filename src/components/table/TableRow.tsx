interface TableRowProps {
    children: JSX.Element | JSX.Element[];
}

function TableRow(props: TableRowProps) {

    return (
      <tr>
        { props.children }
      </tr>
    );
  }
  
  export default TableRow;