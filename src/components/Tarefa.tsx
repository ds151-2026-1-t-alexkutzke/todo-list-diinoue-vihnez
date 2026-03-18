import { useState } from 'react';
import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export interface tarefasData {
    status: boolean,
    text: string,
    id: string
}

const Tarefa = ({text, status}: tarefasData) => {
    const [done, setDone] = useState(false)

    const teste = done ? "check-circle" : "check-circle-o";

    return (
        <View>
            <FontAwesome name={teste} size={24} color="black" onPress={() => {
        setDone(!done);
      }} />

            <Text>
                {text}
            </Text>
        </View>
    );

};

export default Tarefa