# React Native AsyncStorage: Handling undefined values when retrieving data

This repository demonstrates a common error encountered when using AsyncStorage in React Native: accessing data before it has been fully retrieved.  The error typically results in undefined or null values, potentially causing application crashes or unexpected behavior.  The solution involves properly handling the possibility of null values and providing default values to prevent crashes.

## Bug
The `bug.js` file contains the incorrect implementation which demonstrates the problem. The `console.log` inside the `.then` will throw an error if `value` is undefined because you are trying to access a property of `undefined`.

## Solution
The `bugSolution.js` file provides a corrected version. It checks if the retrieved value is null or undefined before attempting to access any properties. A default value is also provided for a more robust and user-friendly experience.