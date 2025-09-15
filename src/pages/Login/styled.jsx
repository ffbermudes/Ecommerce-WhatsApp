import styled from "styled-components";
export const AllPage = styled.div`
  width: 100%;
  background-color: #111;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFormLogin = styled.div`
  min-width: 300px;
  width: 90%;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.4);
  background: linear-gradient(135deg, #b0b0b0 0%, #e0e0e0 100%);
  transform: translateY(-120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, #6c757d 0%, #343a40 100%);
  z-index: 9999;
  animation: loadingBar 2s linear;

  @keyframes loadingBar {
    0% {
      left: -100%;
      width: 100%;
    }
    100% {
      left: 0;
      width: 100%;
    }
  }
`;
