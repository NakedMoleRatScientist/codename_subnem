function Logger(){
  this.info = function(message){
    if(console){
      try {
        console.log(message);
      } catch(error) {
        // do nothing
      }
    }
  }
}

var logger = new Logger;
