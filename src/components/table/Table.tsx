interface TableProps {
    children: JSX.Element[];
}

function Table(props: TableProps) {

    return (
      <table className="font-poppins odd:bg-white even:dark:bg-slate-300">
        { props.children }
      </table>
    );
  }
  
  export default Table;