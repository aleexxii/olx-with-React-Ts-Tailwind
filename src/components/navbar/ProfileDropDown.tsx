import { ShoppingCart, Package, HelpCircle, Settings, Download, LogOut, Heart } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
type ProfileDropdownProps = {
    isOpen?: boolean;
  }
const ProfileDropdown = ({isOpen}:ProfileDropdownProps): JSX.Element => {
    const {user} = useAuth()
    const profileURL = user?.photoURL
    const displayName = user?.displayName
  const menuItems = [
    { icon: Heart, text: 'My ADS', href: '#' },
    { icon: ShoppingCart, text: 'Buy Business Packages', href: '#' },
    { icon: Package, text: 'Bought Packages & Billing', href: '#' },
    { icon: HelpCircle, text: 'Help', href: '#' },
    { icon: Settings, text: 'Settings', href: '#' },
    { icon: Download, text: 'Install OLX Lite app', href: '#' },
    { icon: LogOut, text: 'Logout', href: '#' },
  ];

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={profileURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg">{displayName}</h3>
                
              </div>
            </div>

            <div className='border-2 mt-4 p-2 rounded text-white border-black bg-slate-800 hover:bg-transparent hover:text-slate-900'>
                <button className="text-xl font-roboto font-bold ">
                  View and edit profile
                </button>
                </div>
            
            <div className="mt-4">
              <div className="text-sm text-gray-600">2 steps left</div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="w-1/3 h-full bg-yellow-400 rounded-full"></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                We are built on trust. Help one another to get to know each other better.
              </p>
            </div>
          </div>

          <nav className="py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 hover:bg-teal-300 transition-colors"
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">{item.text}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;