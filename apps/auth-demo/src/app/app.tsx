// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { Auth } from '@auth-ws/adapter-keycloak';

export function App() {
  return (
    <>
      <Auth/>
    </>
  );
}

export default App;
