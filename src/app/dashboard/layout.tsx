// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar, TopMenu } from '@/components';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
        
      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto -mt-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen bg-[#722F37] ">

        <TopMenu />
      
        {/* TODO: Contenido en el Layout.tsx */}
        <div className=" px-6 pt-6">

        { children }
        {/* TODO: Fin del contenido en el Layout.tsx */}
        </div>
      </div>
    </>
  );
}

//mb-6 -mt-6