// document.addEventListener('DOMContentLoaded',()=>{
//     let round=0
//     let currentPlayer=""
//     let playerWin=0
//     let computerWin=0
//     currentPlayer=firstRound()
//     let idArrey=["box11","box12","box13","box21","box22","box23","box31","box32","box33"]
//     let resetButton=document.getElementById("submit");
//     let playerBol=false
//     let computerBol=false
//     let letters=["x","o"]
//     let randomletter=Math.floor(Math.random()*letters.length)
//     let playerLetter=letters[randomletter]
//     let computerLetter=''
//     if (randomletter==0){
//         computerLetter=letters[1]
//     }
//     else{
//         computerLetter=letters[0]
//     }
//     let myDiv=document.getElementById("container")
//     if(currentPlayer=="player"){
//         playerBol=true
//     }
//     else{
//        computerTurn(computerLetter,round)
//        round++
//         currentPlayer="player"
//         playerBol=true
//     }
//     resetButton.addEventListener('click',()=>{
//         freshPage()
//         round=0
//     })
//     myDiv.addEventListener('click',(e)=>{
//         console.log("round"+round)
//         let idDiv=e.target.id
//         if(playerBol==true){
//             if(idArrey.includes(idDiv)){
//                 if(checkBox(idDiv)){
//                     console.log()
//                     addClass(idDiv,"player")
//                     updateDiv(idDiv,playerLetter)                    
//                     computerTurn(computerLetter,round)
//                     round++
//                 }              
//                 if(round>2){
//                     let win=findWin()
//                     if(win!="none"){
//                         playerBol=false
//                         if(win=="player"){
//                             playerWin++
//                             updateWin(win,playerWin)
//                         }
//                         else{
//                             computerWin++
//                             updateWin(win,computerWin)
//                         }
//                     }
//                 }
//         }
//         if(round>=3){
//             let reasultWin=findWin()
//             if(reasultWin=="player"){
//                 playerWin++
                
//             }
//             else if(reasultWin=="computer"){ 
//                 computerWin++
//             }
//         }
      
//     }

        
//     })//end evenlistener
// })
// //end DOMCOntenload

// let computerTurn=(computerLetter,round)=>{
//     let test=document.getElementsByClassName('player')
//     let newArray=[]
//     for(let i=0;i<test.length;i++){
//        newArray[i]=test[i].id   
//     }
//     let testObj=newArray.map(tetst)
//     let testCom=document.getElementsByClassName('computer')
//                 let newArrayCom=[]
//                 for(let i=0;i<testCom.length;i++){
//                     newArrayCom[i]=testCom[i].id
//                     console.log(newArrayCom[i])
                    
//                 }
//     let testObjCom=newArrayCom.map(tetst)
//     let firstColumn=0
//     let secondColumn=0
//     let firstRow=0
//     let idDiv=0
//     let secondRow=0
//     if(testObj.length>1){
//     for(let i=0;i<testObj.length;i++){      
//         firstColumn=parseInt(testObj[i]['column'])
//         firstRow=parseInt(testObj[i]['row'])
//         for(let j=i+1;j<testObj.length;j++){             
//                 secondColumn=parseInt(testObj[j]['column'])
//                 secondRow=parseInt(testObj[j]['row'])
//                 if(firstColumn==secondColumn){
//                     if(testObj[j]['row']!=3){
//                          idDiv="box"+3+""+firstColumn
//                         }
//                         else if (testObj[i]['row']!=1){
//                             console.log("==3")
//                             idDiv="box"+1+""+firstColumn
//                         }
//                         else{
//                             idDiv="box"+2+""+firstColumn                            
//                         }
//                     }
//                     else if(firstRow==secondRow){
//                         if(testObj[j]['column']!=3){
//                             idDiv="box"+firstRow+""+3
//                         }
//                         else if (testObj[i]['column']!=1){
//                             console.log("==3")
//                             idDiv="box"+firstRow+""+1                            
//                         }
//                         else{
//                             console.log("firstrow+2")
//                             idDiv="box"+firstRow+""+2                        
//                     }
//                 }
                
