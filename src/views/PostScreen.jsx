import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Post from '../components/Post';

export default function PostScreen() {
  const { post } = useRoute().params;

  return (
    <View style={{ flex: 1 }}>
      <Post post={post} />
    </View>
  );
}