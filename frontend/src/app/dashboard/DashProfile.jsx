import React from "react";
import { Card, Button, Text, Image, Group, Badge, Avatar } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
//import { useMediaQuery } from "@mantine/hooks";

function DashProfile() {
  //const isMobile = useMediaQuery("(max-width: 768px)");
  //const theme = useMantineTheme();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="J.J"
        />
        <Avatar
          component="a"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6RB0CdvwNlcpkEc8Y_pKrg5SCDGXeOi_nVarkz1Az&s"
          alt="it's me"
          size={"lg"}
          radius={200}
          h={140}
          w={140}
          sx={{ marginTop: -50, left: "30%" }}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Juma Josephat</Text>
        <Badge color="pink" variant="light">
          DOS
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Course:
      </Text>
      <Text size="sm" color="dimmed">
        Current Year
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        leftIcon={<IconEdit />}
      >
        Edit Profile
      </Button>
    </Card>
  );
}

export default DashProfile;
