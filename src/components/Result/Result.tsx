import logo from '../../assets/pic-result.jpg'
import styles from './result.module.scss'

interface IResult {
	correct: number
	length: number
}
export function Result({ correct, length }: IResult) {
	return (
		<div className={styles.result}>
			<img src={logo} />
			<h2>
				Правильных ответов: {correct} из {length}
			</h2>
			<a href='/'>
				<button>Попробовать снова</button>
			</a>
		</div>
	)
}
