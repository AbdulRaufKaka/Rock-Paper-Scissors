let User_Score = 0;
let Comp_Score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const User_Score_para = document.querySelector("#user_score");
const Comp_Score_para = document.querySelector("#Computer_Score");


const gen_Comp_Choice = () =>
{
    // rock , paper , scissors
    const option = ["rock","paper","sciccors"];
    const Rnd_INDX  = Math.floor(Math.random() *3); // 0 to  2 random valueu in between
    return option[Rnd_INDX];
}

const Draw_Game = () =>
{
    console.log("Game Was Draw");
    msg.innerText = " Gamw Was Draw Play Again !";
    msg.style.background = "#081b31";

}


const Show_Winner = (User_Win,User_Choice,Computer_Choice) =>
{   
    if(User_Win)
    {
        User_Score++;
        User_Score_para.innerText = User_Score;
        msg.innerText = `You win! Your ${User_Choice} beats ${Computer_Choice}`;

    }
    else
    {
        Comp_Score++;
        Comp_Score_para.innerText = Comp_Score;
        msg.innerText = " You Lose !"
        msg.style.background = "red";
        msg.innerText = `You Lose! Your ${Computer_Choice} beats ${User_Choice}`;

    }

}

const Play_Game = (User_Choice) =>
{
    //Generate Computer Choice --> Building game in a modula way i.e Every fucntion do seperate work for it self
    let Computer_Choice = gen_Comp_Choice();
    if(User_Choice === Computer_Choice)
    {
        Draw_Game()
    }
    else
    {
        let User_Win = true; // Tracking if User win's or not 
        if(User_Choice ==="rock") // if User choice is rock then the comp_choice would be scissors or paper
        {
            User_Win = Computer_Choice ==="paper"? false:true;
        }
        else if(User_Choice==="paper") // compt_choice = rock, scissor
        {
            User_Win = Computer_Choice ==="sciccors"? false:true;
        }

        else 
        {
            // computer = rock, paper
            User_Win = Computer_Choice === "rock"?false:true;
        }
        Show_Winner(User_Win,User_Choice,Computer_Choice);
    }

}

choices.forEach((choice) =>
{
    choice.addEventListener("click",() =>
    {
        const User_Choice = choice.getAttribute("id");
        Play_Game(User_Choice); // i.e What it is Call Back Function
    })
})

