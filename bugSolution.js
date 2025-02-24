```javascript
// Correct usage
AsyncStorage.getItem('myKey').then(value => {
  const myValue = value !== null ? JSON.parse(value) : { someProperty: 'defaultValue' };
  console.log(myValue.someProperty); // Safe access, uses defaultValue if value is null
});
```