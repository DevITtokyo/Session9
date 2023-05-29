
function showConfirmBox () {
    document.getElementById("overlay").hidden = false;

}
function closeConfirmBox () {
    document.getElementById("overlay").hidden = true;
}
function isConfirm(answer) {
    if (answer) {
        alert("Answer is yes");
    }else{
        alert("Answer is no");
    }
    closeConfirmBox ();
}
