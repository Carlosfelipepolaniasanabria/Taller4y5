import { Card, Button, Badge, Progress, Group, Text } from "@mantine/core";
import { motion } from "framer-motion";
import {
  Users,
  BarChart3,
  Activity,
  ShieldCheck
} from "lucide-react";
import { FaReact } from "react-icons/fa";
import style from "../style/Content.module.css";

export function Content() {
  const cards = [
    {
      title: "Usuarios",
      value: "1.250",
      icon: <Users size={40} />,
      progress: 80,
    },
    {
      title: "Rendimiento",
      value: "95%",
      icon: <BarChart3 size={40} />,
      progress: 95,
    },
    {
      title: "Actividad",
      value: "540",
      icon: <Activity size={40} />,
      progress: 70,
    },
    {
      title: "Seguridad",
      value: "100%",
      icon: <ShieldCheck size={40} />,
      progress: 100,
    },
  ];

  return (
    <main className={style.content}>
      <h1>Dashboard React</h1>

      <Badge size="xl" color="blue">
        Mantine UI + Framer Motion + Lucide + React Icons
      </Badge>

      <FaReact
        size={100}
        style={{
          margin: "20px 0",
        }}
      />

      <div className={style.cards}>
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Card shadow="lg" padding="lg" radius="md">
              <Group justify="space-between">
                {card.icon}
                <Text fw={700}>{card.value}</Text>
              </Group>

              <Text size="lg" mt="md">
                {card.title}
              </Text>

              <Progress
                value={card.progress}
                mt="md"
                size="lg"
                animated
              />

              <Button fullWidth mt="md">
                Ver detalles
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}