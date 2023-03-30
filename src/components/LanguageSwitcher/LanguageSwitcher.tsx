import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	function handleLanguageChange(event) {
		i18n.changeLanguage(event.target.value);
		// hard reload page to change language
		// TODO
		// persist language in local storage
		// redux-persist
		// window.location.reload();
	}

	return (
		<div>
			<label>
				<input
					type='radio'
					name='language'
					value='pl'
					onChange={handleLanguageChange}
					checked={i18n.language === 'pl'}
				/>
				Polish
			</label>
			<label>
				<input
					type='radio'
					name='language'
					value='en'
					onChange={handleLanguageChange}
					checked={i18n.language === 'en'}
				/>
				English
			</label>
		</div>
	);
};
