var UI = db.collection('UI').get().then((snapshot) =>
{
console.log(snapshot.docs);


})