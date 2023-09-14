interface TableBodyProps {
    children: JSX.Element | JSX.Element[];
}

function TableBody(props: TableBodyProps) {

    return (
      <tbody>
        { props.children }
      </tbody>
    );

    
  }
  
  export default TableBody;