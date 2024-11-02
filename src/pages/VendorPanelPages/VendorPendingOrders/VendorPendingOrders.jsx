import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

function VendorPendingOrders() {
  const { user } = useContext(AuthContext);

  return <>{user && user.userType === 101 && <div>VendorPendingOrders</div>}</>;
}

export default VendorPendingOrders;
