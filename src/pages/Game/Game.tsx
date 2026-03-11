import { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Pic } from '../../components/Pic'
import { isValidTestId, question, type TTestWorld } from '../../questions'
import styles from './Game.module.scss'

const PROGRESS_KEY = (world: TTestWorld) => `quiz_${world}_correct`

export function Game() {
	const { test } = useParams()
	const currentTest: TTestWorld = isValidTestId(test) ? test : 'warcraft'

	const nav = useNavigate()
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

	useEffect(() => {
		if (currentQuestion === 1) {
			sessionStorage.removeItem(PROGRESS_KEY(currentTest))
		}
	}, [currentQuestion, currentTest])

	const choiceVariant = (index: number) => {
		const key = PROGRESS_KEY(currentTest)
		let correctCount = Number(sessionStorage.getItem(key) || '0')

		if (index === questionsForTest[step].correct) {
			correctCount++
			sessionStorage.setItem(key, String(correctCount))
		}

		if (currentQuestion === questionsForTest.length) {
			setSearchParams({})
			nav(
				`/${currentTest}/result?correct=${correctCount}&length=${
					questionsForTest.length
				}`,
			)
			return
		}

		setSearchParams({ question: String(currentQuestion + 1) })
	}

	return (
		<section>
			<div
				className={styles.progress}
				role='progressbar'
				aria-valuenow={percentage}
				aria-label='Прогресс теста'
			>
				<div
					style={{ width: `${percentage}%` }}
					className={styles.progress__inner}
				></div>
			</div>
			<p className={styles.counter}>
				Вопрос {currentQuestion} из {questionsForTest.length}
			</p>
			<Pic
				className={styles.image}
				name={questionsForTest[step].pic}
				alt={`Картинка к вопросу ${currentQuestion}`}
			/>
			<h3 className={styles.question}>{questionsForTest[step].question}</h3>
			<ul className={styles.questionList}>
				{questionsForTest[step].variants.map((variant, index) => (
					<li key={variant}>
						<button
							type='button'
							className={styles.variant}
							onClick={() => choiceVariant(index)}
						>
							{variant}
						</button>
					</li>
				))}
			</ul>
		</section>
	)
}
