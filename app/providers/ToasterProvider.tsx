'use client';

import { Toaster } from 'react-hot-toast';
// using a provider because Toaster uses useEffect so it only works in a client component
// and needs a parent to marked with 'use client'
const ToasterProvider: React.FC = () => {
  return <Toaster />;
};

export default ToasterProvider;
