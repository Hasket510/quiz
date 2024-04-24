import { questions } from '../../questions'
import styles from './game.module.scss'

interface IGame {
	step: number
	title: string
	variants: string[]
	clickOnVariant: (index: number) => void
}

export function Game({ title, variants, step, clickOnVariant }: IGame) {
	const percentage = Math.round((step / questions.length) * 100)

	return (
		<>
			<div className={styles.progress}>
				<div
					style={{ width: `${percentage}%` }}
					className={styles.progress__inner}
				></div>
			</div>
			<h3>{title}</h3>
			<ul>
				{variants.map((variant, index) => (
					<li onClick={() => clickOnVariant(index)} key={variant}>
						{variant}
					</li>
				))}
			</ul>
		</>
	)
}
