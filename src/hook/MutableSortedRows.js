import {useState,useRef} from "react";

export const useMutableSortedRows = (initialValue,compareFn=(a,b)=>a[0]-b[0]) => {
    //rowsRef is unchanged across setRows.
    const rowsRef=useRef(initialValue);
    const [rows, setRows] = useState(initialValue);
    // can't get rid of rowsRef and use rows directly because of the caller...
    // The caller worker.onmessage is only initialized once in useEffect,
    // meaning its address to upsert is fixed, while the address will change after setRows.
    // resulting in upserting to a stale rows state and have no effect.
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
        // Have to copy to trigger the update
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
        upsert,
        remove
    }
};