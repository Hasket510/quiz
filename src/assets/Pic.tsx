import dPic1 from './diablo_q1.jpg'
import dPic10 from './diablo_q10.jpg'
import dPic2 from './diablo_q2.jpg'
import dPic3 from './diablo_q3.jpg'
import dPic4 from './diablo_q4.jpg'
import dPic5 from './diablo_q5.jpg'
import dPic6 from './diablo_q6.jpg'
import dPic7 from './diablo_q7.jpg'
import dPic8 from './diablo_q8.jpg'
import dPic9 from './diablo_q9.jpg'
import dPicResult from './diablo_result.jpg'
import wPic1 from './warcraft_q1.jpg'
import wPic10 from './warcraft_q10.jpg'
import wPic2 from './warcraft_q2.jpg'
import wPic3 from './warcraft_q3.jpg'
import wPic4 from './warcraft_q4.jpg'
import wPic5 from './warcraft_q5.jpg'
import wPic6 from './warcraft_q6.jpg'
import wPic7 from './warcraft_q7.jpg'
import wPic8 from './warcraft_q8.jpg'
import wPic9 from './warcraft_q9.jpg'
import wPicResult from './warcraft_result.jpg'

const pics = {
	warCraftQuestion1: wPic1,
	warCraftQuestion2: wPic2,
	warCraftQuestion3: wPic3,
	warCraftQuestion4: wPic4,
	warCraftQuestion5: wPic5,
	warCraftQuestion6: wPic6,
	warCraftQuestion7: wPic7,
	warCraftQuestion8: wPic8,
	warCraftQuestion9: wPic9,
	warCraftQuestion10: wPic10,
	warCraftResult: wPicResult,
	diabloQuestion1: dPic1,
	diabloQuestion2: dPic2,
	diabloQuestion3: dPic3,
	diabloQuestion4: dPic4,
	diabloQuestion5: dPic5,
	diabloQuestion6: dPic6,
	diabloQuestion7: dPic7,
	diabloQuestion8: dPic8,
	diabloQuestion9: dPic9,
	diabloQuestion10: dPic10,
	diabloResult: dPicResult,
}

export enum EPics {
	warCraftQuestion1 = 'warCraftQuestion1',
	warCraftQuestion2 = 'warCraftQuestion2',
	warCraftQuestion3 = 'warCraftQuestion3',
	warCraftQuestion4 = 'warCraftQuestion4',
	warCraftQuestion5 = 'warCraftQuestion5',
	warCraftQuestion6 = 'warCraftQuestion6',
	warCraftQuestion7 = 'warCraftQuestion7',
	warCraftQuestion8 = 'warCraftQuestion8',
	warCraftQuestion9 = 'warCraftQuestion9',
	warCraftQuestion10 = 'warCraftQuestion10',
	warCraftResult = 'warCraftResult',
	diabloQuestion1 = 'diabloQuestion1',
	diabloQuestion2 = 'diabloQuestion2',
	diabloQuestion3 = 'diabloQuestion3',
	diabloQuestion4 = 'diabloQuestion4',
	diabloQuestion5 = 'diabloQuestion5',
	diabloQuestion6 = 'diabloQuestion6',
	diabloQuestion7 = 'diabloQuestion7',
	diabloQuestion8 = 'diabloQuestion8',
	diabloQuestion9 = 'diabloQuestion9',
	diabloQuestion10 = 'diabloQuestion10',
	diabloResult = 'diabloResult',
}

interface IPicsProps {
	name: EPics
}

export function Pic({ name }: IPicsProps) {
	return <img src={pics[name]} alt={name} />
}
