class VKMP {

    constructor() {
        this.mobile = false;
    }

    Start() {
        VK.init(function() {
            console.log('Все работает. ' + 'Локацния: ' + window.location.hostname);
         }, function() {
            console.error(error);
       }, '5.103');
       document.getElementById("hostname").innerHTML = 
        "Это принадлежит домену: " + window.location.hostname;
    }
    
    callMethod(){
        VK.callMethod("showSettingsBox", 8214);
    }
};
