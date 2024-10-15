import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { Game } from './pages/Game/Game'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { Result } from './pages/Result/Result'
import { TestSelector } from './pages/TestSelector/TestSelector'

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
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</div>
	)
}

export default App
