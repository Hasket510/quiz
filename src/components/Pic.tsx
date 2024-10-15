import dPic1 from '../assets/diablo_q1.jpg'
import dPic10 from '../assets/diablo_q10.jpg'
import dPic2 from '../assets/diablo_q2.jpg'
import dPic3 from '../assets/diablo_q3.jpg'
import dPic4 from '../assets/diablo_q4.jpg'
import dPic5 from '../assets/diablo_q5.jpg'
import dPic6 from '../assets/diablo_q6.jpg'
import dPic7 from '../assets/diablo_q7.jpg'
import dPic8 from '../assets/diablo_q8.jpg'
import dPic9 from '../assets/diablo_q9.jpg'
import dPicResult from '../assets/diablo_result.jpg'
import sPic1 from '../assets/starcraft_q1.jpg'
import sPic10 from '../assets/starcraft_q10.jpg'
import sPic2 from '../assets/starcraft_q2.jpg'
import sPic3 from '../assets/starcraft_q3.jpg'
import sPic4 from '../assets/starcraft_q4.jpg'
import sPic5 from '../assets/starcraft_q5.jpg'
import sPic6 from '../assets/starcraft_q6.jpg'
import sPic7 from '../assets/starcraft_q7.jpg'
import sPic8 from '../assets/starcraft_q8.jpg'
import sPic9 from '../assets/starcraft_q9.jpg'
import sPicResult from '../assets/starcraft_result.jpg'
import wPic1 from '../assets/warcraft_q1.jpg'
import wPic10 from '../assets/warcraft_q10.jpg'
import wPic2 from '../assets/warcraft_q2.jpg'
import wPic3 from '../assets/warcraft_q3.jpg'
import wPic4 from '../assets/warcraft_q4.jpg'
import wPic5 from '../assets/warcraft_q5.jpg'
import wPic6 from '../assets/warcraft_q6.jpg'
import wPic7 from '../assets/warcraft_q7.jpg'
import wPic8 from '../assets/warcraft_q8.jpg'
import wPic9 from '../assets/warcraft_q9.jpg'
import wPicResult from '../assets/warcraft_result.jpg'

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
	starCraftQuestion1: sPic1,
	starCraftQuestion2: sPic2,
	starCraftQuestion3: sPic3,
	starCraftQuestion4: sPic4,
	starCraftQuestion5: sPic5,
	starCraftQuestion6: sPic6,
	starCraftQuestion7: sPic7,
	starCraftQuestion8: sPic8,
	starCraftQuestion9: sPic9,
	starCraftQuestion10: sPic10,
	starCraftResult: sPicResult,
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
	starCraftQuestion1 = 'starCraftQuestion1',
	starCraftQuestion2 = 'starCraftQuestion2',
	starCraftQuestion3 = 'starCraftQuestion3',
	starCraftQuestion4 = 'starCraftQuestion4',
	starCraftQuestion5 = 'starCraftQuestion5',
	starCraftQuestion6 = 'starCraftQuestion6',
	starCraftQuestion7 = 'starCraftQuestion7',
	starCraftQuestion8 = 'starCraftQuestion8',
	starCraftQuestion9 = 'starCraftQuestion9',
	starCraftQuestion10 = 'starCraftQuestion10',
	starCraftResult = 'starCraftResult',
}

interface IPicsProps {
	name: EPics
}

export function Pic({ name }: IPicsProps) {
	return <img src={pics[name]} alt={name} />
}
