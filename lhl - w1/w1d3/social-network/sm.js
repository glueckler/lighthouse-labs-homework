const data = require('./social-data');


const keys = Object.keys(data);

function followers(id, filterCB) {

  const followersArray = [];
  for( let user in data ) {

    if (data[user].follows.includes(id)) {
      if(filterCB && filterCB(data[user]) === false) {
        continue;
      }
      followersArray.push(user);
    }

  }
  return followersArray;
}

function idsToName(ids) {

  const names = [];
  for (let id of ids) {
    names.push(data[id].name);

  }

  return names;

}

function looper(cb) {
  let output;
  for (let id in data) {
    const userName = data[id];
    output = cb(id, userName, output);
  }
  return output;
}

function analyzer(arr) {
  let highest;
  for (let usr of arr) {
    if (!highest || highest[0].count < usr.count) {
      highest = [usr];
    } else if (highest[0].count === usr.count) {
      highest.push(usr);
    }
  }
  console.log(highest.map( a => a.name ).join(', '))
}


// List Everyone Who They Follow, and Who Follows Them
looper((id, user) => {
  console.log(user.name)
  console.log('follows ->>', idsToName(user.follows));
  console.log('followed by ->>', idsToName(followers(id)));
})

//----------------------------------------------------
console.log(Array(55).join('-'));

console.log('who follows the most people');
//identify who follows the most people
const followsMost = [];
looper((id, usr) => {
  push = {
    name: usr.name,
    count: usr.follows.length
  }
  followsMost.push(push);
})

// console.log(followsMost);
analyzer(followsMost);

//----------------------------------------------------
console.log(Array(55).join('-'));
console.log('Who has the most followers');
//who has the most followers
const followersArr = []
looper((id, usr) => {
  push = {
    name: usr.name,
    count: followers(id).length
  }
  followersArr.push(push);
})

analyzer(followersArr);


//----------------------------------------------------
console.log(Array(55).join('-'));

console.log('Who has the most followers over 30');

//Most followers over 30
const followersOver30 = [];
looper((id, usr) => {
  function filter(user) {
    if (user.age > 30) {
      return true;
    }
    return false;
  }
  push = {
    name: usr.name,
    count: followers(id, filter).length
  }
  followersOver30.push(push);
})

analyzer(followersOver30);


//----------------------------------------------------
console.log(Array(55).join('-'));

console.log('Who follows the most over 30');

const followsOver30 = [];
looper((id, usr) => {
  const filteredFollows = usr.follows.filter( a => {
    return data[a].age > 30;
  })
  push = {
    name: usr.name,
    count: filteredFollows.length
  }
  followsOver30.push(push);
})

analyzer(followsOver30);




//----------------------------------------------------
console.log(Array(55).join('-'));

console.log('Who\'s a stalker');

const stalkers = [];
looper((id, usr) => {
  for (let checkid of usr.follows) {
    if (data[checkid].follows.includes(id)) {
      continue;
    }
    stalkers.push(usr.name);
    break;
  }
})
console.log(stalkers.join(', '));



//----------------------------------------------------
console.log(Array(55).join('-'));

console.log('Everyone\'s reach');

const reach = [];
looper((id, usr) => {
  const push = { name: usr.name };
  const userfollowers = followers(id);
  let followersFollowers = userfollowers.map( a => followers(a).length );
  followersFollowers = followersFollowers.reduce( (a, b) => a + b );
  const userreach = followersFollowers + userfollowers.length;
  push.reach = userreach;
  reach.push(push);
})

reach.forEach((each) => {
  console.log(each.name, each.reach);
})





//----------------------------------------------------
console.log(Array(55).join('-'));





















