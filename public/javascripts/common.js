function getFollowers(userId)
{
    alert("inside"+userId);
    fetch("/followers/"+userId, {
        method: 'GET',
         
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => {
        return res.json();
    }).then(res => {
        console.log(res);

        if(res.success){
            varResult = document.getElementById("result");
            let str='';
            for (i=0;i<res.data.followers.length;i++)
                    str=str+res.data.followers[i].followUserId;
            console.log(str);
            varResult.innerHTML = `Followers Id  is ${res.data.followers[0].userId} and ${str}`;
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });
}

function getUsers() {
    alert("Users Info");
   
}

function blockUser(userId,blockuserId) {
    
    fetch("/blockers/add-blocker", {
        method: 'POST',
        
        body: JSON.stringify({userId: userId, blockuserId: blockuserId}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    
        }
    }).then(res => {
        console.log(res);
        window.location.reload();
        
    }).catch(err => {
        alert(err);console.log(err);
    });
   

}


function unblockUser(userId,blockuserId) {
    alert("inside");
   
       fetch("/blockers/unblock", {
        method: 'DELETE',
   
        body: JSON.stringify({userId: userId, blockuserId: blockuserId}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
   
        }
    }).then(res => {
        console.log(res);
        window.location.reload();
        
    }).catch(err => {
        alert(err);console.log(err);
    });

}

function unFollow(userId,followUserId) {

    alert("Unfollowed");

    fetch("/followers/", {
        method: 'DELETE',
                body: JSON.stringify({userId: userId, followUserId: followUserId}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
                }
    }).then(res => {
        console.log(res);
        window.location.reload();
        
    }).catch(err => {
        alert(err);console.log(err);
    });


}

function addFollowers(userId,followeruserId)
{
    alert("Added followers");

    fetch("/followers/add-follower/", {
        method: 'POST',
        
        body: JSON.stringify({userId: userId, followeruserId: followeruserId}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => {
        console.log(res);

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });

}



function deleteFollowers(userId)
{
    alert("At Delete Followers block");
    
    fetch("/followers/"+userId, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    
        }
    }).then(res => {
        console.log(res);

        if(res.success){

            varResult = document.getElementById("result");
            varResult.innerHTML = `No Followers`;
            //window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });



}



function addMedia()
{
    alert("inside");
/*
    fetch("/media/add-media", {
        method: 'POST',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });


 */
}


function deleteMedia(username,id)
{
    alert("inside"+username);
    alert("inside"+id);

    fetch("/media/"+id, {
        method: 'DELETE',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log("Got response");
        console.log(res);// {success: true/false, data: {}, message: ""}
        window.location.reload();
        /*
        if(res.success){
            window.location.href = '/media/'+username;
            window.location.reload();
        } else {
            alert("inside else")
            alert(res.message);
            window.location.reload();
        }*/
    }).catch(err => {
        alert(err);console.log(err);
    });



}



function addComment(userId,mediaId)
{
    alert("inside"+userId);
    alert("inside"+mediaId);

}