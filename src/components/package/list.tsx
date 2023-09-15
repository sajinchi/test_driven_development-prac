import React, { useEffect, useState } from 'react'

import { Delete, Detail, Update } from '.';
import { IPackage } from '@/src/types/package/IPackage';
import { Table, TableHeader, TableRow, TableHeadColumn, TableBody, TableDataColumn } from '../table';

const List = (props:{packages:IPackage[]}) => {
  return (
    <div>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHeadColumn>ID</TableHeadColumn>
            <TableHeadColumn>Name</TableHeadColumn>
            <TableHeadColumn>Amount</TableHeadColumn>
            <TableHeadColumn>Type</TableHeadColumn>
            <TableHeadColumn>Action</TableHeadColumn>
          </TableRow>
        </TableHeader>
        <TableBody>

      {props.packages.map((pack)=>{
        let singledata:IPackage ={
            amount: pack.amount,
            description: pack.description,
            id: pack.id,
            name: pack.name,
            type: pack.type,
            paymentTypes: pack.paymentTypes
        }
          return(
            <TableRow>
                <TableDataColumn>{pack.id}</TableDataColumn>
                <TableDataColumn>{pack.name}</TableDataColumn>
                <TableDataColumn>{pack.amount}</TableDataColumn>
                <TableDataColumn>{pack.type}</TableDataColumn>
                <TableDataColumn>
                <div className="flex flex-row space-x-2">
                    <Detail data={singledata}/>
                    <Update data={singledata}/>
                    <Delete id={pack.id} name={pack.name}/>
                  </div>
                </TableDataColumn>
            </TableRow>
        )
    })}
    </TableBody>
    </Table>
    </div>
  )
}

export default List
