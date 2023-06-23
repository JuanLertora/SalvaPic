import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main/Main';

export default function App() {
  return (
<>
  <StatusBar style="ligth" />
  <NativeRouter>
    <Main/>
  </NativeRouter>
</>
  );
}
