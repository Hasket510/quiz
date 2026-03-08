import { useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Pic } from '../../components/Pic'
import { questions } from '../../questions'
import styles from './Game.module.scss'

export function Game() {
	const { test } = useParams()
	const currentTest =
		test === 'diablo' || test === 'starcraft' || test === 'warcraft'
			? test
			: 'warcraft'

	const questionList = (test: string) => {
		switch (test) {
			case 'diablo':
				return questions.diablo
			case 'starcraft':
				return questions.starcraft
			default:
				return questions.warcraft
		}
	}

	const [step, setStep] = useState(0)
	const nav = useNavigate()
	const ref = useRef(0)
	const [params, setParams] = useSearchParams()

	const percentage = Math.round(
		(step / questionList(currentTest).length) * 100
	)

	const choiceVariant = (index: number) => {
		setParams({ question: (Number(params.get('question')) + 1).toString() })
		if (index === questionList(currentTest)[step].correct) {
			ref.current++
		}
		if (step === questionList(currentTest).length - 1) {
			setParams({})
			nav(
				`/${currentTest}/result?correct=${ref.current}&length=${
					questionList(currentTest).length
				}`
			)
		}
		setStep(step + 1)
	}

	return (
		<section>
			<div className={styles.progress}>
				<div
					style={{ width: `${percentage}%` }}
					className={styles.progress__inner}
				></div>
			</div>
			<Pic name={questionList(currentTest)[step].pic} />
			<h3 className={styles.question}>
				{questionList(currentTest)[step].question}
			</h3>
			<ul className={styles.questionList}>
				{questionList(currentTest)[step].variants.map((variant, index) => (
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
