import { EPics, Pic } from '../../assets/Pic'
import { questions } from '../../questions'
import styles from './game.module.scss'

interface IGame {
	step: number
	quest: string
	pic: EPics
	variants: string[]
	clickOnVariant: (index: number) => void
}

export function Game({ quest, variants, step, clickOnVariant, pic }: IGame) {
	const percentage = Math.round((step / questions.length) * 100)

	return (
		<>
			<div className={styles.progress}>
				<div
					style={{ width: `${percentage}%` }}
					className={styles.progress__inner}
				></div>
			</div>
			<Pic name={pic}></Pic>
			<h3>{quest}</h3>
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
