class Question{
    constructor(){
        this.d = createElement("h2");
        this.e = createInput("Enter your name here...");
        this.i = createInput("Enter correct option number.")
        this.f = createButton("Submit !");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
        this.j = createElement("h4");
    }
    display(){
        
        this.d.html("MyQuiz Game");
        this.d.position(350,0);
        
        this.e.position(150,230);
        this.i.position(350,230);

        this.j.html("Question:- What starts and ends with the letter 'E',but has only one letter ?");
        this.j.position(150,80);

        this.option1.html("1: Everyone");
        this.option1.position(150,100);

        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.option3.html("3: Estimate");
        this.option3.position(150,140);

        this.option4.html("4: Example");
        this.option4.position(150,160);
        
        this.f.position(220,300);
       
        this.f.mousePressed(()=>{
            this.e.hide();
            this.f.hide();
            this.i.hide();
            contestant.name = this.e.value();
            contestantCount++;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        this.j.html("Hello "+contestant.name+" Hope for the best !");
        this.j.position(250,150);
         })
    }
    hide(){
        this.e.hide();
        this.f.hide();
        this.j.hide();
        this.i.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
    }
}