interface TableCaptionProps {
    children: string;
}

function TableCaption(props: TableCaptionProps) {

    return (
      <caption>
        { props.children }
      </caption>
    );
  }
  
  export default TableCaption;