import { AllPage, Container, ContainerFormLogin, LoadingBar } from "./styled";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [LoginForm, setLoginForm] = useState({
    login: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      // handle login logic here
    }, 2000);
  };

  // Exibe animação de loading ao carregar a página
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // tempo da animação ao carregar

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <AllPage>
      {loading && <LoadingBar />}
      <Container>
        <ContainerFormLogin>
          <Form
            className="w-75 d-flex flex-column align-items-center justify-content-center"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Form.Floating className="mb-3 w-100">
              <Form.Control
                id="floatingLogin"
                type="text"
                placeholder="Digite seu login"
                value={LoginForm.login}
                onChange={(e) =>
                  setLoginForm({ ...LoginForm, login: e.target.value })
                }
                style={{
                  border: "none",
                  borderRadius: "0",
                }}
                autoComplete="off"
              />
              <label htmlFor="floatingLogin">Login</label>
            </Form.Floating>
            <Form.Floating className="mb-3 w-100">
              <Form.Control
                id="floatingPassword"
                type="password"
                placeholder="Digite sua senha"
                value={LoginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...LoginForm, password: e.target.value })
                }
                style={{
                  border: "none",
                  borderRadius: "0",
                }}
                autoComplete="off"
              />
              <label htmlFor="floatingPassword">Senha</label>
            </Form.Floating>
            <Button
              type="submit"
              variant="secondary"
              style={{
                width: "95%",
                backgroundColor: "#6c757d",
              }}
              disabled={loading}
            >
              Entrar
            </Button>
          </Form>
          <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
            <a
              href="/forgot-password"
              style={{ color: "#0d6efd", textDecoration: "underline" }}
            >
              Esqueceu a senha?
            </a>
          </p>
        </ContainerFormLogin>
      </Container>
    </AllPage>
  );
};

export default Login;
