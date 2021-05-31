Run the emulator with `yarn emulate`. In another shell, run the example script with `yarn start`. I get the following output after a brief moment (~14 seconds):

```
(node:23824) UnhandledPromiseRejectionWarning: FirebaseError: 9 FAILED_PRECONDITION: the stored version (1622419123919591) does not match the required base version (0)
    at new FirestoreError (/1971mcve/node_modules/@firebase/firestore/dist/exp/index.node.cjs.js:386:28)
    at Object.callback (/1971mcve/node_modules/@firebase/firestore/dist/exp/index.node.cjs.js:14620:30)
    at Object.onReceiveStatus (/1971mcve/node_modules/@grpc/grpc-js/build/src/client.js:179:36)
    at Object.onReceiveStatus (/1971mcve/node_modules/@grpc/grpc-js/build/src/client-interceptors.js:336:141)
    at Object.onReceiveStatus (/1971mcve/node_modules/@grpc/grpc-js/build/src/client-interceptors.js:299:181)
    at /1971mcve/node_modules/@grpc/grpc-js/build/src/call-stream.js:145:78
    at processTicksAndRejections (internal/process/task_queues.js:75:11)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:23824) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:23824) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
Done in 14.08s.
```
