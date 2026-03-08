import { Link, useSearchParams } from 'react-router-dom'
import { Pics, Pic } from '../../components/Pic'
import styles from './Result.module.scss'

interface IResult {
	select: string
}
export function Result({ select }: IResult) {
	const resultPic = (select: string) => {
		switch (select) {
			case 'diablo':
				return Pics.diabloResult
			case 'starcraft':
				return Pics.starCraftResult
			default:
				return Pics.warCraftResult
		}
	}

	const [searchParams] = useSearchParams()

	return (
		<section className={styles.result}>
			<Pic name={resultPic(select)} />
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
