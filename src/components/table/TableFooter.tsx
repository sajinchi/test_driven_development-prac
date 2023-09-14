interface TableFooterProps {
    children: JSX.Element[] | JSX.Element;
}

function TableFooter(props: TableFooterProps) {

    return (
      <tfoot>
        { props.children }
      </tfoot>
    );
  }
  
  export default TableFooter;