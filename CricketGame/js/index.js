function batClicked()
{
    let randomNumber = Math.random() * 3;
    let computerChoice='';
    if(randomNumber > 0 && randomNumber <=1)
    {
        computerChoice='bat';
    } 
    else if(randomNumber > 1  && randomNumber <=2)
    {
        computerChoice='ball';
    }
    else
    {
        computerChoice='stump';
    }
    let result='';

    if(computerChoice === 'ball')
    {
        result='user won!';
    }
    else if(computerChoice === 'stump')
    {
        result='compuer won!';
    }
    else{
        result=`it's tie`;
    }

alert(`you have choosen bat and computer choice is ${computerChoice} so ${result}`)

}