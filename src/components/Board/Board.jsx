import styles from './Board.module.css'
import { Cell } from '../Cell/Cell.jsx'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { state } from '../../redux/selectors/select_state.js'

export const Board = ({ click }) => {
	const board = useSelector(state)

	return (
		<div className={styles.container}>
			{board.map((square, index) => (
				<Cell key={index} click={() => click(index)} value={square} />
			))}
		</div>
	)
}

Board.propTypes = {
	board: PropTypes.array,
	click: PropTypes.func
}
