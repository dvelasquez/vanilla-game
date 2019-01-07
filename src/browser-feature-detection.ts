function browserFeatureDetection() {
    try {
        Function('() => {};');
        // @ts-ignore
        document.head.createShadowRoot || document.head.attachShadow;
        return true;
    }
    catch (exception) {
        return false;
    }
}

if(!browserFeatureDetection()){
    var container = document.getElementById('app');
    container.innerHTML = '<h1>Please, upgrade your browser to a newer version.</h1>';
}

export default browserFeatureDetection;