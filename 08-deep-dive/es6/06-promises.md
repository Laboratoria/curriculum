# Promises

A Promise can only have one of two possible resolution outcomes: fulfilled or
rejected, with an optional single value. If a Promise is fulfilled, the final
value is called a fulfillment. If it's rejected, the final value is called a
reason (as in, a "reason for rejection"). Promises can only be resolved
(fulfillment or rejection) once. Any further attempts to fulfill or reject are
simply ignored. Thus, once a Promise is resolved, it's an immutable value that
cannot be changed.

* Making and Using Promises
* Promise API
