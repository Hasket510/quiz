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
			<Pic
				className={styles.image}
				name={RESULT_PIC[currentTest]}
				alt='Финальная картинка'
			/>
			<p className={styles.resultNumber}>
				Правильных ответов: {searchParams.get('correct')} из
				{searchParams.get('length')}
			</p>
			<div className={styles.buttonsContainer}>
				<Link to={`/${currentTest}?question=1`} className={styles.link}>
					Пройти этот тест ещё раз
				</Link>
				<Link to='/' className={styles.link}>
					Пройти другой тест
				</Link>
			</div>
		</section>
	)
}
