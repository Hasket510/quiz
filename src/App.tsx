import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { Game } from './pages/Game/Game'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { Result } from './pages/Result/Result'
import { TestSelector } from './pages/TestSelector/TestSelector'

function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path='/' element={<TestSelector />} />
				<Route path='/:test' element={<Game />} />
				<Route path='/:test/result' element={<Result />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</div>
	)
}

export default App
