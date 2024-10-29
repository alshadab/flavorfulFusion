import React from 'react'
import GlobalHeaders from '../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders'
import AdminAllVendorsTable from '../../../components/AdminDashCompos/AdminAllVendorsTable/AdminAllVendorsTable'

function AdminAllVendorsPage() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 bg-white">
    <div className="w-full bg-white rounded px-10 pt-10">
      <GlobalHeaders title={'All Users/Customers'} searchFilter={'User Full Name'}/>
    </div>

    <div className="bg-white w-full pb-10 rounded">
      <AdminAllVendorsTable/>
    </div>
  </div>
  )
}

export default AdminAllVendorsPage