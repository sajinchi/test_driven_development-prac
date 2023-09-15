import React from "react";

import { Delete, Detail, Download } from ".";
import { IInvoice } from "@/src/types/invoice/IInvoice";
import { Table, TableBody, TableDataColumn, TableHeadColumn, TableHeader, TableRow } from "../table";

const List = (props:{invoice:IInvoice[]}) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadColumn>ID</TableHeadColumn>
            <TableHeadColumn>Action</TableHeadColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.invoice.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableDataColumn>{data.id}</TableDataColumn>
                <TableDataColumn>
                  <div className="flex flex-row space-x-2">
                  <Detail detail={data} />
                  <Download id={data.id} />
                  <Delete id={data.id} />
                  </div>
                </TableDataColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default List;
