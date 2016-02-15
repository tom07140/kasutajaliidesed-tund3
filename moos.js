(function(){
  "use script";

  var Moosipurk = function(){

    //see on singleton pattern
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }

    //this viitab moosipurgi funktsioonile
    Moosipurk.instance = this;

    console.log("Moosipurgi sees");

    this.click_count = 0;
    console.log(this);

    //kui tahan moosipurgile referenci siis kasuton THIS = MOOSIPURGI RAKENDUS ISE
    this.init();

  };

  window.Moosipurk = Moosipurk; //paneme muutuja külge

  //kõik funktsioonid lähevad moosipurgi külge
  Moosipurk.prototype = {
    init: function(){
      console.log("Rakendus läks tööle");

      //kuulame hiireklikki nupul
      this.bindMouseEvents();

    },
    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click',this.addNewClick.bind(this));
    },
    addNewClick: function(event){
      console.log(event);
      this.click_count++;
      console.log(this.click_count);
    }
  };

  window.onload=function(){
    var app = new Moosipurk();
  };



})();
