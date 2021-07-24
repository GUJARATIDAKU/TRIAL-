class Form{
    constructor(){    
    
    this.button1 = createButton('Submit');
    this.button2 = createButton('Submit');
    this.button3 = createButton('Submit');
    this.button4 = createButton('Submit');
    
    this.title = createElement('h2');
    this.question1 = createElement('h3');
    
}

    display(){
        this.title.html("Health Assistant");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.question1.html("Aa Bb Cc");
        this.question1.position(displayWidth/2-380,displayHeight/2-280);

  
        this.button1.position(displayWidth/2 - 380, displayHeight/2 - 150);
        this.button2.position(displayWidth/2 -380 , displayHeight/2 - 100);
        this.button3.position(displayWidth/2 - 380, displayHeight/2 - 50);
        this.button4.position(displayWidth/2 -380 , displayHeight/2 - 0);

    
        this.button1.mousePressed(()=>{
          
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          this.button4.hide();
         
          this.question1.hide();


        });
    
        this.button2.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
           
            this.question1.hide();
  
  
          });

          this.button3.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
           
            this.question1.hide();
  
  
          });

          this.button4.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
           
            this.question1.hide();
  
  
          });
    
      }
    }
