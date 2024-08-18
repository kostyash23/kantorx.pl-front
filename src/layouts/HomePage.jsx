import ArticleHome from '../components/Home/ArticleHome';
import Table from '../components/Table';
import Main from '../components/Main';
import { useTranslation } from 'react-i18next';

import { exchange_rates } from '../data';

const HomePage = () => {
	const { t } = useTranslation();



	return (
		<>
			<Main />
			<Table
				data={exchange_rates}
				title={t('table_1-title')}
				ft={t('table_1-ft')}
				st={t('table_1-st')}
				tt={t('table_1-tt')}
				id=''
			/>
			
			
			<ArticleHome />
		</>
	);
};

export default HomePage;
