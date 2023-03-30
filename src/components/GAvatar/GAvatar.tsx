import { Avatar } from '@mui/material';
import { FC } from 'react';

export const GAvatar: FC<{ name: string }> = ({ name }) => {
	const saturation = 30;
	const minLightness = 40;
	const maxLightness = 70;
	let lightness = 0;
	let hash = 0;
	let lettersColor = '';
	let backgroundColor = '';
	let initials = '';
	if (name) {
		for (let i = 0; i < name.length; i += 1) {
			hash = initials.charCodeAt(i) + ((hash << 5) - hash);
		}
		hash &= hash;
		const hue = hash % 360;

		lightness = name.length ^ 2 % maxLightness;
		if (lightness < minLightness) {
			lightness = maxLightness - lightness;
		}

		let splittedName = name.split(' ');
		splittedName = splittedName.slice(0, 3);
		let nameLetters = '';
		for (let i = 0; i < splittedName.length; i += 1) {
			if (splittedName[i][0]) {
				nameLetters += splittedName[i][0].toUpperCase();
			}
		}

		lettersColor = '#fff';
		backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		initials = nameLetters;
	}

	const style = { backgroundColor, color: lettersColor };
	return <Avatar style={style}>{initials}</Avatar>;
};
