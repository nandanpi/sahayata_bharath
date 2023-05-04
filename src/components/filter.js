function showDiv(divId)
{
    var divs = document.getElementsByClassName('elements');
    console.log(divs);
    for(var i = 0; i < divs.length; i++) {
        divs[i].classList.add = "hidden";
        console.debug("hidden class")
    }
    // document.getElementById(divId).style.display = 'block';
    // console.log("block style")
}
// window.onload = function(){
//     document.getElementById('div7').style.display = 'block';
// }

export default showDiv();