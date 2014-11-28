This very simple package displays an inconsistency in Meteor method calls.

On the client, return values from method calls are transferred by value as they must be JSON serialized over the wire.

On the server, return values from method calls are transferred by reference. If the referenced object changes after the method is called, the result variable will also change.

Run the test to see:

```bash
$ git clone https://github.com/numtel/meteor-server-method-issue.git
$ cd meteor-server-method-issue
$ meteor test-packages ./
```
