import React, {useEffect} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import {CircleOutlined, CloseOutlined} from "@mui/icons-material";

const gameBoardInit = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AIMode(props) {
    const [gameBoard, setGameBoard] = React.useState(gameBoardInit);
    const [player, setPlayer] = React.useState("X");
    const [winner, setWinner] = React.useState("");
    const [endGame, setEndGame] = React.useState(false);
    const [Draw, setDraw] = React.useState(false);
    const handleClick = (row, col) => {
        const newGameBoard = [...gameBoard];

        if (player === "X") {
            newGameBoard[row][col] = player;
            setGameBoard(newGameBoard);
            setPlayer(()=>{return "O"});
            const ai = require('tictactoe-complex-ai');
            let aiInstance = ai.createAI({level: 'hard',minResponseTime: 500, maxResponseTime: 2000});
            const board = ['', '', '', '', '', '', '', '', ''];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    board[i * 3 + j] = gameBoard[i][j];
                }
            }
            aiInstance.play(board).then(pos => {

                // Success
                console.log('AI plays on the position '+pos);
                const newGameBoard = [...gameBoard];
                newGameBoard[Math.floor(pos / 3)][pos % 3] = "O";
                setGameBoard(newGameBoard);
                setPlayer(()=>{return "X"});
            }).catch(() => {

                // Fail
                console.log('An error occurred.');
            });
        }
    };



    useEffect(() => {
        const checkWinner = () => {
            let winner = "";
            for (let i = 0; i < 3; i++) {
                if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
                    winner = gameBoard[i][0];
                }
            }
            for (let i = 0; i < 3; i++) {
                if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
                    winner = gameBoard[0][i];
                }
            }
            if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
                winner = gameBoard[0][0];
            }
            if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
                winner = gameBoard[0][2];
            }
            console.log(winner);
            if (winner !== null || winner !== '') {
                return winner;
            }
            return null;
        };
        let winner = checkWinner();
        if (winner) {
            setWinner(winner)
            setEndGame(true);
        }
        if (gameBoard.flat().every(x => x !== "")) {
            setDraw(true);
            setEndGame(true);
        }
    }, [gameBoard]);

    const resetGame = () => {
        console.log("reset");
        setGameBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
        setPlayer("X");
        setWinner("");
        setEndGame(false);
        setDraw(false);
    };

    const renderGameBoard = () => {
        let items = [];
        let k = 0
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[i][j] === "") {
                    items.push(<Box onClick={() => handleClick(i, j)} sx={{
                        width: "100px",
                        height: "100px",
                    }} key={i + " " + j}> </Box>);
                } else if (gameBoard[i][j] === "X") {
                    items.push(<CloseOutlined sx={{
                        width: "100px",
                        height: "100px",
                        color: "#f50057"
                    }} key={i + " " + j}> </CloseOutlined>);
                } else if (gameBoard[i][j] === "O") {
                    items.push(<CircleOutlined sx={{
                        width: "100px",
                        height: "100px",
                        color: "#0085d5"
                    }} key={i + " " + j}> </CircleOutlined>);
                }
                if (j < 2) {
                    items.push(<Box key={k++} sx={{
                        backgroundColor: "#000000",
                        width: "5px",
                        height: "100px"
                    }}/>);
                }

            }
            if (i < 2) {
                items.push(<Box key={k++} sx={{
                    backgroundColor: "#000000",
                    height: "5px",
                    width: "100%"
                }}/>);
            }
        }
        return items
    }

    const turnAnnonce = () => {
        if (player === "X") {
            return "It's your turn"
        } else {
            return ("it's AI's turn. please wait...")
        }
    }

    return (
        <div>
            <Typography marginTop={5} variant="h3" gutterBottom>Player vs AI Mode</Typography>
            <Typography marginTop={2} variant="h6" gutterBottom>
                { turnAnnonce() }
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                maxWidth: "315px",
                maxHeight: "315px",
                margin: "auto",
                marginTop: "100px"
            }}>
                {renderGameBoard()}
            </Box>

            <Modal open={endGame} onClose={resetGame}>
                <Box sx={modalStyle}>
                    <Typography variant="h3">Player {winner} wins!</Typography>
                    <Button onClick={() => resetGame()}>Play Again</Button>
                </Box>
            </Modal>

            <Modal open={Draw} onClose={resetGame}>
                <Box sx={modalStyle}>
                    <Typography variant="h3">Draw!</Typography>
                    <Button onClick={() => resetGame()}>Play Again</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default AIMode;