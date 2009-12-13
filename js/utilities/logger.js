function Logger(){
  this.info = function(message){
    if((typeof(console) != "undefined")){
      try {
        console.log(message);
      } catch(error) {
        // do nothing
      }
    }
  }
}

var logger = new Logger;
