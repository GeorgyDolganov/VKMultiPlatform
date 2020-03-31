class VKMP {

    constructor() {
        this.mobile = false;
    }

    Start() {
        vkConnect.send('VKWebAppInit');
    }
    
    callMethod(){
        vkConnect.send("VKWebAppAllowNotifications", {});
    }
};
