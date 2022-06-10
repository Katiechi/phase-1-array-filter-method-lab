// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const driver = [
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
    
    function findMatching(input1,input2){
        let newArray = []
        for (let item of input1){
            if(item.toLowerCase() === input2.toLowerCase()){
                newArray.push(item)
            }
        }
        return newArray
    }
    findMatching(drivers,'Bobby')

    
    function fuzzyMatch(input1,input2){
        let newArray = []
        for (let item of input1){
            if(item.substring(0,2) === input2){
                newArray.push(item)
            }
           
        }
        return newArray
    }
    fuzzyMatch(drivers,'Sa')

   function  matchName(input1,input2){
       let newArray = []
       for(let i=0; i<driver.length; i++){
        if(input1[i].name === input2){
            newArray.push(input1[i])
        }
        
       }
      return newArray
    }   

matchName(driver,'Bobby')
