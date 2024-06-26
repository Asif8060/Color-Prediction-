let list = document.querySelectorAll("li");
let opBtn = document.querySelectorAll(".option button");
let table = document.querySelector("table")


opBtn.forEach((btn) => {

    btn.addEventListener("click", () => {
        let current = document.querySelector(".current")

        current.classList.remove("current")
        btn.classList.add("current")
    })
    
})

list.forEach((li) => {
    li.addEventListener("click", () => {
        let active = document.querySelector(".active")

        active.classList.remove("active")
        li.classList.add("active")
    })
})



// Join Button to bet your money
let joinPopUp = document.querySelector(".joinPopUp")

let clsName = ""
let joinBtn = document.querySelectorAll("#btn-grid button")
joinBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let h3 = document.querySelector(".joinPopUp h3")
        h3.innerText = btn.innerHTML
        clsName = btn.className
        joinPopUp.style.display = "block"
    })
})

let numBtn = document.querySelectorAll("#num-grid button")
numBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let h3 = document.querySelector(".joinPopUp h3")
        h3.innerText = `Join bet on ${btn.innerHTML}`
        clsName = btn.className
        joinPopUp.style.display = "block"
    })
})

// close popup
let xmark = document.querySelector(".fa-xmark");
xmark.addEventListener("click", () => {
    joinPopUp.style.display = "none"
})


let contractMoneyButton = document.querySelectorAll(".choice button")
let b1 = contractMoneyButton[0]
let b2 = contractMoneyButton[1]
let b3 = contractMoneyButton[2]
let b4 = contractMoneyButton[3]


let input = document.querySelector("label input")
input.value = 1

let bidMoney
function bd() {
    let bid = document.getElementById("bid")
    bidMoney = bid.innerHTML
}
bd()

// Contract Money Button
contractMoneyButton.forEach((btn) => {
    btn.addEventListener("click", () => {

        if(b1.className == "red") {
            b1.classList.remove("red")
            b1.style.color = "rgb(30, 137, 112)"
            b1.removeAttribute("id");
        }
        if(b2.className == "red") {
            b2.classList.remove("red")
            b2.style.color = "rgb(30, 137, 112)"
            b2.removeAttribute("id");
        }
        if(b3.className == "red") {
            b3.classList.remove("red")
            b3.style.color = "rgb(30, 137, 112)"
            b3.removeAttribute("id");
        }
        if(b4.className == "red") {
            b4.classList.remove("red")
            b4.style.color = "rgb(30, 137, 112)"
            b4.removeAttribute("id");
        }
        btn.classList.add("red")
        btn.id = "bid"
        btn.style.color = "white"
        input.value = 1
        bd()
        totalBid()
    })
})


let walletMoney = document.querySelector("#walletMoney")

// Contract Number
let minusBtn = document.querySelector("#minusBtn")
let plusBtn = document.querySelector("#plusBtn")

minusBtn.addEventListener("click", () => {
    if(input.value > 1) {
        input.value--
        totalBid()
    }
})
plusBtn.addEventListener("click", () => {
    if(input.value < 100) {
        input.value++
        totalBid()
    }
})

let totalMoney
function totalBid() {
    let total = document.querySelector("#total")
    totalMoney = input.value * bidMoney
    total.innerHTML = totalMoney
}
// totalBid()


let confirmButton = document.querySelector("#confirm")
let betMoney
confirmButton.addEventListener("click", () => {
    if(walletMoney.innerHTML >= totalMoney) {
        walletMoney.innerHTML = walletMoney.innerHTML - totalMoney
        joinPopUp.style.display = "none"
        betMoney = totalMoney
        input.value = 1
        
    
        if(b1.className != "red") {
            b1.classList.add("red")
            b1.style.color = "white"
            if(b2.className == "red") {
                b2.classList.remove("red")
                b2.style.color = "rgb(30, 137, 112)"
            }
            if(b3.className == "red") {
                b3.classList.remove("red")
                b3.style.color = "rgb(30, 137, 112)"
            }
            if(b4.className == "red") {
                b4.classList.remove("red")
                b4.style.color = "rgb(30, 137, 112)"
            }
            if(b2.id == "bid") {
                b2.removeAttribute("id")
            }
            else if(b3.id == "bid") {
                b3.removeAttribute("id")
            }
            else if(b4.id == "bid") {
                b4.removeAttribute("id")
            }
        }
        b1.id = "bid"
        bd()
        totalBid()

    }
    else {
        alert("You don't have sufficient Money")
    }
})





// Prediction color within 2min
let timer = document.querySelector("#timer");
let period,prtime

