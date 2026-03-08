import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Pic, Pics } from '../../components/Pic'
import styles from './Result.module.scss'

export function Result() {
	const { test } = useParams()
	const currentTest =
		test === 'diablo' || test === 'starcraft' || test === 'warcraft'
			? test
			: 'warcraft'

	const resultPic = (test: string) => {
		switch (test) {
			case 'diablo':
				return Pics.diabloResult
			case 'starcraft':
				return Pics.starCraftResult
			default:
				return Pics.warCraftResult
		}
	}

	const [searchParams] = useSearchParams()

	return (
		<section className={styles.result}>
			<Pic name={resultPic(currentTest)} />
			<p>
				Правильных ответов: {searchParams.get('correct')} из
				{searchParams.get('length')}
			</p>
			<Link to='/' className={styles.link}>
				Попробовать снова
			</Link>
		</section>
	)
}
