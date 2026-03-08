import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Pic, Pics, type TPics } from '../../components/Pic'
import { isValidTestId, type TTestWorld } from '../../questions'
import styles from './Result.module.scss'

const RESULT_PIC: Record<TTestWorld, TPics> = {
	warcraft: Pics.warCraftResult,
	diablo: Pics.diabloResult,
	starcraft: Pics.starCraftResult,
}

export function Result() {
	const { test } = useParams()
	const currentTest: TTestWorld = isValidTestId(test) ? test : 'warcraft'
	const [searchParams] = useSearchParams()

	return (
		<section className={styles.result}>
			<Pic name={RESULT_PIC[currentTest]} />
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
