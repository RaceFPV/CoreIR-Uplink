
      function handleSubmit(e) {
        e.preventDefault();

        // get the file chosen from the form
        var file = fileInput.files[0];
        var reader = new FileReader();

        // get the requested board name
        var board = boardType.value;

        reader.onload = function(event) {

          // get the string text of the file
          var filecontents = event.target.result;

          // get the message payload ready to send to the chrome app
          var message = {
            board: board,
            file: filecontents
          };

          // post object to extension so that it will flash the file
          port.postMessage(message);
        };

        // we can send the filecontents to the chrome app as plain text
        reader.readAsText(file);
      }

      var uploadForm = document.getElementById('uploadForm');
      var fileInput = document.getElementById('fileInput');
      var boardType = document.getElementById('boardType');
      var uploadBtn = document.getElementById('uploadBtn');

      uploadForm.addEventListener('submit', handleSubmit, false);

      // open long lived connection with extension (it takes time for flash to complete)
      var extensionid = chrome.runtime.id;
      var port = chrome.runtime.connect(extensionid);

      // log out any responses we get from the chrome app
      port.onMessage.addListener(function(msg) {
        console.log('CoreIR-Uplink is done:', msg);
        window.alert('done');
      });
