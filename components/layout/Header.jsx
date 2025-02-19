import Image from 'next/image';

import svg from '../../public/icons/sample.svg';

import style from '../../styles/components/layout/Header.module.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className={style.container}>
            <div className={style['subcontainer-left']}>
                <Image src={svg} alt="site main logo"></Image>
                <p> Growth Up ( coding Platform ) </p>{' '}
            </div>
            <div className={style['subcontainer-right']}>
                <Image src={svg} alt="site main logo"></Image>
                <Image src={svg} alt="site main logo"></Image>
                <p> Robin (userName) </p>{' '}
            </div>
        </div>
    );
}

export default MyApp;
