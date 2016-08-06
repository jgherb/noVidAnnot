// ==UserScript==
// @name        Video Annotations Remove
// @namespace   no_vid_annot
// @include     https://www.youtube.com/
// @version     1
// @grant       none
// ==/UserScript==
window.setTimeout(deleteVidAnnot,10);
function deleteVidAnnot() {
    var x = document.getElementsByClassName("video-annotations");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "";
    }
    window.setTimeout(deleteVidAnnot,10);
}
