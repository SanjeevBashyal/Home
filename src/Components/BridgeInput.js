import React from 'react';
import ReactDOM from 'react-dom';
import BridgeCalcShow from './BridgeCalcShow';
const BridgeInput = () => {

    const sagCalc=(EA,l,bd,h,gd,g,lf)=>{
        let bi=bd;
        let gi=gd;
        if(lf==0){
            return [[[1,bi,gi,bi,0]],bi];
        }else if (lf==1){
            bi=0.93*bd;
        }else if (lf==2){
            bi=1.22*bd;
        }
        let Ld=lengthCalc(l,h,bd);
        let out=[];
        let i=1;
        let delg=g-gi;
        do {
            let row=[];
            row.push(i);
            row.push(bi);
            gi=(64*EA)/(3*(l**3)*Ld)*bi*(bi**2-bd**2)+(bi/bd)*gd;
            row.push(gi);
            bi=bd+(bi-bd)*(g-gd)/(gi-gd);
            row.push(bi);
            delg=g-gi;
            row.push(delg);
            out.push(row);
        }while(Math.abs(delg)>0.001);
        return [out, bi];

    }

    const lengthCalc=(l,h,b)=>{
        return l*(1+(8/3)*(b/l)**2+(1/2)*(h/l)**2);
    }
    
    const geometryCalc=(b,h,l)=>{
        let A=(4*b)/(l**2);
        let B=(h-4*b)/l;
        let eA=(-B)/(2*A);
        let eB=l-eA;
        let bA=yCalc(A,B,eA);
        let bB=bA-h;
        let thetaA=Math.atan((4*b-h)/l)*180/Math.PI;
        let thetaB=Math.atan((4*b+h)/l)*180/Math.PI;
        return [A+"x^2+"+B+"x",eA,eB,bA,bB,thetaA,thetaB];

    }
    const yCalc=(A,B,x)=>{
        return A*x**2+B*x;
    }

    const loadCalc=(WW,HL,l)=>{
        let DL_add=null;
        if (WW==70){
            DL_add=0.41;
        }else if (WW==106){
            DL_add=0.56;
        }
        let DL=HL+DL_add;

        let LL=null;
        if (l<=50){
            LL=4;
        }else if (l>50){
            LL=3+50/l;
        }
        let WL=0.6;
        let FL=DL+LL+WL;

        return [DL,HL,FL];

    }

    const tensionCalc=(g,l,b,theta)=>{
        let H=(g*l**2)/(8*b);
        let T=H/Math.cos(theta*Math.PI/180);
        return [H,T];
    }

    const cableIdentifier=(WW,l)=>{
        if (WW==70){
            if (l<=50){
                return [2,26,2,26,10.04];
            }
            if (l<=90){
                return [2,26,2,32,12.62];
            }
            if (l<=100){
                return [2,26,4,26,15.06];
            }
            if (l<=120){
                return [2,26,4,32,20.22];
            }
        }else if (WW==106){
            if (l<=40){
                return [2,26,2,26,10.04];
            }
            if (l<=60){
                return [2,26,2,32,12.62];
            }
            if (l<=75){
                return [2,26,4,26,15.06];
            }
            if (l<=105){
                return [2,26,4,32,20.22];
            }
            if (l<=120){
                return [2,32,4,32,22.80];
            }
        }
    }

    const areaCalc=(ls)=>{
        let TA=null;
        let BL=null;
        let i=1;
        for(i=1;i<=2;i++){
            let area=null;
            let bl=null;
            let cs=ls[2*i-1];
            if(cs==13){
                area=73;
                bl=103;
            }else if (cs==26){
                area=292;
                bl=386;
            }else if (cs==32){
                area=442;
                bl=585;
            }else if (cs==36){
                area=560;
                bl=740;
            }else if (cs==40){
                area=691;
                bl=914;
            }
            TA+=ls[2*(i-1)]*area;
            BL+=ls[2*(i-1)]*bl;
        }
        return [TA,BL];
    }

    const calculate=()=>{
        let designer=document.getElementById("designer").value;
        let AL=parseFloat(document.getElementById("A").value);
        let BL=parseFloat(document.getElementById("B").value);
        let l=parseFloat(document.getElementById("Span").value);
        let WW=document.getElementById("walkway").value;
        
        // let warnings=[];
        let b=null;
        if(l<80){
            b=l/20;
        }else{
            b=l/22;
        }
        let h=BL-AL;

        
        let cables=cableIdentifier(WW,l);
        let HL=cables[4]*9.81/1000;
        let AB=areaCalc(cables);
        let Area=AB[0];
        let PL=AB[1];
        let LC=loadCalc(WW,HL,l);
        let lf=[0,1,2];
        let EA=200*Area;
        let i=1;
        let out=[];
        // console.log(EA);
        for(i=0;i<3;i++){
            let row={};
            row.l=l;
            row.biter=sagCalc(EA,l,b,h,LC[0],LC[i],lf[i]);
            row.b=row.biter[1];
            row.geometry=geometryCalc(row.b,h,l);
            if(h>=0){
                row.theta=row.geometry[6];
            }else{
                row.theta=row.geometry[5];
            }
            row.g=LC[i];
            row.tension=tensionCalc(row.g,l,row.b,row.theta);
            row.safety=PL/row.tension[1];
            out.push(row);
        }
        // console.log(out);
        ReactDOM.render(
              <BridgeCalcShow designer={designer} data={out} />,
            document.getElementById('bridge')
          );



    }

    return (
        <div className="designerInput">
            <label id="designerLabel">Designer: </label>
            <input type="text" id="designer"/>
            <div className="bridgeInput">
                <label>RL Bridge Axis Station A: </label>
                <input type="number" id="A"/><br/>
                <label>RL Bridge Axis Station B: </label>
                <input type="number" id="B"/><br/>
                <label>Span: </label>
                <input type="number" id="Span"/><br/>
                <label>Walkway Width: </label>
                <select name="Walkway" id="walkway">
                    <option value="70">70 cm</option>
                    <option value="106">106 cm</option>
                </select><br/>
            </div>
            <button onClick={calculate}>Calculate</button>
        </div>
        
      );
}
 
export default BridgeInput;