//                 else if(secondRow==secondColumn){
//                     if(firstRow==firstColumn){
//                         if(testObj[j]['column']!=3){
//                              idDiv="box"+3+""+3
//                         }
//                         else if(testObj[i]['column']!=1){
//                             console.log("==3")
//                              idDiv="box"+1+""+1
//                         }
//                         else{
//                              idDiv="box"+2+""+2
//                         }
                        
//                     }
//                     if((secondRow==2&&secondColumn==2)){
//                         if(((firstRow==1&&firstColumn==3))){
//                             idDiv="box31"
//                         }
//                     }

                    
//                 }
//                 else if(secondColumn==1&&secondRow==3){
//                             if(firstRow==2&&firstColumn==2){
//                                  idDiv="box13"
//                             }
//                             else{
//                                 idDiv="box22"
//                             }
//                         }
//             else{
//                    idDiv=findRandomCell()
//                 }
//             }
//         }//big(first) for
        
//     }//end if(round >1)  
//     else if(round==0){
//         console.log("round in else if(round==0): "+round)
//         let idArrey=["box11","box12","box13","box21","box22","box23","box31","box32","box33"]

//         let checkBoxEmpty=true
//         let firstComputerChoice=0
//         do{
          
//         firstComputerChoice=Math.floor(Math.random()*idArrey.length)
//         checkBoxEmpty= checkBox(idArrey[firstComputerChoice])
          
//         }while(!checkBoxEmpty)
//         addClass(idArrey[firstComputerChoice],"computer")
//         idDiv=idArrey[firstComputerChoice]
//         playerBol=true
   
//     }
//     else{
//         idDiv=findRandomCell()
//     }
//     updateDiv(idDiv,computerLetter)
//     addClass(idDiv,"computer")
// }
// let findRandomCell=()=>{
//     let testCom=document.getElementsByClassName('computer')
//     let newArrayCom=[]
//     for(let i=0;i<testCom.length;i++){
//         newArrayCom[i]=testCom[i].id        
//     }
// let testObjCom=newArrayCom.map(tetst)
//     let idDiv=0
//         let newCellCom=[]
//         let secondRoundRow=testObjCom[0]["row"]
//         let secondRoundColumn=testObjCom[0]["column"]
//         let chakeCom=true
//         do{
//             if(secondRoundColumn==secondRoundRow){
//                 if(secondRoundRow==2){
//                     newCellCom.push({"row":3,"column":"3"})
//                     newCellCom.push({"row":1,"column":"1"})
//                 }else if(secondRoundRow==3){
//                     newCellCom.push({"row":2,"column":"2"})
//                     newCellCom.push({"row":1,"column":"1"})
//                 }
//                 else{
//                     newCellCom.push({"row":2,"column":"2"})
//                     newCellCom.push({"row":3,"column":"3"})
//                 }
//             }

//             if(secondRoundRow==1){
//                 newCellCom.push({"row":2,"column":secondRoundColumn})
//                 newCellCom.push({"row":3,"column":secondRoundColumn})
//             }else if(secondRoundRow==2){
//                 newCellCom.push({"row":1,"column":secondRoundColumn})
//                 newCellCom.push({"row":3,"column":secondRoundColumn})
                
//             }else{
//                 newCellCom.push({"row":1,"column":secondRoundColumn})
//                 newCellCom.push({"row":2,"column":secondRoundColumn})
    
//             }
//             if(secondRoundColumn==1){
//                 newCellCom.push({"row":secondRoundRow,"column":"2"})
//                 newCellCom.push({"row":secondRoundRow,"column":"3"})
//             }
//             else if(secondRoundColumn==2){
                
//                 newArrayCom.push({"row":secondRoundRow,"column":"1"})
//                 newArrayCom.push({"row":secondRoundRow,"column":"3"})
//             }else{
//                 newArrayCom.push({"row":secondRoundRow,"column":"1"})
//                 newArrayCom.push({"row":secondRoundRow,"column":"2"})
    
