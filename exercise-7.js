function meleeRangedGrouping (str) {
    //your code here
    var hero = str.split(',')
    var heroTerpisah = []
    for (let i = 0; i < hero.length; i++){
        heroTerpisah.push(hero[i].split('-'))
    }
    var ranged = []
    var melee = []
    var output = []
    for (let i = 0; i < heroTerpisah.length; i++){
        if (heroTerpisah[i][1] === 'Ranged'){
            ranged.push(heroTerpisah[i][0])
        }
        if (heroTerpisah[i][1] === 'Melee'){
            melee.push(heroTerpisah[i][0])
        }
    }
    output.push(ranged,melee)
    if (melee.length === 0 && ranged.length === 0){
        return []
    }
    return output


  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []