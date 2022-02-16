// level {1/2/3}


// level {1}
// async function GET_Data() {
//     await fetch("https://jsonplaceholder.typicode.com/todos/1")
//                 .then(response => response.json()).then(data => console.log(data));
//     let DATA = await r.json();
//     return DATA;
//   }

  // level 2
  async function getUsers() {
    return Promise.all(getUser(), getProfile(), getPosts()).then((result)=>{
        const userProfile = {
            user: result[0],
            profile: result[1],
            posts: result[2]
        }
        return userProfile;
    });
  
  }
  // level 3
//   async function getUsers(users) {
//     const new_users = [];
//     for (let i = 0; i < users.length; i = i + 1) {
//       const newUser = users[i];
//       newUser.id = i;
//       new_users.push(newUser);
//     }
// //   users.forEach((user, index)=>{
// //       const newUser = user;
// //       newUser.id = index;
// //       new_users.push(newUser);
// //   })
//     return new_users;
//   }