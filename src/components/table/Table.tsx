interface TableProps {
    children: JSX.Element[];
}

function Table(props: TableProps) {

    return (
      <table>
        { props.children }
      </table>
    );
  }
  
  export default Table;