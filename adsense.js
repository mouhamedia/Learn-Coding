// Injecte le script AdSense dans le <head>
const adsenseScript = document.createElement("script");
adsenseScript.async = true;
adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3429663628581948";
adsenseScript.crossOrigin = "anonymous";
document.head.appendChild(adsenseScript);

// Fonction pour injecter un bloc pub dans le body
window.addEventListener("DOMContentLoaded", () => {
    const adBlock = document.createElement("ins");
    adBlock.className = "adsbygoogle";
    adBlock.style = "display:block; text-align:center; margin:20px 0;";
    adBlock.setAttribute("data-ad-client", "ca-pub-3429663628581948");
    adBlock.setAttribute("data-ad-slot", "2209855582"); // ✅ Mets ici ton vrai slot ID
    adBlock.setAttribute("data-ad-format", "auto");
    adBlock.setAttribute("data-full-width-responsive", "true");

    document.body.appendChild(adBlock);

    // Active l’annonce
    (window.adsbygoogle = window.adsbygoogle || []).push({});
});
