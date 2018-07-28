import React from 'react';
import { Flex } from 'rebass';
import Cell from '../Cell'

const boardValue = [[{id:0,val:0},{id:1,val:0},{id:2,val:0}],[{id:3,val:0},{id:4,val:0},{id:5,val:0}],[{id:6,val:0},{id:7,val:0},{id:8,val:0}]]

const Board = ({onClick}) => ( boardValue.map((row,idRow) => 
        MakeRow(row,idRow,onClick)     
));

const MakeRow = function(rowValues,idRow,onClick){
    
    const row = [];
    rowValues.map((cellProps)=>
            row.push(<Cell key={cellProps.id} onClick={onClick} />)
    );
    return <Flex key={idRow}>{row}</Flex>
}
    


export default Board;