//             }
//             if(secondRoundColumn==2&&secondRoundRow==2){
//                 newCellCom.push({"row":1,"column":"3"})
//                 newCellCom.push({"row":3,"column":"1"})
//             }
//             let randomSecondRond=Math.floor(Math.random()*newCellCom.length)
//             idDiv="box"+newCellCom[randomSecondRond]['row']+""+newCellCom[randomSecondRond]['column']
//             chakeCom=checkBox(idDiv)
//         }while(!chakeCom)
//         return idDiv
// }
// let firstRound=()=>{
//     let players=["player","computer"]
//     let randomPlayer=Math.floor(Math.random()*players.length)
//     firstPlayer=players[randomPlayer]
//     return firstPlayer
// }
// let checkBox=(divId)=>{
//     let divClass=document.getElementById(divId).classList
//     if(divClass==""){
//     return true
//     }
//     return false
// }

// let addClass=(divId,currentPlayer)=>{
//     console.log("addclass: "+currentPlayer)
//     document.getElementById(divId).classList.add(currentPlayer)

//     console.log(document.getElementById(divId).classList)
//     console.log("ocument.getElementById(divId).classList"+document.getElementById(divId).classList)
// }
// let updateDiv =(id,letter)=>{
//     console.log("id:"+id+"letter: "+letter)
//     document.getElementById(id).innerText=letter

// }
// let findWin=()=>{
//     let test=document.getElementsByClassName('player')
//     let newArray=[]
//     for(let i=0;i<test.length;i++){
//         newArray[i]=test[i].id
//         console.log(newArray[i])
//     }
//     let testCom=document.getElementsByClassName('computer')
//     let newArrayCom=[]
//     for(let i=0;i<testCom.length;i++){
//         newArrayCom[i]=testCom[i].id
//     }
// let testObjCom=newArrayCom.map(tetst)
//     let count=1
//     let testObj=newArray.map(tetst)
//     //for(let i=0;i<testObj.length;i++){
//         let i=0
//         for(let j=i+1;j<testObj.length;j++){
//             if(testObj[i]['column']==testObj[j]['column']){
//                 count++
//             }
//         }
//         for(let j=i+1;j<testObj.length;j++){
//             if(testObj[i]['row']==testObj[j]['row']){
//                 count++
//             }
//         }
//         if(count>=3){
//             return "player"
//         }
//         if(testObj[i]['column']==testObj[i]['row']){
//             if(testObj[i+1]['column']==testObj[i+1]['row']){
//                 if(testObj[i+2]['column']==testObj[ji+2]['row']){
//                     return "player"
//                 }
//             }
//         }
//         count=1
//         for(let j=i+1;j<testObjCom.length;j++){
//             if(testObjCom[i]['column']==testObjCom[j]['column']){
//                 count++
//             }
//         }
//         for(let j=i+1;j<testObjCom.length;j++){
//             if(testObjCom[i]['row']==testObjCom[j]['row']){
//                 count++
//             }
//         }
//         if(count>=3){
//             return "computer"
//         }
//         if(testObjCom[i]['column']==testObjCom[i]['row']){
//             console.log(testObj)
//             if(testObjCom[i+1]['column']==testObjCom[i+1]['row']){
//                 if(testObjCom[j+2]['column']==testObjCom[j+2]['row']){
//                     return "computer"
//                 }
//             }
//         }
//         count=1
    
//     return "none"
// }




// let tetst=(obj)=>{
//     let newString=obj.split("x")
//     return {
//         row:newString[1].split('')[0],
//         column:newString[1].split('')[1]
//     }
// }
// let updateWin=(winner,number)=>{
//     if(winner=="player"){

//         let playerP=document.getElementById('PlayerNumber').innerText=number
//     }
//     else{
//         let playerP=document.getElementById('cpmputerNumber').innerText=number

//     }
// }
// let freshPage=()=>{
//     console.log("fresh")
//     let idDiv=""
//     for(let i=1;i<=3;i++){
//         for(let j=1;j<=3;j++){
//             idDiv="box"+i+""+j
//             document.getElementById(idDiv).classList.remove
//             document.getElementById(idDiv).innerText=""
//         }
//         console.log(document.getElementById(idDiv).classList)
//     }
// }


