import {useState,useRef} from "react";

export const useMutableSortedRows = (initialValue,compareFn=(a,b)=>a[0]-b[0]) => {
    const rowsRef=useRef(initialValue);
    const [rows, setRows] = useState(initialValue);
    const upsert = x => {
        let newRows=rowsRef.current;
        let p=newRows.findIndex(y=>y[0]===x[0]);
        if (p!==-1)
            newRows.splice(p,1);
        for (p=0; p<newRows.length; ++p){
            if (compareFn(x,newRows[p])<=0)
                break;
        }
        newRows.splice(p,0,x);
        setRows([...newRows]);
    };

    const remove = x => {
        let newRows=rowsRef.current;
        let p=newRows.findIndex(y=>y[0]===x[0]);
        if (p!==-1)
            newRows.splice(p,1);
        setRows([...newRows]);
    };

    return {
        rows,
        setRows,
        upsert,
        remove
    }
};