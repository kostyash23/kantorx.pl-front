import AdminComponent from '../components/admin/AdminComponent'
import NavBar from '../components/NavBar'
import Page1Article from '../components/Page1Article'
import { useTranslation } from 'react-i18next'

const Admin = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavBar title={t('header_nav-3-1')} />
      <AdminComponent />
    </>
  )
}

export default Admin
