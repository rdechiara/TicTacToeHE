const createGame = (function()
{
    let board = [];

    const boardSize = 5;
    const MIN_X = 1;
    const MAX_X = 3;
    const MIN_Y = 1;
    const MAX_Y = 3;

    let nextValue = 1;
    //inizializza la pedana di gioco con una matrice 3x3
    function init()
    {
        for(let i = 0; i < boardSize; i++)
        {
            board[i] = new Array(boardSize).fill(NaN);
        }

    }
    /*
    ** Imposta una cella x,y a nextValue
    ** Ritorna FALSE in caso di coordinate non valide,
    ** TRUE altrimenti.
    */
    function setCell(x,y)
    {
        if(MIN_X <= x && x <= MAX_X  && MIN_Y <= y && y <= MAX_Y) 
        {
            board[x][y] = nextValue;
            //aggiorna la maschera
            board[x][boardSize - 1] = board[x][1] + board[x][2] + board[x][3];
            board[boardSize - 1][y] = board[1][y] + board[2][y] + board[3][y];
            board[boardSize - 1][boardSize - 1] = board[1][1] + board[2][2] + board[3][3];
            board[boardSize - 1][0] = board[1][3] + board[2][2] + board[3][1];

            nextValue = nextValue === 1 ? 0 : 1;
            return true;
        }

        return false;
    }
    /*
    ** Controlla se la griglia di gioco è piena.
    */
    function isBoardFull()
    {
        let found = false;
        let ans = true;
        for(let i = MIN_X; i <= MAX_X && found === false; i++)
        {
            for(let j = MIN_Y; j <= MAX_Y && found === false; j++)
            {
                if(isNaN(board[i][j]))
                {
                    found = true;
                    ans = false;
                }
            }
        }
        return ans;
    }
    /*
    ** Controlla se c'è un vincitore. 
    ** Se un giocatore risulta vincente ritorna 3 se vince il primo giocatore, 0 per
    ** il secondo giocatore. In caso di pareggio ritorna 1.5. Altrimenti ritorna NaN.
    */
    function getWinner()
    {
        let winner = NaN;
        let winnerFound = false;

        for(let i = 0; i < boardSize && winnerFound === false; i++)
        {
            if(board[i][boardSize - 1] === 3 || board[i][boardSize - 1] === 0)
            {
                winner = board[i][boardSize - 1];
                winnerFound = true;
            }
        }
        if(winnerFound === false)
        {
            for(let i = 0; i < boardSize && winnerFound === false; i++)
            {
                if(board[boardSize - 1][i] === 3 || board[boardSize - 1][i] === 0)
                {
                    winnerFound = true;
                    winner = board[boardSize - 1][i];
                }
            }
        }
        if(true === isBoardFull() && winnerFound === false)
        {
            winner = 1.5;
        }
        return winner;
    }
    
    function getBoard()
    {
        return board;
    }
    //setup automatico
    init();
    //handlers
    return {setCell, getWinner,getBoard,isBoardFull};
})();