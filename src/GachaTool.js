import React, {useState} from 'react';
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

// Credit: https://www.math.ucla.edu/~tom/distributions/binomial.html
function bionomial_cdf(X,N,P) {
    function LogGamma(Z) {
        let S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
        let LG= (Z-.5)*Math.log(Z+4.5)-(Z+4.5)+Math.log(S*2.50662827465);
        return LG;
    }
    function Betinc(X,A,B) {
        let A0=0;
        let B0=1;
        let A1=1;
        let B1=1;
        let M9=0;
        let A2=0;
        let C9;
        while (Math.abs((A1-A2)/A1)>.00001) {
            A2=A1;
            C9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);
            A0=A1+C9*A0;
            B0=B1+C9*B0;
            M9=M9+1;
            C9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);
            A1=A0+C9*A1;
            B1=B0+C9*B1;
            A0=A0/B1;
            B0=B0/B1;
            A1=A1/B1;
            B1=1;
        }
        return A1/A;
    }
    let bincdf;
    let Z,A,B,S,BT,Betacdf;
    if (N<=0) {
        alert("sample size must be positive")
    } else if ((P<0)||(P>1)) {
        alert("probability must be between 0 and 1")
    } else if (X<0) {
        bincdf=0
    } else if (X>=N) {
        bincdf=1
    } else {
        X=Math.floor(X);
        Z=P;
        A=X+1;
        B=N-X;
        S=A+B;
        BT=Math.exp(LogGamma(S)-LogGamma(B)-LogGamma(A)+A*Math.log(Z)+B*Math.log(1-Z));
        if (Z<(A+1)/(S+2)) {
            Betacdf=BT*Betinc(Z,A,B)
        } else {
            Betacdf=1-BT*Betinc(1-Z,B,A)
        }
        bincdf=1-Betacdf;
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
    let value=0;
    for (let name in rewards){
        if (!rewards.hasOwnProperty(name))
            continue;
        let r=rewards[name];
        // Disabled reward
        if (r[2]===false) continue;
        let prob_get=1-bionomial_cdf(0,n,r[0]);
        value+=prob_get*r[1];
    }
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

function RewardTable(rewards,setRewards,headers){
    const { value:raddN, bind:bindRaddN, reset:resetRaddN } = useInput('');
    const { value:raddP, bind:bindRaddP, reset:resetRaddP } = useInput('');
    const { value:raddV, bind:bindRaddV, reset:resetRaddV } = useInput('');
    const addReward = (e) =>{
        e.preventDefault();
        setRewards({...rewards, [raddN]:[Number(raddP),Number(raddV),true]});
        resetRaddN();
        resetRaddP();
        resetRaddV();
    };
    const handleSwitch = (e) =>{
        const name=e.target.name;
        let val=[...rewards[name]];
        val[2]=e.target.checked;
        setRewards({...rewards, [name]:val});
    };
    const removeReward = (name) =>{
        let newVal={...rewards};
        delete newVal[name];
        setRewards(newVal);
    };
    let rewardList=[];
    for (let name in rewards){
        if (!rewards.hasOwnProperty(name))
            continue;
        rewardList.push(
                <TableRow key={name}>
                    <TableCell padding='switch'>
                        <Switch color="primary" checked={rewards[name][2]} name={name} onChange={handleSwitch}/>
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{rewards[name][0]}</TableCell>
                    <TableCell>{rewards[name][1]}</TableCell>
                    <TableCell>
                        <Button variant="outlined" color="secondary" onClick={e=>removeReward(name)} >Remove</Button>
                    </TableCell>
                </TableRow>
        );
    }
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox"/>
                        {headers.map(h=>(<TableCell>{h}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rewardList}
                    <TableRow>
                        <TableCell padding="checkbox"/>
                        <TableCell><TextField label="Name" variant="outlined" size="small" required {...bindRaddN}/></TableCell>
                        <TableCell><TextField label="Prob" variant="outlined" size="small" required {...bindRaddP}/></TableCell>
                        <TableCell><TextField label="Value" variant="outlined" size="small" required {...bindRaddV}/></TableCell>
                        <TableCell><Button variant="contained" color="primary" onClick={addReward}>Add</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function calc_spark_value(n,rewards){
    let vals=[];
    for (let name in rewards){
        if (!rewards.hasOwnProperty(name))
            continue;
        let v=rewards[name];
        vals.push([(v[2]?v[1]:0),v[0]]);
    }
    vals.sort((a,b)=>b[0]-a[0]);
    let value=0;
    let prob=1;
    vals.forEach(x=>{
        console.log(x);
        let fail=bionomial_cdf(0,n,x[1]);
        value+=prob*(1-fail)*x[0];
        prob*=fail;
    });
    return value;
}

export function GachaTool() {
    const [rewards, setRewards] = useState({});
    const { value:pulls, bind:bindPulls, reset:resetPulls } = useInput(0);
    const spark_value=calc_spark_value(300-pulls,rewards);
    const gacha_value=calc_gacha_value(300-pulls,rewards);
    return (
        <div>
            <TextField label="Pulls Done" variant="outlined" required {...bindPulls}/>
            <Typography variant="subtitle1">Estimated spark value: {spark_value}</Typography>
            <Typography variant="subtitle1">Gacha value per pull if Spark: {(gacha_value+spark_value)/(300-pulls)}</Typography>
            {
                RewardTable(rewards,setRewards,['Reward','Probability','Value','Action'])
            }
        </div>
    );
}