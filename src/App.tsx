import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { Game } from './components/Game/Game'
import { Result } from './components/Result/Result'
import { TestSelector } from './components/TestSelector/TestSelector'

function App() {
	const [selectedTest, setSelectedTest] = useState('')

	return (
		<div className={styles.app}>
			<Routes>
				<Route
					path='/'
					element={
						<TestSelector
							onSelect={test => {
								setSelectedTest(test)
							}}
						/>
					}
				/>
				<Route
					path={`/${selectedTest}`}
					element={<Game test={selectedTest} />}
				/>
				<Route path='/result' element={<Result select={selectedTest} />} />
			</Routes>
		</div>
	)
}

export default App
