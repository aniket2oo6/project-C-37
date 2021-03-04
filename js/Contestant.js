class Contestant{
    constructor(){
this.index = null;
this.name = null;
    }
    getCount(){
var a = database.ref("contestantCount");
a.on("value",(data)=>{
    contestantCount = data.val();
});
    }
    update(){
var b = "contestants/contestant" + this.index;
database.ref(b).set({
    name:this.name,
    index:this.index,
})
    }
    updateCount(count){
var i = database.ref("/").update({
    contestantCount:count
})
    }

    static getContestantInfo(){
      var c = database.ref("contesatnts");
      c.on("value",(data)=>{
          contestants = data.val();
      })
    }
}