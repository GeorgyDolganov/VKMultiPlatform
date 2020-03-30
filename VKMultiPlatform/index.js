class VKMP {

    constructor() {
        this.mobile = false;
    }

    Start() {
        VK.init(function() {
            console.log('Все работает');
         }, function() {
            console.error(error);
       }, '5.103');
    }
    
    callMethod(){
        VK.callMethod("showSettingsBox", 8214);
    }
};
