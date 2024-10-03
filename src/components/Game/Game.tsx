import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pic } from '../../assets/Pic'
import { questions } from '../../questions'
import styles from './Game.module.scss'

interface IGame {
	test: string
}

export function Game({ test }: IGame) {
	const questionList =
		test === 'diablo'
			? questions.diablo
			: test === 'starcraft'
			? questions.starcraft
			: questions.warcraft

	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const nav = useNavigate()

	const percentage = Math.round((step / questionList.length) * 100)

	const choiceVariant = (index: number) => {
		if (index === questionList[step].correct) {
			setCorrect(prevCorrect => prevCorrect + 1)
		}
		if (step === questionList.length - 1) {
			nav(`/result?correct=${correct}&length=${questionList.length}`)
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
			<Pic name={questionList[step].pic} />
			<h3>{questionList[step].question}</h3>
			<ul>
				{questionList[step].variants.map((variant, index) => (
					<li onClick={() => choiceVariant(index)} key={variant}>
						{variant}
					</li>
				))}
			</ul>
		</section>
	)
}
