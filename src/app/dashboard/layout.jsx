import AsideNav from "./dashboardNav/AsideNav";

export const metadata = {
    title: 'Dashboard|Next Hero',
    description: 'Next Hero',
  }

const dashboardLayout = ({ children }) => {
    return (
        <div className="flex container mx-auto">
            <AsideNav></AsideNav>
            {children}
        </div>
    );
};

export default dashboardLayout;