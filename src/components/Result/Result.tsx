import { EPics, Pic } from '../../assets/Pic'
import styles from './result.module.scss'

interface IResult {
	correct: number
	length: number
}
export function Result({ correct, length }: IResult) {
	return (
		<div className={styles.result}>
			<Pic name={EPics.warCraftResult}></Pic>
			<h3>
				Правильных ответов: {correct} из {length}
			</h3>
			<a href='/'>
				<button>Попробовать снова</button>
			</a>
		</div>
	)
}