let arrayPartners=["computer","player"]
let currentPlayer=arrayPartners[Math.floor(Math.random()*arrayPartners.length)]
console.log(currentPlayer)
let round=0
let arrayDivIds=["box11","box12","box13","box21","box22","box23","box31","box32","box33"]
//who is turn 
//all functions
//choose random cell from the arrays
let playerIds=[]
let computerIds=[]
let letterArr=["x","o"]
let randNum=Math.floor(Math.random()*letterArr.length)
let comLetter=letterArr[randNum] 
let playerLetter=""
let playerTurn=false
let comTurn=false
let playerWinNum=0
let comWinNum=0
if(randNum==1){
    playerLetter=letterArr[0] 
}else{
    playerLetter=letterArr[1] 
}
console.log("playerLetter: "+playerLetter)

let chooseRandom=(newArr)=>{
    let idDiv=newArr[Math.floor(Math.random()*newArr.length)]
    return idDiv
}
let updatePage =(id,letter)=>{
    console.log("id:"+id+"letter:"+letter)
    document.getElementById(id).innerText=letter

}
let addClass=(divId,currentPlayer)=>{
    document.getElementById(divId).classList.add(currentPlayer)
}
if(currentPlayer=="computer"){
    
    let idDiv=chooseRandom(arrayDivIds)
    updatePage(idDiv,comLetter)
    addClass(idDiv,"computer")
    round++
    playerTurn=true
}
else{
    playerTurn=true
}
//check the box is empty or not
let checkBox=(divId)=>{
    let divClass=document.getElementById(divId).classList
    if(divClass==""){
    return true
    }
    return false
}
let findArr=(obj)=>{
        let newString=obj.split("x")
        return {
            row:newString[1].split('')[0],
            column:newString[1].split('')[1]
        }
    }

