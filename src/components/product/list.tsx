import { Delete, Detail, Update } from ".";
import { IProduct } from "@/src/types/product/IProduct";
import { Table, TableBody, TableDataColumn, TableHeadColumn, TableHeader, TableRow } from "@/src/components/table";

const List = (props:{ products:IProduct[]}) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadColumn>ID</TableHeadColumn>
            <TableHeadColumn>Name</TableHeadColumn>
            <TableHeadColumn>Amount</TableHeadColumn>
            <TableHeadColumn>Discount Percentage</TableHeadColumn>
            <TableHeadColumn>Inventory</TableHeadColumn>
            <TableHeadColumn>Action</TableHeadColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.products.map((pro) => {
            let singledata:IProduct ={
              active: pro.active,
              amount: pro.amount,
              created_at: pro.created_at,
              deleted_at: pro.deleted_at,
              description: pro.description,
              discount_amount: pro.discount_amount,
              id: pro.id,
              images: pro.images,
              inventory: pro.inventory,
              name: pro.name,
              updated_at: pro.updated_at
            } 
            return (
              <TableRow>
                <TableDataColumn>{pro.id}</TableDataColumn>
                <TableDataColumn>{pro.name}</TableDataColumn>
                <TableDataColumn>{pro.amount}</TableDataColumn>
                <TableDataColumn>{pro.discount_amount}</TableDataColumn>
                <TableDataColumn>{pro.inventory}</TableDataColumn>
                <TableDataColumn>
                  <div className="flex flex-row space-x-2">
                    <Detail data={singledata}/>
                    <Update data={singledata}/>
                    <Delete id={pro.id} name={pro.name} />
                  </div>
                </TableDataColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default List;
