import { motion } from 'framer-motion';
import styles from '../style/Header.module.css';

export function Header() {
  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Header Content
    </motion.header>
  );
}
