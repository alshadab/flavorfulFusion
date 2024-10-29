import React from 'react'
import GlobalHeaders from '../../../components/GlobalComponents/GlobalHeaders/GlobalHeaders'
import AdminAllUsersTable from '../../../components/AdminDashCompos/AdminAllUsersTable/AdminAllUsersTable'

function AdminAllUsersPage() {
  return (
    <div className="w-full h-full rounded-lg shadow-md px-10 bg-white">
    <div className="w-full bg-white rounded px-10 pt-10">
      <GlobalHeaders title={'All Users/Customers'} searchFilter={'User Full Name'}/>
    </div>

    <div className="bg-white w-full pb-10 rounded">
      <AdminAllUsersTable/>
    </div>
  </div>
  )
}

export default AdminAllUsersPage