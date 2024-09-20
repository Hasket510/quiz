import { EPics, Pic } from '../../assets/Pic'
import styles from './Game.module.scss'

interface IGame {
	step: number
	quest: string
	pic: EPics
	variants: string[]
	length: number
	clickOnVariant: (index: number) => void
}

export function Game({
	quest,
	variants,
	step,
	clickOnVariant,
	pic,
	length,
}: IGame) {
	const percentage = Math.round((step / length) * 100)

	return (
		<section>
			<div className={styles.progress}>
				<div
					style={{ width: `${percentage}%` }}
					className={styles.progress__inner}
				></div>
			</div>
			<Pic name={pic} />
			<h3>{quest}</h3>
			<ul>
				{variants.map((variant, index) => (
					<li onClick={() => clickOnVariant(index)} key={variant}>
						{variant}
					</li>
				))}
			</ul>
		</section>
	)
}
