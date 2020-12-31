window.onload = function() {
    const useNodeJS = false;   // if you are not using a node server, set this value to false
    const defaultLiffId = "1655452801-d3ZLDjxa";   // change the default LIFF value if you are not using a node server

    // DO NOT CHANGE THIS
    let myLiffId = "";
 
    // if node is used, fetch the environment variable and pass it to the LIFF method
    // otherwise, pass defaultLiffId
    if (useNodeJS) {
        fetch('/send-id')
            .then(function(reqResponse) {
                return reqResponse.json();
            })
            .then(function(jsonResponse) {
                myLiffId = jsonResponse.id;
                initializeLiffOrDie(myLiffId);
            })
            .catch(function(error) {
                document.getElementById("liffAppContent").classList.add('hidden');
                document.getElementById("nodeLiffInitErrorMessage").classList.remove('hidden');
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiffOrDie(myLiffId);
    }
};


/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        document.getElementById("liffAppContent").classList.add('hidden');
        document.getElementById("liffIdErrorMessage").classList.remove('hidden');
    } else {
        initializeLiff(myLiffId);
    }
}


/**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            window.alert(err);
        });
}

/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
    displayLiffData();
    displayIsInside();
    registerButtonHandlers();
    
    // check if the user is logged in/out, and disable inappropriate button
    if (liff.isLoggedIn()) {
        document.getElementById('liffLoginButton').disabled = true;
    } else {
        document.getElementById('liffLogoutButton').disabled = true;
    }
}

/**
* Display data generated by invoking LIFF methods
*/
function displayLiffData() {
    if(liff.isLoggedIn()){
        liff.getProfile().then(function(profile){
            document.getElementById('dispProfile').textContent = profile.displayName;

            document.getElementById('dispProfile2').textContent = profile.displayName;
            
            const dispProf = document.getElementById('dispImage');
            const imgs = document.createElement('img');
            imgs.src = profile.pictureUrl;
            imgs.alt = 'Profile Picture';
            dispProf.appendChild(imgs);
        })
    }else{
        
        document.getElementById("liffAppContent").classList.add('hidden');
        document.getElementById("liffIdErrorMessage").classList.remove('hidden');
        
    }
}

function displayIsInside() {
    if (liff.isLoggedIn()) {
        document.getElementById('liffLoginButton').classList.toggle('hidden');
    }

    if (liff.isInClient()){
        document.getElementById('liffLogoutButton').classList.toggle('hidden');
    }

}

function registerButtonHandlers(){
    document.getElementById('openWindowButton').addEventListener('click', function(){
        liff.openWindow({
            url: 'https://dapurndesoliff.herokuapp.com/',
            external: true
        });
    });

    document.getElementById('orderBtn').addEventListener('click', function(){
        
        if(!liff.isInClient()){
            sendAlertIfNotInClient();
        }else{
            liff.sendMessages([{
                'type': 'text',
                'text': "Halo, "+"\nTerima Kasih sudah memesan." + "\nPesanan anda akan segera kami proses," + "\nMohon ditunggu."
            }]).then(function(){
                window.alert('Pesanan Anda Berhasil Masuk');
            }).catch(function(error){
                window.alert(error);
            })
        }
    });

    document.getElementById("liffLoginButton").addEventListener('click', function(){
        if(!liff.isLoggedIn()){
            liff.login();
        }
    });

    document.getElementById('liffLogoutButton').addEventListener('click', function(){
        if(liff.isLoggedIn()){
            liff.logout();
            window.location.reload();
        }
    });
}

function sendAlertIfNotInClient(){
    window.alert('Fungsi ini hanya bisa melalui Client saja');
}