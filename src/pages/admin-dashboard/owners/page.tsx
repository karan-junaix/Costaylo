
import { useState } from 'react';
import AdminDashboardLayout from '../components/AdminDashboardLayout';

const AdminOwnersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOwner, setSelectedOwner] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const owners = [
    { id: 1, name: 'Rajesh Sharma', email: 'rajesh.sharma@email.com', phone: '+91 98765 43220', status: 'Active', properties: 3, revenue: '₹5.16L', joined: '2023-12-01', verified: true },
    { id: 2, name: 'Sunita Reddy', email: 'sunita.reddy@email.com', phone: '+91 98765 43221', status: 'Active', properties: 5, revenue: '₹8.45L', joined: '2023-11-15', verified: true },
    { id: 3, name: 'Arun Kumar', email: 'arun.kumar@email.com', phone: '+91 98765 43222', status: 'Pending', properties: 1, revenue: '₹1.20L', joined: '2024-02-10', verified: false },
    { id: 4, name: 'Meena Patel', email: 'meena.patel@email.com', phone: '+91 98765 43223', status: 'Active', properties: 2, revenue: '₹3.80L', joined: '2023-10-20', verified: true },
    { id: 5, name: 'Karthik Iyer', email: 'karthik.iyer@email.com', phone: '+91 98765 43224', status: 'Inactive', properties: 1, revenue: '₹0.95L', joined: '2024-01-05', verified: true },
    { id: 6, name: 'Lakshmi Nair', email: 'lakshmi.nair@email.com', phone: '+91 98765 43225', status: 'Active', properties: 4, revenue: '₹6.75L', joined: '2023-09-10', verified: true }
  ];

  const filteredOwners = owners.filter(owner => {
    const matchesSearch = owner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         owner.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || owner.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const handleEditOwner = (owner: any) => {
    setSelectedOwner(owner);
    setIsEditModalOpen(true);
  };

  const handleSaveOwner = () => {
    console.log('Save owner:', selectedOwner);
    setIsEditModalOpen(false);
  };

  const handleDeleteOwner = (ownerId: number) => {
    if (confirm('Are you sure you want to delete this owner? All their properties will also be removed.')) {
      console.log('Delete owner:', ownerId);
    }
  };

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PG Owner Management</h1>
          <p className="text-gray-600">Manage all property owners</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search owners..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'all'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({owners.length})
              </button>
              <button
                onClick={() => setFilterStatus('active')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'active'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Active ({owners.filter(o => o.status === 'Active').length})
              </button>
              <button
                onClick={() => setFilterStatus('pending')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'pending'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending ({owners.filter(o => o.status === 'Pending').length})
              </button>
            </div>
          </div>
        </div>

        {/* Owners Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Owner</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Properties</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOwners.map((owner) => (
                  <tr key={owner.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">{owner.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-gray-900">{owner.name}</p>
                            {owner.verified && (
                              <i className="ri-verified-badge-fill text-blue-600 text-sm" title="Verified"></i>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">{owner.email}</p>
                      <p className="text-sm text-gray-500">{owner.phone}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        owner.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : owner.status === 'Pending'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {owner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">{owner.properties}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-[#c8155f]">{owner.revenue}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">{owner.joined}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditOwner(owner)}
                          className="w-8 h-8 flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <i className="ri-edit-line text-sm"></i>
                        </button>
                        <button
                          onClick={() => handleDeleteOwner(owner.id)}
                          className="w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <i className="ri-delete-bin-line text-sm"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Modal */}
        {isEditModalOpen && selectedOwner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Edit Owner</h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-gray-500"></i>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={selectedOwner.name}
                    onChange={(e) => setSelectedOwner({...selectedOwner, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={selectedOwner.email}
                    onChange={(e) => setSelectedOwner({...selectedOwner, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={selectedOwner.phone}
                    onChange={(e) => setSelectedOwner({...selectedOwner, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={selectedOwner.status}
                    onChange={(e) => setSelectedOwner({...selectedOwner, status: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm cursor-pointer"
                  >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="verified"
                    checked={selectedOwner.verified}
                    onChange={(e) => setSelectedOwner({...selectedOwner, verified: e.target.checked})}
                    className="w-4 h-4 text-[#c8155f] border-gray-300 rounded focus:ring-[#c8155f] cursor-pointer"
                  />
                  <label htmlFor="verified" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Verified Owner
                  </label>
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-6">
                <button
                  onClick={handleSaveOwner}
                  className="flex-1 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminOwnersPage;
