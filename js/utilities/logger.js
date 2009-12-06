function Logger(){
  this.info = function(message){
    try {
      console.log(message);
    } catch(error) {
      // do nothing
    }
  }
}

var logger = new Logger;
