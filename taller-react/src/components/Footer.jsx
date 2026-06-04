import { Text, Group } from '@mantine/core';
import { Copyright } from 'lucide-react';
import style from '../style/Footer.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <Group justify="center" p="sm">
        <Group gap={5}>
          <Copyright size={14} />
          <Text size="sm">2026 - Todos los derechos reservados</Text>
        </Group>
      </Group>
    </footer>
  );
}
