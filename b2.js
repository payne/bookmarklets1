// from the https://www.youtube.com/watch?v=DloHqUfPbJc
(function() {
  console.log('highlighted text bookmarklet starting.');

// from https://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

  alert(getSelectionText());

})();
