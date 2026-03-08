import { Link } from 'react-router-dom'
import { TEST_WORLDS } from '../../questions'
import styles from './TestSelector.module.scss'

export function TestSelector() {
	return (
		<section className={styles.testSelector}>
			<h1 className={styles.title}>Выберите тест:</h1>
			<ul className={styles.list}>
				{TEST_WORLDS.map(test => (
					<li className={styles.item} key={test}>
						<Link
							to={`/${test}?question=1`}
							className={`${styles[`link__${test}`]}`}
						>
							{test}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
