import LeftNav from './layout/LeftNav';
import Header from './layout/Header';
import Profile from './layout/Profile';
import style from '../styles/components/Layout.module.css';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <Profile />
            <LeftNav />
            <main className={style.container}>{children}</main>
        </div>
    );
}

export default Layout;
