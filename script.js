var input_text =  document.getElementById("text_field");
var Bottom_Div =  document.getElementById('bottom_div');

input_text.addEventListener('change',()=>{
    Bottom_Div.innerHTML = "";
    var text_value = input_text.value;

    //Fetch data using asynch await
    
    let API_URL = `https://api.github.com/users/${text_value}`;

    fetchData();
    async function fetchData(){

        let response  = await fetch(API_URL);
        let data =  await response.json();
        console.log(data);

        // Fetching data from API & Storing it to a variable

        let Image_url = data.avatar_url;


        let Name = (data.name != null) ? data.name : " -- ";
        let UserId = (data.login != null) ? data.login : " -- ";
        let profile_url = data.html_url;
        let Joined =  (data.created_at != null) ? data.created_at : " -- ";

       //Converting String date into MM-DD-YYYY Format
        let date = new Date(Joined);
        let day = String(date.getDate()).padStart(2, '0');
        let month =  String(date.getMonth() + 1);
        let year = date.getFullYear();
        let formattedDate =  `${day}/${month}/${year}`;
        //DATE converstion done 

        let Bio = (data.bio != null) ? data.bio : " -- ";
        let Repos =  (data.public_repos != null) ?data.public_repos : " -- ";
        let Followers =  (data.followers != null) ? data.followers : " -- ";
        let Following =  (data.following != null) ? data.following : " -- ";
        let Location = (data.location != null) ? data.location : " -- ";
        let linkedIn =(data.blog != null) ? data.blog : " -- ";
        let twitter = (data.twitter_username != null) ? data.twitter_username : " -- ";
        let Company = (data.company != null) ? data.company : " -- ";
        let newDiv = document.createElement('div');

        newDiv.id = "main_inner_div";
        newDiv.innerHTML = 
        `
        <div id="profile_div">

        <div id="image_div">
            <img src="${Image_url}" alt="${Image_url}profile_image" width="100%" height="100%">
        </div>

        <div id="username_div">
            <div id="left_side">
                <h5>Name : ${Name}</h5>
                <span>Github Id : </span><a href="${profile_url}" target="_blank">${UserId}</a>
            </div>
            <div id="right_side">
                <h5>Joined : ${formattedDate}</h5>
            </div>
        </div>

    </div>

    <div id="all_details_div">
        <h5 style="margin-top: 0.7rem;">${Bio}</h5>

        <div id="follower_div">
            <div id="repos" class="follow">
                <h5>Repos</h5>
                <span>${Repos}</span>
            </div>
            <div id="followers" class="follow">
                <h5>Followers</h5>
                <span>${Followers}</span>


            </div>
            <div id="following" class="follow">
                <h5>Following</h5>
                <span>${Following}</span>
                
            </div>
        </div>

        <div id="social_media_div">
            <div id="location_div">
           
                <i class="fa-solid fa-location-dot"></i> <span>${Location}</span><br>
                
                <i class="fa-brands fa-linkedin fa-lg"></i>  <a href="${linkedIn}" target="_blank">${linkedIn}</a>
            </div>    

            <div id="twitter_div">
                <i class="fa-brands fa-twitter fa-lg"></i> <a href="${twitter}" target="_blank">${twitter}</a><br>

                <i class="fas fa-fw fa-building"></i><span>${Company}</span>

            </div>

        </div>
    </div>

        `


        Bottom_Div.appendChild(newDiv);
    }



})