import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'
import MenuItem from "@material-ui/core/MenuItem";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Credit: https://www.math.ucla.edu/~tom/distributions/binomial.html
function bionomial_cdf(X, N, P) {
    function LogGamma(Z) {
        let S = 1 + 76.18009173 / Z - 86.50532033 / (Z + 1) + 24.01409822 / (Z + 2) - 1.231739516 / (Z + 3) + .00120858003 / (Z + 4) - .00000536382 / (Z + 5);
        let LG = (Z - .5) * Math.log(Z + 4.5) - (Z + 4.5) + Math.log(S * 2.50662827465);
        return LG;
    }

    function Betinc(X, A, B) {
        let A0 = 0;
        let B0 = 1;
        let A1 = 1;
        let B1 = 1;
        let M9 = 0;
        let A2 = 0;
        let C9;
        while (Math.abs((A1 - A2) / A1) > .00001) {
            A2 = A1;
            C9 = -(A + M9) * (A + B + M9) * X / (A + 2 * M9) / (A + 2 * M9 + 1);
            A0 = A1 + C9 * A0;
            B0 = B1 + C9 * B0;
            M9 = M9 + 1;
            C9 = M9 * (B - M9) * X / (A + 2 * M9 - 1) / (A + 2 * M9);
            A1 = A0 + C9 * A1;
            B1 = B0 + C9 * B1;
            A0 = A0 / B1;
            B0 = B0 / B1;
            A1 = A1 / B1;
            B1 = 1;
        }
        return A1 / A;
    }

    let bincdf;
    let Z, A, B, S, BT, Betacdf;
    if (N <= 0) {
        return 0;
    } else if ((P < 0) || (P > 1)) {
        return 0;
    } else if (X < 0) {
        bincdf = 0
    } else if (X >= N) {
        bincdf = 1
    } else {
        X = Math.floor(X);
        Z = P;
        A = X + 1;
        B = N - X;
        S = A + B;
        BT = Math.exp(LogGamma(S) - LogGamma(B) - LogGamma(A) + A * Math.log(Z) + B * Math.log(1 - Z));
        if (Z < (A + 1) / (S + 2)) {
            Betacdf = BT * Betinc(Z, A, B)
        } else {
            Betacdf = 1 - BT * Betinc(1 - Z, B, A)
        }
        bincdf = 1 - Betacdf;
    }
    return bincdf;
}

// restrictions: sum of probability <=1
// m: reward array, [reward, probability, value], sum(probability)<=1
// b: bonus array, [tries, value]
// n: num of tries
// c: cost of each try
// returns: value / cost
function calc_gacha_value(n, rewards) {
    let value = 0;
    for (let name in rewards) {
        if (!rewards.hasOwnProperty(name))
            continue;
        let r = rewards[name];
        // Disabled reward
        if (r[2] === false) continue;
        let prob_get = 1 - bionomial_cdf(0, n, r[0]);
        value += prob_get * r[1];
    }
    return value;
}


function calc_spark_value(n, rewards) {
    let vals = [];
    for (let name in rewards) {
        if (!rewards.hasOwnProperty(name))
            continue;
        let v = rewards[name];
        vals.push([(v[2] ? v[1] : 0), v[0]]);
    }
    vals.sort((a, b) => b[0] - a[0]);
    let value = 0;
    let prob = 1;
    vals.forEach(x => {
        let fail = bionomial_cdf(0, n, x[1]);
        value += prob * fail * x[0];
        prob *= (1-fail);
    });
    return value;
}

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

function NameInputDialog(description,title,open,handleCancel,handleConfirm,bindName){
    return(
    <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Save Profile</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {description}
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="profileName"
                label="Profile Name"
                fullWidth
                {...bindName}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleConfirm} color="primary">
                Confirm
            </Button>
        </DialogActions>
    </Dialog>);
}

