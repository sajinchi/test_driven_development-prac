interface TableHeaderProps {
    children: JSX.Element;
}

function TableHeader(props: TableHeaderProps) {

    return (
      <thead>
        {props.children}
      </thead>
    );
  }
  
  export default TableHeader;