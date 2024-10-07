import { useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Pic } from '../../assets/Pic'
import { questions } from '../../questions'
import styles from './Game.module.scss'

interface IGame {
	test: string
}

export function Game({ test }: IGame) {
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

	const percentage = Math.round((step / questionList(test).length) * 100)

	const choiceVariant = (index: number) => {
		setParams({ question: (Number(params.get('question')) + 1).toString() })
		if (index === questionList(test)[step].correct) {
			ref.current++
		}
		if (step === questionList(test).length - 1) {
			setParams({})
			nav(`/result?correct=${ref.current}&length=${questionList(test).length}`)
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
			<Pic name={questionList(test)[step].pic} />
			<h3>{questionList(test)[step].question}</h3>
			<ul>
				{questionList(test)[step].variants.map((variant, index) => (
					<li onClick={() => choiceVariant(index)} key={variant}>
						{variant}
					</li>
				))}
			</ul>
		</section>
	)
}
