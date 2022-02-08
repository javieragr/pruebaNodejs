var arr =[["A","T","C","G"],
          ["T","A","A","G"],
          ["A","T","A","G"],
          ["A","G","G","G"]]

//A,T,C,G
// var A=[]; T=[],C=[],G=[];
// for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
    
//     for (let k = 0; k < arr[i].length; k++) {
//         const element = arr[i][k];
//         // console.log(element,i,k);
//             switch (element) {
//             case 'A':
//             A.push({p:i,k:k})
//             break;

//             case 'T':
//                 T.push({p:i,k:k})
//             break;
//             case 'C':
//                 C.push({p:i,k:k})
//             break;
    
//         default:
//             G.push({p:i,k:k})
//             break;

//     }



//     }

    
    
   
// }
// console.log('EL A');
// for (let i = 0; i < A.length; i++) {
//     const element = A[i];
//     console.log(`POS:${element.k}, ROW:${element.p}`); 
    
// }
// console.log('el T');
// for (let i = 0; i < T.length; i++) {
//     const element = T[i];
//     console.log(`POS:${element.k}, ROW:${element.p}`); 
    
// }
// console.log('el C');
// for (let i = 0; i < C.length; i++) {
//     const element = C[i];
//     console.log(`POS:${element.k}, ROW:${element.p}`); 
    
// }
// console.log('el G');
// for (let i = 0; i < G.length; i++) {
//     const element = G[i];
//     console.log(`POS:${element.k}, ROW:${element.p}`); 
    
// }

//x horizont
// y vertical
console.clear() 
var inX=findRight();
var inY=findDown();
// if (!inX) {
//    inY= findDown();
// }

if (inX ||inY) {
    console.log('Has mutation');
}

function findRight() {
    let x =arr[0].length;
    let y = arr.length;

    let same=0;
    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];
        let letter='';
        for (let c = 0; c < x; c++) {
            let value = row[c]
            if(c==0)letter=row[c];
            else{
                if (value==letter) {
                    same++
                }else{same=0}
            }
            if (same==3) {
                console.log('righ',value);
                return true
            }
            
            
          
            
        }
        // console.log(row);
        // console.log(i);
        

        
        
    }
    return false;
    
}
function findDown() {
    let x =arr[0].length;
    let y = arr.length;

    let same=0;
    for (let i = 0; i < y; i++) {
        const column = arr[i];
        console.log(column);
        for (let index = 0; index < column.length; index++) {
            const element = column[index][i];
            
        }
        
    }
    
    return false;
    
}
