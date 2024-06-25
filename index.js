
function copyText(element1) {
    var field = document.getElementById(element1);
    field.select();
    field.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(field.value);
    document.getElementById();
}

function toggle(tagid) {
    var tag=document.getElementById(tagid).style;
    if (tag.display === 'block') {
        tag.display='none';
    }else if (tag.display === 'none') {
        tag.display='block';
    }
}

function blankOut(buttonid){
    var button = document.getElementById(buttonid);
    button.style = "background-color: #3b362e";
}


function getPageName() {
    var page=location.pathname.split("/")[1];
    if (page == ""){
        page="home";
    }
    return page;

}


let pgname=getPageName();
blankOut(pgname);
blankOut(pgname+"-mobile");
