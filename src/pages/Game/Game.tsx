import { useRef } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Pic } from '../../components/Pic'
import { isValidTestId, question, type TTestWorld } from '../../questions'
import styles from './Game.module.scss'

export function Game() {
	const { test } = useParams()
	const currentTest: TTestWorld = isValidTestId(test) ? test : 'warcraft'

	const nav = useNavigate()
	const ref = useRef(0)
	const [searchParams, setSearchParams] = useSearchParams()

	const questionsForTest = question[currentTest]

	const getCurrentQuestion = () => {
		const questionFromQuery = Number(searchParams.get('question') ?? '1')

		if (!Number.isFinite(questionFromQuery) || questionFromQuery < 1) {
			return 1
		}

		if (questionFromQuery > questionsForTest.length) {
			return questionsForTest.length
		}

		return questionFromQuery
	}

	const currentQuestion = getCurrentQuestion()
	const step = currentQuestion - 1

	const percentage = Math.round((step / questionsForTest.length) * 100)

	const choiceVariant = (index: number) => {
		if (index === questionsForTest[step].correct) {
			ref.current++
		}

		if (currentQuestion === questionsForTest.length) {
			setSearchParams({})
			nav(
				`/${currentTest}/result?correct=${ref.current}&length=${
					questionsForTest.length
				}`,
			)
			return
		}

		setSearchParams({ question: String(currentQuestion + 1) })
	}

	return (
		<section>
			<div className={styles.progress}>
				<div
					style={{ width: `${percentage}%` }}
					className={styles.progress__inner}
				></div>
			</div>
			<Pic name={questionsForTest[step].pic} />
			<h3 className={styles.question}>{questionsForTest[step].question}</h3>
			<ul className={styles.questionList}>
				{questionsForTest[step].variants.map((variant, index) => (
					<li
						className={styles.variant}
						onClick={() => choiceVariant(index)}
						key={variant}
					>
						{variant}
					</li>
				))}
			</ul>
		</section>
	)
}
