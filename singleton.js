// you can only create one instance of the same object
var singletonLogger = (
    function (){
        var instance;

        class Logger {
    constructor() {
        this.randomNumber = Math.random();}
        log(message) {
            console.log("Logger Id:", this.randomNumber,message)
        };
    }
 return{
    getInstance: function(){
        if (!instance){
            instance = new Logger
        }
    
            return instance
        

    }
 }
    }
)();

var log1 = singletonLogger.getInstance();
log1.log("We finally have a Singleton");