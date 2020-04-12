import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";


export default function MatchedTable(props) {
    const {headers,items}=props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map(x => (<TableCell>{x}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item =>
                        <TableRow key={item[0]}>
                            {item.map(x => (<TableCell>{x}</TableCell>))}
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}