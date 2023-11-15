import styles from './Layout.module.css'
import { Scoreboard } from '../ Scoreboard/ Scoreboard.jsx'
import { useState } from 'react'
import { Board } from '../Board/Board.jsx'
import { calculation } from '../../functions/calculation.js'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../redux/selectors/select_state.js'
import { CURRENT_BOARD, NEW_GAME } from '../../redux/actions/index.js'

export const Layout = () => {
	const [xIsNext, setXIsNext] = useState(true)

	const board = useSelector(state)
	const dispatch = useDispatch()

	const winner = calculation(board)

	const handleClick = (index) => {
		const boardCopy = [...board]
		if (winner || boardCopy[index]) return
		boardCopy[index] = xIsNext ? 'X' : 'O'
		dispatch(CURRENT_BOARD(boardCopy))
		setXIsNext(!xIsNext)
	}

	const newGame = () => {
		dispatch(NEW_GAME)
	}

	const isDraw = (array) => {
		return array.every((item) => item !== '')
	}

	const draw = isDraw(board)

	return (
		<>
			<Scoreboard move={xIsNext} winner={winner} draw={draw} />
			<Board board={board} click={handleClick} />
			<button className={styles.button} onClick={newGame}>
				Начать игру заново
			</button>
		</>
	)
}