function RewardTable(rewards, setRewards, headers) {
    const {value: raddN, bind: bindRaddN, reset: resetRaddN} = useInput('');
    const {value: raddP, bind: bindRaddP, reset: resetRaddP} = useInput('');
    const {value: raddV, bind: bindRaddV, reset: resetRaddV} = useInput('');
    const addReward = (e) => {
        e.preventDefault();
        setRewards({...rewards, [raddN]: [Number(raddP), Number(raddV), true]});
        resetRaddN();
        resetRaddP();
        resetRaddV();
    };
    const handleSwitch = (e) => {
        const name = e.target.name;
        let val = [...rewards[name]];
        val[2] = e.target.checked;
        setRewards({...rewards, [name]: val});
    };
    const removeReward = (name) => {
        let newVal = {...rewards};
        delete newVal[name];
        setRewards(newVal);
    };
    let rewardList = [];
    for (let name in rewards) {
        if (!rewards.hasOwnProperty(name))
            continue;
        rewardList.push(
            <TableRow key={name}>
                <TableCell padding="none">
                    <Switch color="primary" checked={rewards[name][2]} name={name} onChange={handleSwitch}/>
                </TableCell>
                <TableCell padding="none">{name}</TableCell>
                <TableCell padding="none">{rewards[name][0]}</TableCell>
                <TableCell padding="none">{rewards[name][1]}</TableCell>
                <TableCell>
                    <Button variant="outlined" color="secondary" onClick={e => removeReward(name)}>Del</Button>
                </TableCell>
            </TableRow>
        );
    }
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="none">
                            <Switch disabled/>
                        </TableCell>
                        {headers.map(h => (<TableCell padding="none" align="center" key={h}>{h}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rewardList}
                    <TableRow>
                        <TableCell padding="none"/>
                        <TableCell padding="none" size="small"><TextField fullWidth label="Name" variant="outlined" size="small"
                                              required {...bindRaddN}/></TableCell>
                        <TableCell padding="none" size="small"><TextField fullWidth label="Prob" variant="outlined" size="small"
                                              required {...bindRaddP}/></TableCell>
                        <TableCell padding="none" size="small"><TextField fullWidth label="Value" variant="outlined" size="small"
                                              required {...bindRaddV}/></TableCell>
                        <TableCell size="small"><Button variant="contained" color="primary"
                                           onClick={addReward}>Add</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function ProfileSelect(rewards, setRewards) {
    const defaultProfiles = {
        "Limited-3": {
            'Focus-1': [0.004, 30, true],
            'Focus-2': [0.004, 20, true],
            'Focus-3': [0.004, 10, true],
            'Perm': [0.018, 2, true]
        },
        "Limited-2": {
            'Focus-1': [0.004, 30, true],
            'Focus-2': [0.004, 10, true],
            'Perm': [0.022, 2, true]
        },
        "Limited-1": {
            'Focus-1': [0.0075, 30, true],
            'Perm': [0.0225, 2, true]
        },
        "Cinfes-2": {
            'Focus-1': [0.005, 20, true],
            'Focus-2': [0.005, 15, true],
            'Fes-Type': [0.00375, 15, true],
            'Fes-Other': [0.00375, 15, true],
            'Perm': [0.0425, 2, true],
            'Fes-Spark': [0, 30, true]
        },
        "Cinfes-1": {
            'Focus-1': [0.0075, 20, true],
            'Fes-Type': [0.00375, 15, true],
            'Fes-Other': [0.00375, 15, true],
            'Perm': [0.045, 2, true],
            'Fes-Spark': [0, 30, true]
        },
        "Empty":{

        }
    };
    let localProfiles = localStorage.getItem("profiles");
    if (localProfiles===null){
        localProfiles=defaultProfiles;
        localStorage.setItem("profiles",JSON.stringify(localProfiles));
    }else{
        localProfiles=JSON.parse(localProfiles);
    }
    const [profiles, setProfiles] = useState(localProfiles);
    let defaultSelected="";
    for (let pname in profiles){
        if (!profiles.hasOwnProperty(pname)) continue;
        defaultSelected=pname;
        break;
    }

    const [open, setOpen] = React.useState(false);
    const {value: profileName, bind: bindProfileName, reset: resetProfileName} = useInput("");

    const {value: profile, bind: bindProfile} = useInput(defaultSelected);
    const handleLoad = (e) => {
        e.preventDefault();
        if (profile === "" || !profiles.hasOwnProperty(profile)) return;
        setRewards(profiles[profile]);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        if (profile === "" || !profiles.hasOwnProperty(profile)) return;
        const newProfiles={...profiles};
        delete newProfiles[profile];
        resetProfileName();
        localStorage.setItem("profiles",JSON.stringify(newProfiles));
        setProfiles(newProfiles);
    };
    const handleSave = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleConfirm = (e) => {
        e.preventDefault();
        const newProfiles={...profiles,[profileName]: {...rewards}};
        localStorage.setItem("profiles",JSON.stringify(newProfiles));
        setOpen(false);
        setProfiles(newProfiles);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    let profileList = [];
    for (let name in profiles) {
        if (!profiles.hasOwnProperty(name))
            continue;
        profileList.push(
            <MenuItem key={name} value={name}>{name}</MenuItem>
        );
    }

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField select fullWidth label="Select Profile" {...bindProfile} xs={6}>
                        {profileList}
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth onClick={handleLoad}>Load</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button margin="normal" variant="contained" fullWidth color="secondary" onClick={handleDelete}>Delete</Button>
                </Grid>
                    <Grid item xs={4}>
                        <Button margin="normal" variant="contained" fullWidth color="primary" onClick={handleSave}>Save</Button>
                    </Grid>
            </Grid>
            {
                NameInputDialog("Enter the name for current gacha profile to save(override if exists):",
                "Save Profile",
                open,
                handleCancel,
                handleConfirm,
                bindProfileName)
            }
        </div>
    );
}

function RefValueTable(pulls,rewards){
    let defaultRefValues=localStorage.getItem("refValues");
    if (defaultRefValues===null){
        defaultRefValues=[];
        localStorage.setItem("refValues",JSON.stringify([]));
    }else{
        defaultRefValues=JSON.parse(defaultRefValues);
    }
    const [refValues,setRefValues]=useState(defaultRefValues);

    const removeRefValue = (name) => {
        let newVal = refValues.filter(x=>x[0]!==name);
        localStorage.setItem("refValues",JSON.stringify(newVal));
        setRefValues(newVal);
    };

    const [open, setOpen] = React.useState(false);
    const {value: refValueName, bind: bindRefValueName} = useInput("");
    const [selectedRefValue,setSelectedRefValue]=useState([]);
    const handleAdd=(refValue)=>{
        setSelectedRefValue(refValue);
        setOpen(true);
    };

    const handleCancel=()=>{
        setOpen(false);
    };

    const addRefValue = () => {
        let newVal = refValues.filter(x=>x[0]!==refValueName);
        newVal.push([refValueName,selectedRefValue[1]]);
        localStorage.setItem("refValues",JSON.stringify(newVal));
        setRefValues(newVal);
        setOpen(false);
    };

    let pullsToSpark=300-pulls;
    let valueSpark=(calc_gacha_value(pullsToSpark, rewards) + calc_spark_value(pullsToSpark, rewards)) / pullsToSpark;
    let value10=calc_gacha_value(10,rewards) / 10;
    let refValueRows = [];
    for (let rv of [...refValues,["10 Pulls",value10,true],[pullsToSpark+" Pulls",valueSpark,true]].sort((a,b)=>b[1]-a[1])) {
        refValueRows.push(
            <TableRow key={rv[0]}>
                <TableCell style={rv[2]?{background:"LightGreen"}:{background:"white"}}>{rv[0]}</TableCell>
                <TableCell>{Math.round(rv[1]*100000)/100000}</TableCell>
                <TableCell>
                    {
                        rv[2]
                            ? <Button variant="outlined" color="primary" onClick={e => handleAdd(rv)}>Pin</Button>
                            : <Button variant="outlined" color="secondary" onClick={e => removeRefValue(rv[0])}>Del</Button>
                    }
                </TableCell>
            </TableRow>
        );
    }
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ref Name</TableCell>
                        <TableCell>Value per pull</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {refValueRows}
                </TableBody>
            </Table>
            {
                NameInputDialog("Save current ref value as:",
                    "Save Ref Value",
                    open,
                    handleCancel,
                    addRefValue,
                    bindRefValueName)
            }
        </TableContainer>
    );
}

export function GachaTool(setTitle) {
    const [rewards, setRewards] = useState({});
    const {value: pulls, bind: bindPulls} = useInput(0);
    const spark_value = calc_spark_value(300 - pulls, rewards);
    useEffect(()=>{
        setTitle("Gacha Tool")
    });
    return (
        <div>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid container item xs={12} md={4} lg={3}>
                    <Paper>
                        <TextField autoFocus margin="normal" label="Pulls Done" variant="outlined" required {...bindPulls}/>
                        {
                            ProfileSelect(rewards, setRewards)
                        }
                        <Typography variant="subtitle1">Estimated spark value: {spark_value}</Typography>
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper>
                        {
                            RefValueTable(pulls,rewards)
                        }
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper>
                    </Paper>
                </Grid>
            </Grid>
            {
                RewardTable(rewards, setRewards, ['Reward', 'Prob', 'Value', 'Action'])
            }
        </div>
    );
}