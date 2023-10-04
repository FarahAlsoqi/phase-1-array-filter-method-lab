// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers,string){
return drivers.filter(drivername => drivername.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch (drivers, string){
return drivers.filter(drivername => drivername.startsWith(string))
}

const driverslist = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driverslist, string){
return driverslist.filter(driverElement => driverElement.name === string)
}