//to find all the id of computer choice
let fillComputerIds=()=>{
    let divComputer=document.getElementsByClassName('computer')
    let computerArr=[]
        for(let i=0;i<divComputer.length;i++){
            computerArr[i]=divComputer[i].id        
        }
    computerIds=computerArr.map(findArr)
}
//to find the all player choice
let fillPlayersIds=()=>{
    let divComputer=document.getElementsByClassName('player')
    let playerArr=[]
        for(let i=0;i<divComputer.length;i++){
            playerArr[i]=divComputer[i].id        
        }
    playerIds=playerArr.map(findArr)

}
let beatPlayer=(Arr)=>{
    let newArr=Arr
    let idDiv=""
    let firstColumn=""
    let firstRow=""
    let secondColumn=""
    let secondRow=""
    let finalArr=[]
    for (let i=0;i<newArr.length;i++){
        firstColumn=newArr[i]["column"]
        firstRow=newArr[i]["row"]
        for (let j=i+1; j<newArr.length;j++){
            secondRow=newArr[j]["row"]
            secondColumn=newArr[j]["column"]
                if(firstColumn==secondColumn){
                    if(newArr[j]['row']!=3){
                         idDiv="box"+3+""+firstColumn
                        }
                        else if (newArr[i]['row']!=1){
                            idDiv="box"+1+""+firstColumn
                        }
                        else{
                            idDiv="box"+2+""+firstColumn                            
                        }
                }
                else if(firstRow==secondRow){
                    if(newArr[j]['column']!=3){
                        idDiv="box"+firstRow+""+3
                    }
                    else if (newArr[i]['column']!=1){
                        idDiv="box"+firstRow+""+1                            
                    }
                    else{
                        idDiv="box"+firstRow+""+2                        
                    }
                }   
                else if(secondRow==secondColumn){
                    if(firstRow==firstColumn){
                        if(newArr[j]['column']!=3){
                             idDiv="box"+3+""+3
                        }
                        else if(newArr[i]['column']!=1){
                             idDiv="box"+1+""+1
                        }
                        else if((secondRow==2&&secondColumn==2)){
                            if(((firstRow==1&&firstColumn==3))){
                                idDiv="box31"
                            }
                            else{
                                idDiv="box13"
                            }                           
                        }else{
                            idDiv="box"+2+""+2
                        }
                        
                    }
                }
                    else if(firstColumn==3&&firstRow==1){
                            if(secondRow==2&&secondColumn==2){
                                 idDiv="box13"
                            }
                            else{
                                idDiv="box22"
                            }
                        }
                        else if(secondColumn==3&&secondRow==1){
                            if(firstRow==2&&firstColumn==2){
                                 idDiv="box13"
                            }
                            else if(firstRow==3&&firstColumn==1){
                                idDiv="box31"
                            }
                            else{
                                idDiv="box22"
                            }
                        }
                        else{
                            return finalArr
                        }


                    
                                 
        }
        if(idDiv!=""){

            finalArr.push(idDiv)
        }
    }
    return finalArr
}
//find the posibility of the each cell
let randomCell=()=>{
    let newCellCom=[]
    let finalCom=[]
    let columnCom=""
    let rowCom=""
    let idDiv=""
    for(let i=0;i<computerIds.length;i++){
        columnCom=computerIds[i]["column"]
        rowCom=computerIds[i]["row"]
        if(rowCom==1){
                newCellCom.push({"row":2,"column":columnCom})
                newCellCom.push({"row":3,"column":columnCom})
            }else if(columnCom==2){
                newCellCom.push({"row":1,"column":columnCom})
                newCellCom.push({"row":3,"column":columnCom})
                
            }else{
                newCellCom.push({"row":1,"column":columnCom})
                newCellCom.push({"row":2,"column":columnCom})
    
            }
            if(columnCom==1){
                newCellCom.push({"row":rowCom,"column":"2"})
                newCellCom.push({"row":rowCom,"column":"3"})
            }
            else if(columnCom==2){
                
                newCellCom.push({"row":rowCom,"column":"1"})
                newCellCom.push({"row":rowCom,"column":"3"})
            }else{
                newCellCom.push({"row":rowCom,"column":"1"})
                newCellCom.push({"row":rowCom,"column":"2"})
    
            }
            if(columnCom==2&&rowCom==2){
                newCellCom.push({"row":1,"column":"3"})
                newCellCom.push({"row":3,"column":"1"})
            }
    }
    for(let i=0;i<newCellCom.length;i++){
        idDiv="box"+newCellCom[i]["row"]+""+newCellCom[i]["column"]
        if(checkBox(idDiv)){
            for(let j=0;j<playerIds.length;j++){
                if(newCellCom[i]["row"]!=newCellCom[i]["column"] ){
                    if(newCellCom[i]["row"]!=playerIds[j]["row"] && newCellCom[i]["column"]!=playerIds[j]["column"]){
                        finalCom.push(idDiv)
                    }
                }else if(playerIds[j]["row"]!=playerIds[j]["column"] ){
                        finalCom.push(idDiv)
                    }
            }
        }
    }
    return finalCom

}
let computerTurn=()=>{
    console.log("computerTurn")
    fillComputerIds()
    fillPlayersIds()
    let idDivPlays=[]
    let idDiv=0
    let cellFinded=false
    let fianlComArr=[]
    console.log("computerIds")
    console.log(computerIds)
    console.log("playerIds")
    console.log(playerIds)
    if(computerIds.length==0){
        console.log("resetcomputerTurn")
        let check=true
        do{
            idDiv=chooseRandom(arrayDivIds)
            check=checkBox(idDiv) 
        }while(!check)
        cellFinded=true
    }else{
        if(computerIds.length>1){
            idDivPlays=beatPlayer(computerIds)
            if(idDivPlays.length>=1){

                for(let i=0;i<idDivPlays.length;i++){
                    if(checkBox(idDivPlays[i]) ){
                        idDiv=idDivPlays[i]
                        cellFinded=true
    
                    }
                }
            }
         
        }
        if(!cellFinded){

            if(playerIds.length>1){
                idDivPlays=beatPlayer(playerIds)
                if(idDivPlays.length>=1){
    
                    for(let i=0;i<idDivPlays.length;i++){
                        if(checkBox(idDivPlays[i]) ){
                            idDiv=idDivPlays[i]
                            cellFinded=true
        
                        }
                    }
                }
            }
            if(!cellFinded){
                
              
                    idDiv=chooseRandom(randomCell())
                
            }
        }
        
    }
    updatePage(idDiv,comLetter)
    addClass(idDiv,"computer")
}
let freshPage=()=>{
    round=0
    let idDiv=""
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++){
            idDiv="box"+i+""+j
            console.log("idDiv:"+idDiv)
            console.log("idDiv.classList:"+document.getElementById(idDiv).classList)
            if( document.getElementById(idDiv).classList=="player"){
                document.getElementById(idDiv).classList.remove("player")
            }else if(document.getElementById(idDiv).classList=="computer"){
                document.getElementById(idDiv).classList.remove("computer")

            }
            document.getElementById(idDiv).innerText=""
        }
    }
    playerIds=[]
    computerIds=[]
    console.log("playerIds in refreshpage")
    console.log(playerIds)
    console.log("computerIds in refreshpage")
    console.log(computerIds)

    if(comWinNum>playerWinNum){
        computerTurn()
        round++
        playerTurn=true
    }else{
        playerTurn=true
    }
}
let updateWin=(winner)=>{
    if(winner=="player"){
        playerWinNum++
        let playerP=document.getElementById('PlayerNumber').innerText=playerWinNum
    }
    else{
        comWinNum++
        let playerP=document.getElementById('cpmputerNumber').innerText=comWinNum

    }
}

