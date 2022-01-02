let generatedText = [];
const firstName = ['Whip', 'Slap', 'Blast', 'Buck', 'Chunk', 'Fist', 'Fridge', 'Roll', 'Slate', 'Smash', 'Bold', 'Crud', 'Punch', 'Gristle', 'Punt', 'Zap', 'Smoke', 'Thick', 'Trunk', 'Buff','Flink', 'Lump', 'Slam', 'Crunch', 'Hack', 'Bulk'];
const lastName = ['Slagcheek', 'Slamchest', 'Beefnob', 'Rockgroin', 'McThornbody', 'Blowfist', 'Squatthrust', 'Hardmeat', 'Fizzlebeef', 'Rockbone', 'Side-Iron', 'Plankchest', 'Deadlift', 'Hardcheese', 'McLargehuge', 'Buttsteak', 'Largemeat', 'Hardpec', 'Chunkhead', 'McRunfast', 'Fistcrunch', 'Vanderhuge', 'Thickneck', 'Blastbody', 'Rustrod', 'Rowsdower'];
const generateArr = [firstName, lastName];

//generate beefcake name
const generate = arr => {
    let i = 0;
    for(let i in arr){
        arr[i] = arr[i][Math.floor(Math.random() * (arr[i].length-1))];
        generatedText.push(arr[i]);
    }
    return `New 80's action hero nickname: ${generatedText[0]} ${generatedText[1]}`;
};

console.log(generate(generateArr));
