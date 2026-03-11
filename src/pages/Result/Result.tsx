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

	const correctParam = Number(searchParams.get('correct') ?? '0')
	const lengthParam = Number(searchParams.get('length') ?? '0')

	const isValid =
		Number.isFinite(correctParam) &&
		Number.isFinite(lengthParam) &&
		lengthParam > 0 &&
		correctParam >= 0

	const totalQuestions = isValid ? lengthParam : 0
	const correctAnswers = isValid ? Math.min(correctParam, lengthParam) : 0

	return (
		<section className={styles.result}>
			<Pic
				className={styles.image}
				name={RESULT_PIC[currentTest]}
				alt='Финальная картинка'
			/>
			{isValid ? (
				<p className={styles.resultNumber}>
					Правильных ответов: {correctAnswers} из {totalQuestions}
				</p>
			) : (
				<p className={styles.resultNumber}>
					Результат недоступен — некорректные параметры ссылки.
				</p>
			)}
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
