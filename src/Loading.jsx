import { View, ActivityIndicator } from "react-native";

const Loading = ({}) => {
  return (
    <View>
      <ActivityIndicator size="large" color="pink" />
    </View>
  );
};

export default Loading;