import { useState } from 'react'
import styles from './App.module.scss'
import { Game } from './components/Game/Game'
import { Result } from './components/Result/Result'
import { questions } from './questions'

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]
	const clickOnVariant = (index: number) => {
		if (index === question.correct) {
			setCorrect(correct + 1)
		}
		setStep(step + 1)
	}
	return (
		<div className={styles.app}>
			{step !== questions.length ? (
				<Game
					step={step}
					title={question.title}
					variants={question.variants}
					clickOnVariant={clickOnVariant}
				/>
			) : (
				<Result correct={correct} length={questions.length} />
			)}
		</div>
	)
}

export default App
