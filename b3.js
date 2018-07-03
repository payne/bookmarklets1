// from the https://www.youtube.com/watch?v=DloHqUfPbJc
(function() {
  console.log('highlighted text bookmarklet starting. with h1 tags');

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

// from https://www.cssscript.com/minimal-modal-window-with-plain-javascript/
const modalTemplate = `
<div class="overlay is-hidden" id="overlay">
  <div class="modal-content">
    <span class="button-close" onclick="closeModal();"></span>
    <h3>Modal Heading</h3>
    <p>Modal Content</p>
  </div>
</div>
`;

  alert("<h1>"+getSelectionText()+"</h1>");

})();
