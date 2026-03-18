import { useState } from 'react';
import { TextInput, View, Text, StyleSheet, FlatList } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { tarefasData } from '../components/Tarefa';
import Tarefa from '../components/Tarefa';

var text: string;
export const tarefasLista: Array<tarefasData> = []

const TextScreen = () => {

const [tarefas, setTarefas] = useState(tarefasLista)

const addTarefa = () => {
    const newTarefa: tarefasData = {
        status: false,
        text: text,
        id: Date.now().toString()
    }
    setTarefas(prevTarefas => [...prevTarefas, newTarefa])
}

return (
<View>
    <View>
        <TextInput
            placeholder='Digite aqui'
            onChangeText={(t) => {text = t}}
            autoCorrect={false}
            value={text}
        />
<FontAwesome6 name="add" size={24} color="black" onPress={addTarefa} />
    </View>

    <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <Tarefa text={item.text} status={item.status} id={item.id}/>
        }
    />

</View>
);
};

export default TextScreen