import { useState, useEffect } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Dialog,
  LoadingOverlay,
} from "@mantine/core";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { Link } from "react-router-dom";
import usePost from "../../hooks/usePost";
import { IconX, IconXd } from "@tabler/icons-react";
import useNaviagtionProgress from "../../hooks/useNaviagtionProgress";
export default function AuthenticationTitle() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { message, isSending, clearErr, submitData } = usePost();
  useEffect(() => {
    nprogress.complete();
  });
  return (
    <>
      <NavigationProgress autoReset={true} />
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <LoadingOverlay visible={isSending} overlayBlur={2} />

        <Paper withBorder shadow="lg" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            onChange={(value) => setEmail(value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            onChange={(value) => setPassword(value)}
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component={Link} to={"/reset-password"} size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button
            fullWidth
            mt="xl"
            onClick={() =>
              submitData("https://smis.up.railway.app/api/v1/login", {
                email: email,
                password: password,
              })
            }
          >
            Sign in
          </Button>
        </Paper>

        <Dialog
          opened={message}
          onClose={clearErr}
          withCloseButton
          size="lg"
          radius="md"
          position={{ top: 20, left: 20 }}
          shadow="xl"
          bg={"dark"}
          display={"flex"}
        >
          <IconX size="1.1rem" color="white" />
          <Text color="white">{message}</Text>
        </Dialog>
      </Container>
    </>
  );
}
