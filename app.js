
const input = document.querySelector('.btn-div input');
const buton = document.querySelector('.btn-div button');
const contain = document.querySelector('.contain');



async function getUser() {
  const user = "selman-s";
  const url =`https://api.github.com/users/${user}`;
  
  const profileUser = await fetch(url);
  const profile = await profileUser.json();
  const {avatar_url,html_url,public_repos,followers,following,name}=profile;

  
  console.log( document.querySelector('.profile-img').style.backgroundImage);
  
  contain.innerHTML = `<div class="main">
  <div class="cart-top">
  <div class="profile-img"></div>
  </div>
  <div class="cart-bottom">
  <div class="desc">
  <div class="desc-name">
  
  <p class="user-name">${name}</p>
  
  </div>
  <a class="link" href="${html_url}" target="_blank">View Profile</a>
  </div>
  
  <div class="fans">
            <div class="fans-div">
            <p class="quantity">80K</p>
            <p class="fan">Public Repos</p>
            </div>
            <div class="fans-div">
            <p class="quantity">803K</p>
            <p class="fan">Followwers</p>
            </div>
            <div class="fans-div">
            <p class="quantity">1.4K</p>
            <p class="fan">Followings</p>
            </div>
            </div>
            </div>
            </div>`  
            document.querySelector('.profile-img').style.backgroundImage=`url(${avatar_url})`;
            return profile
          }
          
          getUser()
          
          


// searchProfile.addEventListener('click',()=>{
//   user =  searchInput.value;
 
//   ;

//   async function getUser(user) {
//     const profileUser = await fetch(`https://api.github.com/users/Selman-S/following`);
//     const profile = await profileUser.json();
//     return profile
//   }
  
//   getUser(user).then(function (user) {
//     img.style.backgroundImage = `url(${user.avatar_url})`;
//     nameUser.textContent = `${user.name}
//     `;
//   })
// })


