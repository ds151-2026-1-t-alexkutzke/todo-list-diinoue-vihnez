import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import tarefasData from './src/components/Tarefa';
import TextScreen from './src/screens/TextScreen';

export var listaTarefas:typeof tarefasData[];

export default function App() {
  const [tarefas, setTarefas] = useState ()

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextScreen>

        </TextScreen>
        <StatusBar style="auto" />
      </SafeAreaView >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
