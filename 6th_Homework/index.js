function onCreate(ev) {
    ev.preventDefault();

    var data = JSON.stringify({
        "name": String(document.getElementById("cname").value),
        "description": String(document.getElementById("cdescription").value),
        "species": String(document.getElementById("cspecies").value),
        "age": Number(document.getElementById("cage").value),
        "habitat": String(document.getElementById("chabitat").value),
        "size": Number(document.getElementById("csize").value)
    });

    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(this.responseText);
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        } 
    });

    xhr.open("POST", "http://195.50.2.67:2403/zbai");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    console.log('Reading');
    
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.response);
            result=JSON.parse(this.response);
            var resultTBody=document.createElement('tbody');
            result.map(function(nthPlant){
                resultTBody.appendChild(parseWorkerToTableRow(nthPlant));
            });
            var table=document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody,document.getElementById('rTBody'));
            resultTBody.id='rTBody';
            console.log('success');
        }
    });

    xhr.open("GET", "http://195.50.2.67:2403/zbai");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev){

    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            result=JSON.parse(this.response);
            var ids=document.createElement('select');
            ids.className='form-control';
            result.map(function(nthPlant){
                var id=document.createElement('option');
                id.innerHTML=nthPlant['id'];
                ids.appendChild(id);
            });
            var form=document.getElementById('uid').parentElement;
            form.replaceChild(ids,document.getElementById('uid'));
            ids.id='uid';
        }
    });

    xhrids.open("GET", "http://195.50.2.67:2403/zbai");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();  

    var data = JSON.stringify({
        "name": String(document.getElementById("cname").value),
        "description": String(document.getElementById("cdescription").value),
        "species": String(document.getElementById("cspecies").value),
        "age": Number(document.getElementById("cage").value),
        "habitat": String(document.getElementById("chabitat").value),
        "size": Number(document.getElementById("csize").value)
    });

    console.log(data);

    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://195.50.2.67:2403/zbai/"+document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onDelete(ev) {
    ev.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://195.50.2.67:2403/zbai/"+document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseWorkerToTableRow(Plants){
    var row=document.createElement('tr');

    id=document.createElement('th');
    id.innerText=Plants['id'];
    row.appendChild(id);

    wname=document.createElement('td');
    wname.innerText=Plants['name'];
    row.appendChild(wname);

    description=document.createElement('td');
    description.innerText=Plants['description'];
    row.appendChild(description);

    species=document.createElement('td');
    species.innerText=Plants['species'];
    row.appendChild(species);

    age=document.createElement('td');
    age.innerText=Plants['age'];
    row.appendChild(age);

    habitat=document.createElement('td');
    habitat.innerText=Plants['habitat'];
    row.appendChild(habitat);

    size=document.createElement('td');
    size.innerText=Plants['size'];
    row.appendChild(size);
    return row;
}

(function () {
    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    document.getElementById('ubutton').addEventListener(
        'click', onUpdate
    );
    document.getElementById('pubutton').addEventListener(
        'click', onPrepareUpdate
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );
    console.log('Handlers is set')
})()