let winFunction=(testObj)=>{
    let count=0
console.log("inside winfunction")
console.log("testObj")
console.log(testObj)
    for(let i=0;i<testObj.length;i++){

        for(let j=i+1;j<testObj.length;j++){
            if(testObj[i]['column']==testObj[j]['column']){
                console.log(`testObj[i]['column']==testObj[j]['column']:${testObj[i]['column']==testObj[j]['column']}`)
                count++
            }
        }

    }
    console.log("count;"+count)
    if(count!=3){
        count=0
        for(let i=0;i<testObj.length;i++){
    
            for(let j=i+1;j<testObj.length;j++){
                if(testObj[i]['row']==testObj[j]['row']){
                    console.log(`ttestObj[i]['row']==testObj[j]['row']:${testObj[i]['row']==testObj[j]['row']}`)

                    count++
                }
            }
        }
    }
    console.log("count;"+count)
    if(count!=3){
        count=0
        for(let i=0;i<testObj.length;i++){
            if(testObj[i]['column']==testObj[i]['row']){
                count++
            }
        }
    }
    if(count==3){
        return true
    }else{
        return false
    }
}
let chooseWinner=()=>{
    fillComputerIds()
    fillPlayersIds()

    if(playerIds.length>=3){
        console.log("playerIds")
        if(winFunction(playerIds))   {
            return "player"
        }    
    }
    if(computerIds.length>=3){
        console.log("computerIds")
        if(winFunction(computerIds)){
            console.log("winfunction(comIds)"+winFunction(computerIds))
            return "computer"
        }
    }
    return "none"
}
container.addEventListener('click',e=>{
    //It doesn't go thorough if user click in another place
   
  
    let winner=""
    if(playerTurn==true){      
        console.log("playerturn:"+playerTurn)
       
        let idDiv=e.target.id
        console.log("idDiv in addListner:"+idDiv)
        if(arrayDivIds.includes(idDiv)){
            console.log("inside:"+checkBox(idDiv))
            
           if(checkBox(idDiv)){
                updatePage(idDiv,playerLetter)
                addClass(idDiv,"player")
                if(round >=2){
                    winner=chooseWinner()
                    console.log("winner"+winner)
                    if(winner!="none"){
                        updateWin(winner)
                        playerTurn=false
                        computerTurn=false
                    }
                }
                if(computerTurn){

                    computerTurn()
                }
               if(round >=2){
                winner=chooseWinner()
                console.log("winner"+winner)
                if(winner!="none"){
                    updateWin(winner)
                    playerTurn=false
                }
            }
               round++
           }
           console.log("round:"+round)
           if(round==5&& winner=="none"){
               console.log("Draw")
           }
    
        }
       

    }
    //when game pass third round which is round=2 should check the winner
})


submit.addEventListener('click',freshPage)
