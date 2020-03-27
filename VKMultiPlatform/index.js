class VKMP {

    constructor() {

    }

    Start() {
        VK.init(function() {
            alert('Все работает');
         }, function() {
            alert('Не работает');
       }, '5.103');
    }

};
