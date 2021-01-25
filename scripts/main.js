/*
 * @author Oliver Jiang
*/

$("body").terminal( async function(command, term) {
  if (command.length > 0) {
    await respond(command, term);
  }
}, {
  name: "CorrectBot",
  history: false,
  greetings: null,
  onInit: function(term) {
    header(term);
  }
});

function respond(message, term) {
  //let url = "http://0.0.0.0:5000";
  let url = "https://arcane-fortress-58468.herokuapp.com/";
  $.ajax({
    type: "POST",
    url: url,
    async: false,
    data: message,
    dataType: "text",
    success: function(data) {
      term.echo("\n" + data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('jqXHR ' + jqXHR);
      console.log('textStatus ' + textStatus);
      console.log('errorThrown ' + errorThrown);
    }
  });
}

function header(term) {
  term.echo(
    "  ____                         _   ____        _   \n" +
    " / ___|___  _ __ _ __ ___  ___| |_| __ )  ___ | |_ \n" +
    "| |   / _ \\| '__| '__/ _ \\/ __| __|  _ \\ / _ \\| __|\n" +
    "| |__| (_) | |  | | |  __/ (__| |_| |_) | (_) | |_ \n" +
    " \\____\\___/|_|  |_|  \\___|\\___|\\__|____/ \\___/ \\__|\n" +
    "Hi, I'm Correctbot! I am always correct (except for when I'm wrong)!\n" +
    "Please tell me something you believe! Please send one complete sentence at a time :D.\n" +
    "Also, I'm slow on startup, so please bear with me!\n"
  );
}

/*
  ____                         _   ____        _   
 / ___|___  _ __ _ __ ___  ___| |_| __ )  ___ | |_ 
| |   / _ \| '__| '__/ _ \/ __| __|  _ \ / _ \| __|
| |__| (_) | |  | | |  __/ (__| |_| |_) | (_) | |_ 
 \____\___/|_|  |_|  \___|\___|\__|____/ \___/ \__|
*/
