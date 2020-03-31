class VKMP {

    constructor() {
        this.mobile = false;
    }

    Start() {
        vkBridge.send('VKWebAppInit');
    }
    
    callMethod(){
        vkBridge.send("VKWebAppAllowNotifications", {});
    }
};
