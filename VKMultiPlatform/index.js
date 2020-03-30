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
       bridge.send(“VKWebAppInit", {});
    }
    
    callMethod(){
        VK.callMethod("showSettingsBox", 8214);
        bridge.send("VKWebAppShowOrderBox", {type:"item", item:"item_id_123"});
        bridge.subscribe((e) => {
            if(e.type == ‘VKWebAppShowOrderBoxResult’) {
            console.log(e.data.status);
            }
         });
    }
};
