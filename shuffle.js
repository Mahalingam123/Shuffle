




const names = ["doss", "neels", "mahalingam", "david",
    "rajagobal", "seenivasan", "selvin", "selva", "michal", "karthi", "karthikeyan", "sindhu", "nambi nachiyar", "jeyasri", "thangaesweri", "esakidevi", "murali", "vels", "muthukumar",];

console.log(names);


let index = 0;

const maps = new Map();


while (index < names.length) {

    maps.set(getRandom(), names[index++]);

}



const object = Object.fromEntries(maps);

const container= document.getElementById("cont");

const table= document.createElement("table");

const row = document.createElement("tr");

const th = document.createElement("th");

const th1 = document.createElement("th");

th.innerText="Names";

th1.innerText="Seat No";

row.appendChild(th);

row.appendChild(th1);

table.appendChild(row);

table.className="table";

table.border=1;


for(let a in object){

    const tr=document.createElement("tr");

    const name=document.createElement("td");

    const Sno = document.createElement("td");
    
    name.innerText= new String(object[a]).toUpperCase();

    Sno.innerText=a

    tr.appendChild(name);

    tr.appendChild(Sno);

    table.appendChild(tr);

}

container.appendChild(table);





function getRandom() {

    let random;

   do {
        random = (Math.floor(Math.random() * 31) + 1);

    } while (maps.has(random))
    
    return random;

}

const reload= document.getElementById("reass");

reload.addEventListener('click',()=>{
    window.location.reload(); 
})