function colorPrediction() {
    let time = timer.innerHTML;
    let timeParts = time.split(":")
    let mn = timeParts[0]
    let sec = timeParts[1]

    if((mn == 2 || mn == 1) && sec == 0) {
        mn -= 1;
        sec = 59;
        mn = "0" + mn
    }
    else if((mn == 1 || mn == 0) && sec > 0) {
        sec -= 1
    }
    else if(mn == 0 && sec == 0) {

        period = document.getElementById("period")

        mn = "0" + 2;
        sec = 0

        let ran1 = Math.floor(Math.random()*10)
        let ran2 = Math.floor(Math.random()*10)
        let ran3 = Math.floor(Math.random()*10)
        let ran4 = Math.floor(Math.random()*10)
        let ran5 = Math.floor(Math.random()*10)

        let num = document.querySelectorAll(".num")
        num[0].innerHTML = ran1
        num[1].innerHTML = ran2
        num[2].innerHTML = ran3
        num[3].innerHTML = ran4
        num[4].innerHTML = ran5

        num.forEach((n) => {
            if(n.innerHTML == 1 || n.innerHTML == 3 || n.innerHTML == 7 || n.innerHTML == 9 || n.innerHTML == 5) {
                if(n.className == "red") {
                    n.classList.remove("red")
                    n.classList.add("green")
                } 
            }
            else if(n.innerHTML == 2 || n.innerHTML == 4 || n.innerHTML == 6 || n.innerHTML == 8 || n.innerHTML == 0) {
                if(n.className == "green") {
                    n.classList.remove("green")
                    n.classList.add("red")
                }             
            }
        })


        let ranPrice = Math.ceil(Math.random()* (40000 -30000) + 30000)
        let rand = Math.floor(Math.random() * 10)


        // let newRow = table.insertRow(1);
        let newRow = document.createElement("tr");

        // let cell1 = newRow.insertCell(0)
        // let cell2 = newRow.insertCell(1)
        // let cell3 = newRow.insertCell(2)
        // let cell4 = newRow.insertCell(3)

        let cell1 = document.createElement("td")
        let cell2 = document.createElement("td")
        let cell3 = document.createElement("td")
        let cell4 = document.createElement("td")

        newRow.append(cell1,cell2,cell3,cell4);

        cell1.innerHTML = period.innerText
        cell2.innerHTML = ranPrice
        cell3.innerHTML = rand
        cell4.classList.add("clr")

        table.tBodies[0].insertBefore(newRow, table.rows[1]);

        prtime = document.querySelectorAll("table tbody tr td")[0]
        
        period.innerText = parseInt(prtime.innerText) + 1

        if(rand == 1 || rand == 3 || rand == 5 || rand == 7 || rand == 9) {
            cell4.classList.add("green")
        }
        else if(rand == 0 || rand == 2 || rand == 4 || rand == 6 || rand == 8) {
            cell4.classList.add("red")
        }

        Winner()
        clsName = ""

    }
    if(sec < 10) {
        sec = "0"+sec
    }

    timer.innerHTML = mn + ":" + sec
    // saveData()
}

setInterval(colorPrediction, 1000)



let winHistory = document.querySelector("#winning-history table tbody")


let resPopUp = document.getElementById("resPopUp")
let resH = document.querySelector("#resPopUp h2")
let resP = document.querySelector("#resPopUp p")

// Who will be Winner
function Winner() {
    let row = document.querySelectorAll("table tr td")
    let machineColor = row[3]
    let classes = Array.from(machineColor.classList)
    let remainClass = classes.filter(cls => cls !== "clr")
    if(clsName != "") {
        
        if(remainClass[0] == clsName) {
            walletMoney.innerHTML = parseInt(walletMoney.innerHTML) + (2*betMoney)
            resH.innerText = "You Won Rs " + betMoney
            resP.innerText = "Superb! Prediction...."

            let r = document.querySelectorAll("table tr")
            winHistory.appendChild(r[1])
        }
        else {
            resH.innerText = "You lose Rs " + betMoney
            resP.innerText = "Better Luck try next time!"
        }
        resPopUp.style.visibility = "visible"
        setInterval(()=> {
            resPopUp.style.visibility = "hidden"
        }, 5000)
    }
    
}
// Winner()


function saveData() {
    localStorage.setItem("data", table.innerHTML);
}

function showTask() {
    table.innerHTML = localStorage.getItem("data");
}
// showTask()




let feature = document.querySelectorAll(".part2 .option button")
feature.forEach((btn) => {
    btn.addEventListener("click", () => { 
        if(btn.innerText == "Parity") {
            if(table.hasAttribute('id')) {
                table.removeAttribute('id')
            }
            table.id = "parity"
        }
        if(btn.innerText == "Sapre") {
            if(table.hasAttribute('id')) {
                table.removeAttribute('id')
            }
            table.id = "sapre"
        }
        if(btn.innerText == "Bcone") {
            if(table.hasAttribute('id')) {
                table.removeAttribute('id')
            }
            table.id = "bcone"
        }
        if(btn.innerText == "Emerd") {
            if(table.hasAttribute('id')) {
                table.removeAttribute('id')
            }
            table.id = "emerd"
        }
        
    })
})

// let menu = document.getElementById("menu")
// let menuLIst = document.getElementById("menuList")
// menu.addEventListener("click", () => {
//     menuLIst.style.display = "flex"
// })

// let lis = document.querySelectorAll("li")
// lis.forEach((li) => {
//     if(li.id != "menu")  {
//         li.addEventListener("click", () => {
//             menuLIst.style.display = "none"
//         })
//     }
// })
