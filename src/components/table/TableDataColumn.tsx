interface TableDataColumnProps {
    children: number | string | JSX.Element[] | JSX.Element;
}

function TableDataColumn(props: TableDataColumnProps) {

    return (
      <td className="px-3 "> 
        {props.children}
      </td>
    );
  }
  
  export default TableDataColumn;