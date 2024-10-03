import { Link, useSearchParams } from 'react-router-dom'
import { EPics, Pic } from '../../assets/Pic'
import styles from './Result.module.scss'

interface IResult {
	select: string
}
export function Result({ select }: IResult) {
	const resultPic =
		select === 'diablo'
			? EPics.diabloResult
			: select === 'starcraft'
			? EPics.starCraftResult
			: EPics.warCraftResult

	const [searchParams] = useSearchParams()

	return (
		<section className={styles.result}>
			<Pic name={resultPic} />
			<p>
				Правильных ответов: {searchParams.get('correct')} из
				{searchParams.get('length')}
			</p>
			<Link to='/' className={styles.link}>
				Попробовать снова
			</Link>
		</section>
	)
}
