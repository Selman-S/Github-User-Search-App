
const input = document.querySelector('.btn-div input');
const buton = document.querySelector('.btn-div button');
const contain = document.querySelector('.contain');
const followingLink = document.querySelector('.link1');
const following1 = document.querySelector('.following');
window.addEventListener('load',() => {
  input.focus()
})

buton.addEventListener('click',getUser);
buton.addEventListener('keypress', function (e) {
  if (e.key === 'Enter'){
    getUser()
  }
});

async function getUser() {
  const user = input.value;
  // const user = 'selman-s';

  const url =`https://api.github.com/users/${user}`;
 

    const profileUser = await fetch(url);
    const profile = await profileUser.json();
    const {login,avatar_url,html_url,public_repos,followers,following,name}=profile;
    
    
   
    
    contain.innerHTML = `<div class="main">
    <div class="cart-top">
    <div class="profile-img"><img src="${avatar_url}" alt=""></div>
    </div>
    <div class="cart-bottom">
    <div class="desc">
    <div class="desc-name">
    <p class="login">${login}</p>
    <p class="user-name">${name}</p>
  
    </div>
    <a class="link" href="${html_url}" target="_blank">View Profile</a>
    <a class="link1">View All Followings</a>
    </div>
    
    <div class="fans">
    <div class="fans-div">
    <p class="quantity">${public_repos}</p>
    <p class="fan">Public Repos</p>
    </div>
    <div class="fans-div">
    <p class="quantity">${followers}</p>
    <p class="fan">Followwers</p>
    </div>
    <div class="fans-div">
    <p class="quantity">${following}</p>
    <p class="fan">Followings</p>
    </div>
    </div>
    </div>
    </div>`  
 
    input.value ='';
    input.focus();
 
   getFollow()
  }

 
  
  async function getFollow() {

    const user = document.querySelector('.login').textContent;
   
    
    const url =`https://api.github.com/users/${user}/following`;
  
   
  
      const profileUser = await fetch(url);
      const profile = await profileUser.json();
      
      profile.forEach(async (us)=>{
        const url = `https://api.github.com/users/${us.login}`;

        const profileUser = await fetch(url);
        const profile = await profileUser.json();
        const {avatar_url,html_url,public_repos,followers,following,name}=profile;
       console.log(profile);
       
        
        following1.innerHTML +=`<div class="contain"><div class="main">
             <div class="cart-top">
             <div class="profile-img"><img src="${avatar_url}" alt=""></div>
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
             <p class="quantity">${public_repos}</p>
             <p class="fan">Public Repos</p>
             </div>
             <div class="fans-div">
             <p class="quantity">${followers}</p>
             <p class="fan">Followwers</p>
             </div>
             <div class="fans-div">
             <p class="quantity">${following}</p>
             <p class="fan">Followings</p>
             </div>
             </div>
            </div>
           </div></div>`
        
      });
    
      
      
      
  //     console.log( document.querySelector('.profile-img').style.backgroundImage);
      
  //     following.innerHTML = `<div class="main">
  //     <div class="cart-top">
  //     <div class="profile-img"></div>
  //     </div>
  //     <div class="cart-bottom">
  //     <div class="desc">
  //     <div class="desc-name">
      
  //     <p class="user-name">${name}</p>
    
  //     </div>
  //     <a class="link" href="${html_url}" target="_blank">View Profile</a>
     
  //     </div>
      
  //     <div class="fans">
  //     <div class="fans-div">
  //     <p class="quantity">${public_repos}</p>
  //     <p class="fan">Public Repos</p>
  //     </div>
  //     <div class="fans-div">
  //     <p class="quantity">${followers}</p>
  //     <p class="fan">Followwers</p>
  //     </div>
  //     <div class="fans-div">
  //     <p class="quantity">${following}</p>
  //     <p class="fan">Followings</p>
  //     </div>
  //     </div>
  //     </div>
  //     </div>`  
  //     document.querySelector('.profile-img').style.backgroundImage=`url(${avatar_url})`;
  //     input.value ='';
  //     input.focus();
   
     
    }
  
  
  
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


