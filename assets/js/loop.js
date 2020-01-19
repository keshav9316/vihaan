
function show(){
    var arr = ['WELCOME CODERS','EAT','SLEEP','CODE','REPEAT','GOODLUCK'];
    document.getElementById('edit').innerHTML = `<div class="time-entry days"><span>${add(arr)}</span></div>`;
    setTimeout(show(), 100);
}

function add(arr){
    let i=-1;
    i=i+1;
   return ( arr[i]);
}

 show();