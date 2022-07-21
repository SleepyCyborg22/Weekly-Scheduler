const weda = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

const da = new Date();
var dayofweek = weda[da.getDay()];

const rb = document.getElementById(dayofweek);
rb.checked = true;

console.log(dayofweek);

function getweekday(){
    const radio = document.getElementsByName("weekday");

    for(let i=0;i<radio.length;i++){
        if(radio[i].checked){
            dayofweek = radio[i].value;
            console.log(dayofweek);
        }
    }
}

const con = document.querySelector("#schedule")

for(let i=0;i<24;i++){
    if(i<10)con.innerHTML += '<div class="row"><div class="col-3">0' + i + ':00</div><div class="col-4"></div><div class="col-5"></div></div>';
    else con.innerHTML += '<div class="row"><div class="col-3">' + i + ':00</div><div class="col-4"></div><div class="col-5"></div></div>';
}

