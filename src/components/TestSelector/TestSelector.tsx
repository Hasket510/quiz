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
						<button
							className={`${styles[`button__${test}`]}`}
							onClick={() => onSelect(test)}
						>
							{test}
						</button>
					</li>
				))}
			</ul>
		</section>
	)
}
