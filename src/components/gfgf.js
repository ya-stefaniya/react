    // { humanChoice, compChoice, setCompChoice, setHumanChoice, winner, setWinner }
    // const [myScore, setMyScore] = useState(0);
    // const [compScore, setCompScore] = useState(0);

    // const [counter, setCounter] = useState(3);

    // const reload = () => {
    //     setHumanChoice();
    //     setCompChoice();
    //     newCompPick();
    //     setWinner();
    // }

    // const result = () => {
    //     if (humanChoice === "rock" && compChoice === "scissors") {
    //         setWinner("win");
    //         setMyScore(myScore + 1) && setCompScore(compScore - 1)
    //     } else if (humanChoice === "rock" && compChoice === "paper") {
    //         setWinner("lose");
    //         setMyScore(myScore - 1) && setCompScore(compScore + 1)
    //     } else if (humanChoice === "scissors" && compChoice === "paper") {
    //         setWinner("win");
    //         setMyScore(myScore + 1) && setCompScore(compScore - 1)
    //     } else if (humanChoice === "scissors" && compChoice === "rock") {
    //         setWinner("lose");
    //         setMyScore(myScore - 1) && setCompScore(compScore + 1)
    //     } else if (humanChoice === "paper" && compChoice === "rock") {
    //         setWinner("win");
    //         setMyScore(myScore + 1) && setCompScore(compScore - 1)
    //     } else if (humanChoice === "paper" && compChoice === "scissors") {
    //         setWinner("lose");
    //         setMyScore(myScore - 1) && setCompScore(compScore + 1)
    //     } else {
    //         setWinner("draw");
    //     }
    //     console.log(myScore, compScore);

    //     console.log('winner: ', winner);

    // };

    // useEffect(() => {
    //     result()
    // }, [compChoice]);

    // return (
    //     <>
    //         <div>
    //             {winner == "lose" && <h2>lose</h2>}
    //             {winner == "win" && <h2>win</h2>}
    //             {winner == "draw" && <h2>draw</h2>}
    //         </div>
    //         <Link to='/game-easy' onClick={() => reload()}>Again</Link>
    //     </>
