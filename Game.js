const GameState = Object.freeze({
    WELCOME:   Symbol("welcome"),
    GO:   Symbol("go"),
    IN:  Symbol("in"),
    IGNORE:  Symbol("ignore"),
    FIND:  Symbol("find"),
    SEE:  Symbol("see"),
    CHECK:  Symbol("check"),
    CONTINUE: Symbol("continue"),
    INTO: Symbol("into"),
    WANT: Symbol("want"),
    YES: Symbol("yes"),
    OUT: Symbol("out"),
    END: Symbol("end")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOME;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOME:
                sReply = "you are at home alone there is no light in the house and suddenly you here the some horror noise and want something special from the basement. you are also hungry and thirsty. Do you want to <strong>go</strong> to mansion for help or <strong>continue</strong> walking to home basement?";
                this.stateCur = GameState.GO;
                break;
            case GameState.GO:
                if(sInput.toLowerCase().match("go")){
                    sReply = "You reached at the basement door. Do you want go <strong>in</strong> or go back and <strong>continue</strong> walking to outside?";
                    this.stateCur = GameState.IN;
                }else if(sInput.toLowerCase().match("continue")){
                    sReply = "You are still very hungry and thirsty. You cannot find any other place to go. You head towards the outside of the home.";
                    this.stateCur = GameState.END;
                }else{
                    sReply ="You are still very hungry and thirsty. You cannot find any other place to go. You head towards the outside of the home.";
                    this.stateCur = GameState.END;
                }
                break;
            case GameState.IN:
                if(sInput.toLowerCase().match("in")){
                    sReply = "You enter to the basement, it is very dark, you hear scary noises. are you want to <strong>ignore</strong> noises and try to find someone to provide you something to eat or go out and <strong>continue</strong> to walk to outside of the home?"
                    this.stateCur = GameState.IGNORE;
                }else if(sInput.toLowerCase().match("continue")){
                    sReply = "A Anabella ghost finds you and you get killed...!!.";
                    this.stateCur = GameState.GO;
                }else{
                    sReply = "You are still too thirsty and hungry. You cannot find any path for the finding something. You head towards the basement.";
                    this.stateCur = GameState.END;

                }
                break;
            case GameState.IGNORE:
                if(sInput.toLowerCase().match("ignore")){
                    sReply = "You are too strong to face the darkness and Anabella ghost! But you try to find someone and unfortunately you cannot find anyone. While finding you reach to basement kitchen's fridge for the food. You hear something which is too weird. are  you want to <strong>find</strong> where it is coming this noise from or go upside and <strong>continue</strong> to walk to outside of the home?";
                    this.stateCur = GameState.FIND;
                }else if(sInput.toLowerCase().match("continue")){
                    sReply = "A Anabella ghost finds you and you get killed...!!.";
                    this.stateCur = GameState.GO;
                }else{
                    sReply = "You are still too thirsty and hungry. You cannot find any path for the finding something. You head towards the basement.";
                    this.stateCur = GameState.END;

                }
                break;
            case GameState.FIND:
                if(sInput.toLowerCase().match("find")){
                    sReply = "You are clearly hearing that sound which is coming from a one of the closet in the kitchen above gas stove and you find a scary  toy from where this scary sound is coming from. You turn off the toy but you still hear the scary noise which is same as the before sound. are you want to <strong>see</strong> weather this sound is coming from or go out and <strong>continue</strong> to walk to outside of the house?";
                    this.stateCur = GameState.SEE;
                }else if(sInput.toLowerCase().match("continue")){
                    sReply = "A Anabella ghost finds you and you get killed...!!";
                    this.stateCur = GameState.GO;
                }else{
                    sReply = "You are still too thirsty and hungry. You cannot find any path for the finding something. You head towards the basement.";
                    this.stateCur = GameState.END;
                    
                }
                break;
            case GameState.SEE:
                if(sInput.toLowerCase().match("see")){
                    sReply = "You leave the basement kitchen and follow the that scary sound. surprisingly, you hear some walking sound on the first floor. are you want to <strong>check</strong> for that sound on the upper floor  or go out and <strong>continue</strong> to walk to outside of the home?";
                    this.stateCur = GameState.CHECK;
                }else if(sInput.toLowerCase().match("continue")){
                    sReply = "A Anabella ghost finds you and you get killed...!!";
                    this.stateCur = GameState.GO;
                }else{
                    sReply = "You are still too thirsty and hungry. You cannot find any path for the finding something. You head towards the basement.";
                    this.stateCur = GameState.END;
                    
                }
                break;
            case GameState.CHECK:
                if(sInput.toLowerCase().match("check")){
                    sReply = "You reached at the first floor of the house and there is too much darkness The noise is still coming same as the before. suddenly you see that someone siting on the sofa of the house and you get scared and running back to the basement. Do you want to go <strong>into</strong> the first floor and check it or go out and <strong>continue</strong> to walk to the outside of the home?";
                    this.stateCur = GameState.INTO;
                }else if(sInput.toLowerCase().match("continue")){
                    sReply = "A Anabella ghost finds you and you get killed...!!";
                    this.stateCur = GameState.GO;
                }else{
                    sReply = "You are still too thirsty and hungry. You cannot find any path for the finding something. You head towards the basement.";
                    this.stateCur = GameState.END;
                    
                }
                break;
            case GameState.INTO:
                if(sInput.toLowerCase().match("into")){
                    sReply = "you entered into the first floor and you are feeling too scared means there is some danger activity is going on and after that you suddenly hearing the scary sound as the louder and louder and you are trying to go outside but door is not open. Do you <strong>want to</strong> find for another door to exit or you want to <strong>hide</strong> at another place?";
                    this.stateCur = GameState.WANT;
                }else{
                    sReply = "You are still too thirsty and hungry. You cannot find any path for the finding something. You head towards the basement.";
                    this.stateCur = GameState.END;
                    
                }
                break;
            case GameState.WANT:
                if(sInput.toLowerCase().match("want to")){
                    sReply = "You start to find for another door for the exit and suddenly you find another door for exit. You come across that door. Do you want to open the door? Yes or No?";
                    this.stateCur = GameState.YES;

                }else if(sInput.toLowerCase().match("hide")){
                    sReply = "you find space at the below the table for sometime. Do you want to get <strong>out</strong> of the house basement or <strong>wait</strong> till wait for someone or for the light?";
                    this.stateCur = GameState.OUT;
                    
                }
                break;
            case GameState.YES:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "ohh really...!!! it was just funtime which was created by the friends";
                    this.stateCur = GameState.WELCOME;

                }else if(sInput.toLowerCase().match("no")){
                    sReply = "Uh...Oh a Anabella ghost finds you and you get killed...!!";
                    this.stateCur = GameState.WELCOME;
                    
                }
                break;
            case GameState.OUT:
                if(sInput.toLowerCase().match("out")){
                    sReply = "You start to find for another door for the exit and suddenly you find another door for exit. You come across that door. Do you want to open the door? Yes or No?";
                    this.stateCur = GameState.YES;

                }else if(sInput.toLowerCase().match("wait")){
                    sReply = "Uh...Oh a Anabella ghost finds you and you get killed...!!.";
                    this.stateCur = GameState.WELCOME;
                    
                }
                break;
            case GameState.END:
                sReply = "You reached outside of the house and stayed all night without food and water.";
                this.stateCur = GameState.WELCOME;
        }
        return([sReply]);
    }
}