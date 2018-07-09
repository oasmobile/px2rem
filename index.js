export default function px2rem(cltw) {
    function resizeBaseFontSize() {
        let rootHtml = document.documentElement,
            deviceWidth = rootHtml.clientWidth;
        rootHtml.style.fontSize = deviceWidth / (cltw/100) + "px";
    }

    resizeBaseFontSize();
    window.addEventListener("resize", resizeBaseFontSize, false);
    window.addEventListener("orientationchange", resizeBaseFontSize, false);

}
