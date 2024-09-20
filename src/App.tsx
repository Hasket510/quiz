import { useState } from 'react'
import styles from './App.module.scss'
import { Game } from './components/Game/Game'
import { Result } from './components/Result/Result'
import { TestSelector } from './components/TestSelector/TestSelector'
import { questions } from './questions'

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const [selectedTest, setSelectedTest] = useState('warcraft')
	const [showTestSelector, setShowTestSelector] = useState(true)
	const question =
		selectedTest === 'diablo' ? questions.diablo : questions.warcraft
	const clickOnVariant = (index: number) => {
		if (index === question[step].correct) {
			setCorrect(correct + 1)
		}
		setStep(step + 1)
	}

	return (
		<div className={styles.app}>
			{showTestSelector && (
				<TestSelector
					onSelect={test => {
						setSelectedTest(test)
						setShowTestSelector(false)
					}}
				/>
			)}
			{!showTestSelector &&
				(step !== question.length ? (
					<Game
						step={step}
						quest={question[step].question}
						variants={question[step].variants}
						clickOnVariant={clickOnVariant}
						pic={question[step].pic}
						length={question.length}
					/>
				) : (
					<Result
						correct={correct}
						length={question.length}
						select={selectedTest}
					/>
				))}
		</div>
	)
}

export default App
