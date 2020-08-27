import crashlytics from '@react-native-firebase/crashlytics';
import {setJSExceptionHandler} from 'react-native-exception-handler';

const sendToCrashlytics = (error, isFatal) => {
  crashlytics().recordError(error);
  crashlytics().sendUnsentReports();
};

const errorHandler = (error, isFatal) => {
  console.error(error);
  sendToCrashlytics(error, isFatal);
};

const initializeErrorHandler = () => {
  setJSExceptionHandler((error, isFatal) => {
    // This is your custom global error handler
    // You do stuff like show an error dialog
    // or hit google analytics to track crashes
    // or hit a custom api to inform the dev team.
    sendToCrashlytics(error, true);
  });
};

export {errorHandler, initializeErrorHandler};
