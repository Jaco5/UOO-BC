let totalDmgBonus = 0;
let skillOne = '';
 let skillTwo = '';
 let skillThree = '';
  let skillFour = '';
  let skillFive = '';
   let skillSix = '';
   let skillSeven = '';
    let skillEight = '';
    let skillNine = '';

const skills = {
    anatomy: {
        dmg: .20,
        heal: .20,
        hamstring: 1, //add hamstrings, if >2 then true
    },
    blacksmithing: {
        dmg: .15,
        AR: .25,
    }, 
    camping: {
        dmg: .25,
        carry: 200,
        bard: .1, 
    },
    forensicEval: {
        dmg: .25,
        bard: .1, 
    },
    mining: {
        dmg: .25, 
    },
    tactics: {
        dmg: .5
    },
    tracking: {
        dmg: .25,
        bard: .1, 
    },
    weapon: {
        dmg: .5,
    },
};

let skillAmount = 0;

const calcDmgBonus = () => {
    skillOne[0] + skillTwo[0] + skillThree[0] + skillFour[0] + skillFive[0] + skillSix[0] + skillSeven[0] + skillEight[0] + skillNine[0];
}


