import Navber from '../components/Navber/Navber';

export const metadata = {
    title: 'Home|Next Hero',
    description: 'Next Hero',
}

const layout = ({ children }) => {
    return (
        <div>
            <Navber />
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default layout;