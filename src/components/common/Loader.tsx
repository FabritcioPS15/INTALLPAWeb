import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinner-container">
        <div className="spinner" />
        <p className="loading-text">Cargando...</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-light);
  z-index: 9999;

  .spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid #e0e0e0;
    border-top: 4px solid var(--primary-green, #3E5F1E);
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
  }

  .loading-text {
    color: var(--primary-green, #3E5F1E);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;

export default Loader;
