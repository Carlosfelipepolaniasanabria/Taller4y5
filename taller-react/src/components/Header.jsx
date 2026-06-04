import { motion } from "framer-motion";
import { Group, Button } from "@mantine/core";
import { Menu } from "lucide-react";
import styles from "../style/Header.module.css";

export function Header() {
  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>React Dashboard</h2>

      <Group>
        <Menu />
        <Button color="blue">Iniciar Sesión</Button>
      </Group>
    </motion.header>
  );
}