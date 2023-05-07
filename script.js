$(document).ready(function() {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/tomorrow_night");
  editor.getSession().setMode("ace/mode/php");
  const runButton = $('#run');
  const saveButton = $('#save');
  const liveViewer = $('#viewer');
  runButton.on('click', function() {
    const code = editor.getValue(); // Get the code from the editor
    $.ajax({
      url: './execute.php',
      type: 'POST',
      data: code,
      contentType: 'text/plain',
      success: function(result) {
        liveViewer.contents().find('html').html(result);
      },
      error: function(error) {
        console.error(error);
      }
    });
  });
  saveButton.on('click', function() {
    const code = editor.getValue(); // Get the code from the editor
    $.ajax({
      url: './save.php',
      type: 'POST',
      data: {
        code: code
      },
      success: function(result) {
        console.log(result);
      },
      error: function(error) {
        console.error(error);
      }
    });
  });
});