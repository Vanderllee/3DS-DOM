import { Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Reserva de Laboratório</Text>
      <Button title="Reservar" onPress={() => alert('Reserva feita')} />
    </View>
  );
}
