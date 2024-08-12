import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from '@common/view/route/root-navigator';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <RootNavigator />
    </GestureHandlerRootView>
  );
}

export default App;
