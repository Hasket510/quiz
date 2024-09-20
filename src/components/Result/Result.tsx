import { EPics, Pic } from '../../assets/Pic'
import styles from './Result.module.scss'

interface IResult {
	correct: number
	length: number
	select: string
}
export function Result({ correct, length, select }: IResult) {
	const resultPic =
		select === 'warcraft'
			? EPics.warCraftResult
			: select === 'diablo'
			? EPics.diabloResult
			: EPics.starCraftResult

	return (
		<section className={styles.result}>
			<Pic name={resultPic} />
			<p>
				Правильных ответов: {correct} из {length}
			</p>
			<a href='/Quiz/'>
				<button>Попробовать снова</button>
			</a>
		</section>
	)
}
