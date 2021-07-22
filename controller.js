let createController = (function()
{
    let currentSymbol = `X`;
    let game = createGame;
    let winnerDisplay = document.getElementById(`winner`);
    function handleInput()
    {
        let disableAll = function(){
            let buttons = document.querySelectorAll(`button`);
            buttons = Array.from(buttons);
            for(let i = 0; i < buttons.length; i++)
            {
                buttons[i].setAttribute(`disabled`,`true`);
            }
        };
        let x = parseInt(this.id.charAt(0));
        let y = parseInt(this.id.charAt(1));
        this.innerText = currentSymbol;
        this.setAttribute(`disabled`,`true`);
        game.setCell(x,y);
        console.log(game.getWinner());
        switch(game.getWinner())
        {
            case 0:
                winnerDisplay.innerText = `Murderer is O`;
                disableAll();
                break;
            case 1.5:
                winnerDisplay.innerText = ` Murderer is unidentified!`;
                disableAll();
                break;
            case 3:
                winnerDisplay.innerText = `Murderer is X`;
                disableAll();
                break;
            case NaN:
                break;
        }

        currentSymbol = currentSymbol === `X` ? `O` : `X`;
    }

    function init()
    {
        let buttons = document.querySelectorAll(`button`);
        buttons = Array.from(buttons);
        for(let i = 0; i < buttons.length; i++)
        {
            buttons[i].onclick = handleInput;
        }
    }
    init();
})();