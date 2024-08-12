import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from '@common/view/router/root-navigator';
import { ErrorBoundary } from '@common/view/components/error-boundary/error-boundary.component';

function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView>
        <RootNavigator />
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

export default App;
