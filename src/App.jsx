import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
function App() {
const	[activePlayer, setActivePlayer] = useState('X')

	function handleSelectSuare() {
		setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player initialName="Player 1" symbol="X" isActve={activePlayer==='X'} />
					<Player initialName="Player 2" symbol="0" isActve={activePlayer==='O'} />

				</ol>
				<GameBoard onSelectSuare={handleSelectSuare} activePlayerSymbol={activePlayer}/>

			</div>

		</main>)
}

export default App
