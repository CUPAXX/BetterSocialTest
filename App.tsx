import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FeedScreen from './screens/FeedScreen';
import PostDetailScreen from './screens/PostDetailScreen';

import VoteContextprovider from './contexts/VoteContext';
import CommentContextProvider from './contexts/CommentContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <VoteContextprovider>
      <CommentContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="feed">
            <Stack.Screen
              name="feed"
              component={FeedScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="post-detail"
              component={PostDetailScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CommentContextProvider>
    </VoteContextprovider>
  );
}

export default App;
