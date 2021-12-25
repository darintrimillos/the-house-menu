import MenuItem from '../components/MenuItem/MenuItem';
import menu, { menuTags } from '../data/menu';
// import recipes from '../data/recipes/recipes';
import Head from 'next/head';
import styles from '../styles/Menu.module.scss';

const Menu = ({ menu }) => {
    return (
        <div className={styles.menuContainer}>
            <Head>
                <title>The House Menu</title>
                <meta name="description" content="Generated by create next app" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Expletus+Sans&family=Vollkorn&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className={styles.title}>THE HOUSE MENU</h1>

            {/* Filters should go here */}

            <section className={styles.menuItemsContainer}>            
                {menu.map((item, i) => <MenuItem key={`menuItem-${i}`} {...item} />)}
            </section>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: { menu }
    }
}

export default Menu;
