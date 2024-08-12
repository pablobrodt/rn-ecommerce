import { type PropsWithChildren, Component } from 'react';
import { View } from 'react-native';

import { SafeArea } from '../safe-area/safe-area.component';
import { Text } from '../text/text.component';
import { styles } from './error-boundary.style';

type ErrorBoundaryState = { hasError: boolean };

type ErrorBoundaryProps = PropsWithChildren;

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <SafeArea>
          <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>
              Houve um erro inesperado! Tente reabrir o App!
            </Text>
          </View>
        </SafeArea>
      );
    }

    return this.props.children;
  }
}
