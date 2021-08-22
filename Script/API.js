const API_url = "http://192.168.0.6:62073/Api/Access/HelloWorld";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState == 4 && this.status == 200){


        console.log(this.response);
        /*
        const data = this.response;
        const HTMLResponse = document.querySelector(#apires)
        */
    }

    //const data = JSON.parse(this.response);
    console.log(this.response);
}