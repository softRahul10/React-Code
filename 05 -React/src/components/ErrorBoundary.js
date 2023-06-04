import { Component } from 'react';

export default class ErrorBoundary extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  hasError: false
            }
      }

      // Error Handling Method
      componentDidCatch(error,errorInfo) {
            this.setState({hasError: true});
      }

      render() {
            if(this.state.hasError) { 
                  return <h1> Error </h1>;
            }
            return  this.props.children;
      }
}