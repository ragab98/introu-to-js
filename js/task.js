/**
 * proplem1
 */
let firstName='ragab', 
interest = 'traveling', 
hobby = 'bike riding', 
awesomeMessage = 'hi, my name is '+firstName+'. i love '+interest+'. in my spare time, i like to '+hobby;
console.log(awesomeMessage)

/*
* proplem2
*1F=(1C*1.8)+32;
*12C=?F
*/

let F, C ;
F=(12*1.8)+32;
console.log(F);

/**
 * proplem3
 */
let eatsPlants=true, eatsAnimals=false, category;
if(eatsAnimals == true && eatsPlants == true){
    category='omnivore'
    console.log(category)
}else if(eatsPlants == true && eatsAnimals == false){
    category = 'herbivore'
    console.log(category)
}else{
    category = 'carnivore'
    console.log(category)
}


/* 
 proplem4
factorial 12= 1*2*3*....*12
*/

let i, fact=1, solution;
for(i=12; i>=1; i--){
    fact=fact*i;
}
solution=fact
console.log(solution)

// proplem5
let l=''
function laugh( num){
    for(i=0; i<num; i++){
        l=l+'ha'
    }
    return l
}
console.log(laugh(5))


/**
 * proplem6 
 **/

 let h=''
 function buildTriangle(width){
     for(i=0; i<width; i++){
         h+='*'
         console.log(h)
     }
 }
 buildTriangle(10)
 
/**
 * proplem7  
**/

test=[12,929,11,3,199,1000,7,1,14,37,4,19,300,3775,
    299,36,209,148,169,299,6,109,20,58,139,59,3,1,139]
for(i=0; i<test.length; i++){
    if(test[i]%3==0){
        test[i]+=100
        console.log(test[i])    
    }
    
}

