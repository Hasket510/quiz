import { Link } from 'react-router-dom'
import styles from './TestSelector.module.scss'

interface ITestSelector {
	onSelect: (test: string) => void
}

const worlds = ['warcraft', 'diablo', 'starcraft']

export function TestSelector({ onSelect }: ITestSelector) {
	return (
		<section className={styles.testSelector}>
			<h1 className={styles.title}>Выберите тест:</h1>
			<ul className={styles.list}>
				{worlds.map(test => (
					<li className={styles.item} key={test}>
						<Link
							to={`/${test}/?question=1`}
							className={`${styles[`link__${test}`]}`}
							onClick={() => onSelect(test)}
						>
							{test}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
