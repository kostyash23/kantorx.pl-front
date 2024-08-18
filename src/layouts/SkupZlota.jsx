import NavBar from '../components/NavBar';
import Table from '../components/Table';
import { useTranslation } from 'react-i18next';

const SkupZlota = () => {
	const { t } = useTranslation();

	const metals = [
		{
			title: t('metal_titles.0'),
			purchase: '50',
			sell: '100',
		},
		{
			title: t('metal_titles.1'),
			purchase: '80',
			sell: '000',
		},
		{
			title: t('metal_titles.2'),
			purchase: '80',
			sell: '000',
		},
		{
			title: t('metal_titles.3'),
			purchase: '80',
			sell: '000',
		},
		{
			title: t('metal_titles.4'),
			purchase: '80',
			sell: '000',
		},
		{
			title: t('metal_titles.5'),
			purchase: '80',
			sell: '000',
		},
		{
			title: t('metal_titles.6'),
			purchase: '80',
			sell: '000',
		},
		{
			title: t('metal_titles.7'),
			purchase: '80',
			sell: '000',
		},
	];
	return (
		<>
			<NavBar title={t('header_nav-1')} />
			<Table
				data={metals}
				title={t('table_2-title')}
				ft={t('table_2-ft')}
				st={t('table_2-st')}
				tt={t('table_2-tt')}
			/>
		</>
	);
};

export default SkupZlota;