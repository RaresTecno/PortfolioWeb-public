/* src/components/NavBar.jsx */
'use client';
import { useContext, useEffect, useState, useRef } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import FlagSwitcher from './FlagSwitcher';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  const { t } = useContext(LanguageContext);
  const [visible, setVisible] = useState(true);  
  const [open, setOpen]   = useState(false);      
  const prevScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      if (curr > prevScroll.current && curr > 64) setVisible(false);
      if (curr < prevScroll.current) setVisible(true);
      prevScroll.current = curr;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const links = [
    { href: '#about',     label: t('nav.about')     },
    { href: '#projects',  label: t('nav.projects')  },
    { href: '#experience',label: t('nav.experience')},
    { href: '#contact',   label: t('nav.contact')   },
  ];

  return (
    <nav className={`${styles.nav} ${!visible ? styles.hidden : ''}`}>
      <div className={styles.inside}>
        <a href="/" className={styles.brand}>Rares Andrei Ana</a>

        <button
          className={`${styles.toggle}${open ? ` ${styles.open}` : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <ul className={styles.menu}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.flags}>
          <FlagSwitcher />
        </div>
      </div>

      <aside className={`${styles.mobile}${open ? ` ${styles.mobileOpen}` : ''}`}>
        <ul className={styles.mobileList}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileFlags}>
          <FlagSwitcher />
        </div>
      </aside>
    </nav>
  );
}
