import React from 'react'

class Test extends React.Component {

    componentDidMount() {
        // ~~~~~~~~~~~~~~~~~~~ tag creators 
        const script0 = document.createElement("script")
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");
        const script3 = document.createElement("script")
        const script4 = document.createElement("script")
        const script5 = document.createElement("script")
        const script6 = document.createElement("script")
        const style1 = document.createElement("style")
        const style2 = document.createElement("style")

        //~~~~~~~~~~~~~~~~~~~~ content setters
        script3.innerHTML =
            `function shareVK() {
                var yourUrl = $('.share[data-dropdown-id="more"]').data('url'),
                    title = $('.share[data-dropdown-id="more"]').data('text'),
                    description = "Your Description",
                    url = 'https://vkontakte.ru/share.php?url=' + yourUrl + '&title=' + title + '&description=' + description + '&noparse=true';
                window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
            }
        function shareWeibo() {
            var yourUrl = $('.share[data-dropdown-id="more"]').data('url'),
                title = $('.share[data-dropdown-id="more"]').data('text'),
                url = 'http://service.weibo.com/share/share.php?url=' + yourUrl + '&appkey=&title=' + title + '&pic=&ralateUid=&language=zh_cn';
            window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
        }
        function externalLink(url) {
            window.location = url;
        }`
        script4.innerHTML =
            `(function (d) {
                var config = {
                kitId: 'okm1bwz',
                scriptTimeout: 3000,
                async: true
            },
                h = d.documentElement, t = setTimeout(function () { h.classNameName = h.classNameName.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.classNameName += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
                    })(document);`

        script5.innerHTML = `<script>
    $(function () {
      setInterval(function () {
        if ($('.slideshow').hasclassName('selected')) {
          $('.slideshow.selected .background.shown').removeclassName('shown').nextOrFirst('.background').addclassName('shown');
        }
      }, 4000); // <-- set your interval here
    });
  </script>`
        script6.innerHTML = `<script>
                        $(window).on('slideChange', function (event, number, element) {

      var $audio = $('audio');
                  
      $audio.animate({volume: 0 }, 500, function () {
                            $audio[0].pause();
                        });
                  
                      });
  </script>`
        style1.innerHTML = `
        .owl-carousel .item {}

        .owl-carousel .item a {}

        .cover {
          object-fit: cover;
          width: 100%;
          height: 150px;
        }

        .owl-carousel .item img {
          display: block;
        }

        .owl-carousel .owl-dots {
          display: none;
        }`
        style2.innerHTML = `
    .slideshow .background {
      opacity: 0;
      visibility: hidden;
      -webkit-transition: 1s;
      transition: 1s;
    }

    .slideshow .background.shown {
      opacity: 1;
      visibility: visible;
    }`
        //~~~~~~~~~~~~~~~~~~~ source setters
        script0.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
        script1.src = "./js/plugins.js";
        script2.src = "./js/slides.js";

        //~~~~~~~~~~~~~~~~~~~~~ async waiters
        script0.async = true;
        script1.async = true;
        script2.async = true;
        script3.async = true;
        script4.async = true;
        script5.async = true;
        script6.async = true;
        //~~~~~~~~~~~~~~~~~~~ appenders

        document.head.appendChild(script0);
        document.head.appendChild(script1);
        document.head.appendChild(script2);
        document.head.appendChild(script3);
        document.head.appendChild(script4);
        document.head.appendChild(script5);
        document.head.appendChild(script6);
        document.head.appendChild(style1);
        document.head.appendChild(style2);
    }

    render() {
        return (
            <body className="slides zen horizontal">


                // SVG Library -->
                <svg xmlns="http://www.w3.org/2000/svg" style="display:none">

                    <symbol id="logo" viewBox="0 0 37.73 49.2">
                        <defs>
                            <style></style>
                        </defs>
                        <title>IBlogo</title>
                        <path className="cls-1" d="M30 23.3c3.4-2.4 5.46-5.59 5.46-9.85a12.82 12.82 0 0 0-5.76-10.59c-3.39-2.2-7.26-2.46-11.19-2.46h-11.51v15.06a11.91 11.91 0 0 1 3.83 6 5.15 5.15 0 0 0-9.27-.09 12.25 12.25 0 0 1 3.8-5.86v-15.11h-4.93v49.2h4.93v-17.81a12.23 12.23 0 0 1-3.81-5.9 5.16 5.16 0 0 0 9.29-.06 11.88 11.88 0 0 1-3.83 6v17.77h11.57c4.93-.06 9.19.07 13.52-2.66a13.41 13.41 0 0 0 6.06-11.25 12.83 12.83 0 0 0-8.16-12.39zm-21.59.35a2.26 2.26 0 1 1-3.89-1.55.68.68 0 0 0 0 .14.77.77 0 1 0 .94-.74 2.26 2.26 0 0 1 3 2.15zm3.49-18.8h5.73c2.93-.13 6.46-.07 9 1.46a8.4 8.4 0 0 1 3.93 6.79 8 8 0 0 1-4 6.86c-2.8 1.54-6.19 1.46-9.32 1.46h-5.31zm16.47 38.82c-3 1.54-7.06 1.54-10.39 1.47h-6.06v-19.25h5.2c3.26 0 6.86-.06 9.92 1a9 9 0 0 1 6.12 8.86 9.24 9.24 0 0 1-4.79 7.92z"
                            transform="translate(-.43 -.4)" />
                    </symbol>

                    <symbol id="logo-icon" viewBox="0 0 50 41">
                        <title>Brand Name</title>
                        <path d="M4,12h42c2.2,0,4,1.8,4,4v21c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V16C0,13.8,1.8,12,4,12z" />
                        <path opacity="0.6" d="M45.5,9h-41C3.7,9,3,8.3,3,7.5v0C3,6.7,3.7,6,4.5,6h41C46.3,6,47,6.7,47,7.5v0C47,8.3,46.3,9,45.5,9z"
                        />
                        <path opacity="0.4" d="M7.5,0h35C43.3,0,44,0.7,44,1.5v0C44,2.3,43.3,3,42.5,3h-35C6.7,3,6,2.3,6,1.5v0C6,0.7,6.7,0,7.5,0z"
                        />
                    </symbol>

                    <symbol id="logoname" viewBox="0 0 150 50">
                        <defs>
                            <style></style>
                        </defs>
                        <title>logoname</title>
                        <path className="cls-1" d="M4.27 18.7h2.16v12.6h-2.16zM14.06 26c-1.85-.64-3.94-1.65-3.94-4a3.83 3.83 0 0 1 4.12-3.57 5.43 5.43 0 0 1 4.11 2l-1.5 1.57a3.62 3.62 0 0 0-2.61-1.42 1.74 1.74 0 0 0-1.93 1.51c0 1.1 1 1.44 2.72 2.09 1.93.72 3.53 1.58 3.53 3.87s-2 3.51-4.39 3.51a5.51 5.51 0 0 1-4.61-2.58l1.62-1.36a3.85 3.85 0 0 0 3 1.89c1.08 0 2.2-.44 2.2-1.46s-.82-1.48-2.32-2.05zM25.17 18.7h2.19l4.9 12.6h-2.18l-1.15-3h-5.33l-1.15 3h-2.18zm-.8 7.63h3.79l-1.9-4.91zM34.42 18.7h4.08c2.06 0 4 .95 4 3.6a2.58 2.58 0 0 1-1.31 2.32 3 3 0 0 1 2 3c0 2.21-1.84 3.72-4.22 3.72h-4.55zm4 5.15c1.21 0 1.89-.45 1.89-1.55s-.82-1.55-1.89-1.55h-1.84v3.1zm2.58 3.73c0-1.19-.9-1.68-2.09-1.68h-2.3v3.35h2.3c1.16 0 2.09-.49 2.09-1.67zM47.92 23.81h5v2.05h-5v3.39h5.58v2.05h-7.74v-12.6h7.63v2.05h-5.47zM56.31 18.7h2.16v10.55h5.36v2.05h-7.52zM66 18.7h2.17v10.55h5.36v2.05h-7.53zM77.91 23.81h5v2.05h-5v3.39h5.58v2.05h-7.74v-12.6h7.63v2.05h-5.47zM92.3 18.7h4.09c2.06 0 4 .95 4 3.6a2.58 2.58 0 0 1-1.32 2.32 3 3 0 0 1 2 3c0 2.21-1.84 3.72-4.22 3.72h-4.55zm4 5.15c1.21 0 1.89-.45 1.89-1.55s-.83-1.55-1.89-1.55h-1.83v3.1zm2.54 3.73c0-1.19-.9-1.68-2.09-1.68h-2.3v3.35h2.3c1.25 0 2.11-.49 2.11-1.67zM107.32 18.7h2.19l4.9 12.6h-2.18l-1.15-3h-5.33l-1.15 3h-2.18zm-.79 7.63h3.78l-1.89-4.91zM116.57 18.7h2.16v10.55h5.36v2.05h-7.52zM126.29 18.7h2.16v10.55h5.36v2.05h-7.52zM143.57 18.7h2.16v8a4.86 4.86 0 0 1-9.72 0v-8h2.16v7.76c0 1.8.9 3 2.7 3s2.7-1.21 2.7-3z"
                        />
                    </symbol>

                    <symbol id="close" viewBox="0 0 30 30">
                        <path d="M15 0c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm5.7 19.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-4.3-4.3-4.3 4.3c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l4.3-4.3-4.3-4.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.3 4.3 4.3-4.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-4.3 4.3 4.3 4.3z"
                        />
                    </symbol>

                    <symbol id="close-small" viewBox="0 0 11 11">
                        <path d="M6.914 5.5l3.793-3.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-3.793 3.793-3.793-3.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l3.793 3.793-3.793 3.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.793-3.793 3.793 3.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-3.793-3.793z"
                        />
                    </symbol>

                    <symbol id="arrow-left" viewBox="0 0 46 83.55">
                        <defs>
                            <style></style>
                        </defs>
                        <title>arrowleft</title>
                        <path className="cls-1" d="M44.76 1.23a4.24 4.24 0 0 0-6 0l-37.54 37.56a4.26 4.26 0 0 0 0 6l37.57 37.52a4.22 4.22 0 0 0 6-6l-34.62-34.54 34.59-34.58a4.21 4.21 0 0 0 0-5.96z"
                        />
                    </symbol>

                    <symbol id="arrow-right" viewBox="0 0 46 83.55">
                        <defs>
                            <style></style>
                        </defs>
                        <title>arrowright</title>
                        <path className="cls-1" d="M1.24 82.31a4.22 4.22 0 0 0 6 0l37.54-37.55a4.26 4.26 0 0 0 0-6l-37.57-37.53a4.22 4.22 0 0 0-6 6l34.62 34.55-34.59 34.57a4.21 4.21 0 0 0 0 5.96z"
                        />
                    </symbol>

                    <symbol id="back" viewBox="0 0 20 20">
                        <path d="M2.3 10.7l5 5c.4.4 1 .4 1.4 0s.4-1 0-1.4l-3.3-3.3h11.6c.6 0 1-.4 1-1s-.4-1-1-1h-11.6l3.3-3.3c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3s-.5.1-.7.3l-5 5c-.2.2-.3.5-.3.7 0 .2.1.5.3.7z"
                        />
                    </symbol>

                    <symbol id="menu" viewBox="0 0 22 22">
                        <path d="M1 5h20c.6 0 1-.4 1-1s-.4-1-1-1h-20c-.6 0-1 .4-1 1s.4 1 1 1zm20 5h-20c-.6 0-1 .4-1 1s.4 1 1 1h20c.6 0 1-.4 1-1s-.4-1-1-1zm0 7h-20c-.6 0-1 .4-1 1s.4 1 1 1h20c.6 0 1-.4 1-1s-.4-1-1-1z"
                        />
                    </symbol>

                    <symbol id="share" viewBox="0 0 22 22">
                        <path d="M21 10c-.6 0-1 .4-1 1v7h-18v-7c0-.6-.4-1-1-1s-1 .4-1 1v7c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-7c0-.6-.4-1-1-1zM5.5 7.5c.3 0 .5-.1.7-.3l3.8-3.8v9.6c0 .6.4 1 1 1s1-.4 1-1v-9.6l3.8 3.8c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-5.5-5.5c-.1-.1-.2-.2-.3-.2-.2-.1-.5-.1-.8 0l-.3.2-5.5 5.5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3z"
                        />
                    </symbol>

                    <symbol id="arrow-down" viewBox="0 0 83.55 46">
                        <defs>
                            <style></style>
                        </defs>
                        <title>arrowdown</title>
                        <path className="cls-1" d="M1.23 1.24a4.24 4.24 0 0 0 0 6l37.56 37.54a4.26 4.26 0 0 0 6 0l37.52-37.57a4.22 4.22 0 0 0-6-6l-34.54 34.62-34.58-34.59a4.21 4.21 0 0 0-5.96 0z"
                        />
                    </symbol>

                    <symbol id="arrow-up" viewBox="0 0 83.55 46">
                        <defs>
                            <style></style>
                        </defs>
                        <title>arrowup</title>
                        <path className="cls-1" d="M82.31 44.76a4.22 4.22 0 0 0 0-6l-37.55-37.54a4.26 4.26 0 0 0-6 0l-37.53 37.57a4.22 4.22 0 0 0 6 6l34.55-34.62 34.57 34.59a4.21 4.21 0 0 0 5.96 0z"
                        />
                    </symbol>

                    <symbol id="arrow-top" viewBox="0 0 24 24">
                        <path d="M20.7 10.3l-8-8c-.4-.4-1-.4-1.4 0l-8 8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l6.3-6.3v15.6c0 .6.4 1 1 1s1-.4 1-1v-15.6l6.3 6.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"
                        />
                    </symbol>

                    <symbol id="drop-down" viewBox="0 0 16 16">
                        <polyline stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="1,5 8,12 15,5" fill="none"></polyline>
                    </symbol>

                    <symbol id="play" viewBox="0 0 30 30">
                        <path d="M7 30v-30l22 15z" />
                    </symbol>

                    <symbol id="login" viewBox="0 0 22 22">
                        <path d="M13 2c0 .6.4 1 1 1h6v16h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2h-6c-.6 0-1 .4-1 1zm-6.5 3.5c0 .3.1.5.3.7l3.8 3.8h-9.6c-.6 0-1 .4-1 1s.4 1 1 1h9.6l-3.8 3.8c-.2.2-.3.5-.3.7s.1.5.3.7c.4.4 1 .4 1.4 0l5.5-5.5c.1-.1.2-.2.2-.3.1-.2.1-.5 0-.8l-.2-.3-5.5-5.5c-.4-.4-1-.4-1.4 0-.2.2-.3.4-.3.7z"
                        />
                    </symbol>

                    <symbol id="chat" viewBox="0 0 22 22">
                        <path d="M11 22c-.1 0-.3 0-.4-.1-.4-.1-.6-.5-.6-.9v-4h-7.8c-1.2 0-2.2-1-2.2-2.2v-11.6c0-1.2 1-2.2 2.2-2.2h17.7c1.1 0 2.1 1 2.1 2.2v11.7c0 1.2-1 2.2-2.2 2.2h-3.4l-4.7 4.7c-.2.1-.4.2-.7.2zm-8.8-19c-.1 0-.2.1-.2.2v11.7s.1.1.2.1h8.8c.6 0 1 .4 1 1v2.6l3.3-3.3c.2-.2.4-.3.7-.3h3.8c.1 0 .2-.1.2-.2v-11.6c0-.1-.1-.2-.2-.2h-17.6zM5 6h6v2h-6zM5 10h10v2h-10z"
                        />
                    </symbol>

                    <symbol id="mail" viewBox="0 0 22 22">
                        <path d="M19.8 2h-17.6c-1.2 0-2.2 1-2.2 2.2v13.5c0 1.3 1 2.3 2.2 2.3h17.5c1.2 0 2.2-1 2.2-2.2v-13.6c.1-1.2-.9-2.2-2.1-2.2zm-17.6 2h17.5c.2 0 .3.1.3.2v.3l-9 6.3-9-6.3v-.3c0-.1.1-.2.2-.2zm17.6 14h-17.6c-.1 0-.2-.1-.2-.2v-10.9l8.1 5.7c.3.2.6.3.9.3.3 0 .6-.1.9-.3l8.1-5.7v10.9c0 .1-.1.2-.2.2z"
                        />
                    </symbol>

                    <symbol id="sound-on" viewBox="0 0 22 22">
                        <path d="M15 15c-.2 0-.4-.1-.6-.2-.4-.3-.5-1-.2-1.4.5-.7.8-1.5.8-2.4s-.3-1.7-.8-2.4c-.3-.4-.2-1.1.2-1.4.4-.3 1.1-.2 1.4.2.8 1 1.2 2.3 1.2 3.6s-.4 2.6-1.2 3.6c-.2.3-.5.4-.8.4zm4 2.3c-.2 0-.5-.1-.7-.2-.4-.4-.5-1-.1-1.4 1.2-1.3 1.8-3 1.8-4.7 0-1.8-.7-3.5-1.9-4.8-.4-.4-.4-1 0-1.4s1-.4 1.4 0c1.6 1.7 2.5 3.9 2.5 6.2 0 2.2-.8 4.3-2.2 6-.2.2-.5.3-.8.3zm-9 2.7c-.2 0-.4-.1-.6-.2l-4.8-3.8h-2.1c-1.4 0-2.5-1.1-2.5-2.5v-5c0-1.4 1.1-2.5 2.5-2.5h2.2l4.7-3.8c.3-.2.7-.3 1.1-.1.3.2.5.5.5.9v16c0 .4-.2.7-.6.9-.1.1-.3.1-.4.1zm-7.5-12c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h2.5c.2 0 .4.1.6.2l3.4 2.7v-11.8l-3.4 2.7c-.2.1-.4.2-.6.2h-2.5z"
                        />
                    </symbol>

                    <symbol id="sound-off" viewBox="0 0 22 22">
                        <path d="M10.434 2.098c-.347-.165-.758-.119-1.058.121l-4.726 3.781h-2.154c-1.376 0-2.496 1.12-2.496 2.496v5.009c0 1.376 1.12 2.495 2.496 2.495h2.153l4.726 3.781c.181.145.402.219.625.219.147 0 .295-.032.433-.099.347-.167.567-.516.567-.901v-16c0-.384-.22-.735-.566-.902zm-1.434 14.821l-3.375-2.7c-.178-.142-.398-.219-.625-.219h-2.504c-.274 0-.496-.222-.496-.495v-5.009c0-.274.222-.496.496-.496h2.504c.227 0 .447-.077.625-.219l3.375-2.7v11.838zM19.414 11l2.293-2.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-2.293 2.293-2.293-2.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l2.293 2.293-2.293 2.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l2.293-2.293 2.293 2.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-2.293-2.293z"
                        />
                    </symbol>

                    // social -->
                    <symbol id="facebook" viewBox="0 0 24 24">
                        <path d="M24 1.3v21.3c0 .7-.6 1.3-1.3 1.3h-6.1v-9.3h3.1l.5-3.6h-3.6v-2.2c0-1.1.3-1.8 1.8-1.8h1.9v-3.2c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.7h-3.1v3.6h3.1v9.2h-11.5c-.7 0-1.3-.6-1.3-1.3v-21.4c0-.7.6-1.3 1.3-1.3h21.3c.8 0 1.4.6 1.4 1.3z"
                        />
                    </symbol>

                    <symbol id="fb-like" viewBox="0 0 20 20">
                        <path d="M0 8v12h5v-12h-5zm2.5 10.8c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8s.8.3.8.8c0 .4-.4.8-.8.8zm3.5-.8h9.5c1.1 0 1.7-1 1.7-1.7 0-.3-.4-1-.4-1 1.4-.3 1.7-1.2 1.7-1.7-.1-.5-.3-.9-.5-1 1-.4 1.5-1.1 1.4-1.9-.1-.8-1-1.5-1-1.5 1-.6.9-1.5.9-1.5-.3-1.3-1.5-1.7-1.7-1.7h-5.6s.3-.5.3-2.4-1.3-3.6-2.6-3.6c0 0-.7.1-1 .3v3.5l-2.7 4.4v9.8z"
                        />
                    </symbol>

                    <symbol id="instagram" viewBox="0 0 24 24">
                        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c0-1.2.2-1.9.3-2.3.2-.6.5-1 .9-1.4.5-.4.9-.6 1.4-.9.4-.1 1.1-.3 2.3-.4h4.8m0-2.2c-3.3 0-3.7 0-4.9.1-1.3 0-2.2.2-3 .5-.7.3-1.4.7-2.1 1.4-.7.7-1.1 1.4-1.4 2.1-.3.8-.5 1.7-.5 3-.1 1.2-.1 1.6-.1 4.9 0 3.3 0 3.7.1 4.9.1 1.3.3 2.1.6 2.9.2.8.6 1.5 1.3 2.2.7.7 1.3 1.1 2.1 1.4.8.3 1.6.5 2.9.6h5s3.7 0 4.9-.1c1.3-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.1-.6-2.9-.2-.8-.6-1.5-1.3-2.2-.7-.7-1.3-1.1-2.1-1.4-.8-.3-1.6-.5-2.9-.6h-5zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                        />
                        <circle className="st0" cx="18.4" cy="5.6" r="1.4" />
                    </symbol>

                    <symbol id="linkedin" viewBox="0 0 24 24">
                        <path d="M22.2 0h-20.4c-1 0-1.8.8-1.8 1.7v20.7c0 1 .8 1.7 1.8 1.7h20.5c1 0 1.8-.8 1.8-1.7v-20.7c-.1-.9-.9-1.7-1.9-1.7zm-14.9 20.2h-3.6v-10.9h3.6v10.9zm-1.8-12.4c-1.2 0-2-.8-2-1.9 0-1.1.8-1.9 2.1-1.9 1.2 0 2 .8 2 1.9-.1 1.1-.9 1.9-2.1 1.9zm14.8 12.4h-3.6v-5.8c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9v6.1h-3.6v-10.9h3.6v1.5c.5-.7 1.3-1.8 3.3-1.8 2.4 0 4.2 1.6 4.2 4.9v6.3z"
                        />
                    </symbol>

                    <symbol id="medium" viewBox="0 0 24 24">
                        <path d="M7.601 5.357c-2.305-1.137-4.6-2.294-6.899-3.444-.577-.289-.694-.216-.694.43-.001 5.147.005 10.294-.008 15.441-.001.57.224.911.726 1.158 2.126 1.047 4.242 2.116 6.362 3.176l.326.151c.308.115.494-.016.562-.315.032-.14.02-.283.02-.438l.009-15.482c.002-.337-.091-.523-.404-.677zm15.983-.001c-2.369-1.184-4.74-2.366-7.101-3.565-.368-.187-.559-.114-.769.231-1.431 2.356-2.876 4.703-4.328 7.046-.144.233-.15.4-.004.637 1.605 2.593 3.198 5.193 4.795 7.79l.238.36.107-.138c2.426-3.948 4.848-7.898 7.283-11.841.204-.33.01-.405-.221-.52zm.413 16.185c.001-4.694.001-9.387.001-14.081v-.38l-.076-.023-7.257 11.812.257.156c2.095 1.05 4.191 2.098 6.287 3.146l.219.097c.314.112.489-.032.554-.329.027-.128.015-.265.015-.398zm-15.273-14.526c-.001 2.547.003 5.093-.008 7.64-.001.234.105.321.285.411 2.204 1.1 4.405 2.205 6.608 3.307l.333.12-7.183-11.692-.035.214z"
                        />
                    </symbol>

                    <symbol id="pinterest" viewBox="0 0 24 24">
                        <path d="M5.9 13.9c1.2-2-.4-2.5-.6-4-1-6.1 7.1-10.2 11.4-6 2.9 2.9 1 12-3.7 11-4.6-.9 2.2-8.1-1.4-9.5-3-1.1-4.6 3.6-3.2 5.9-.8 4-2.5 7.7-1.8 12.7 2.3-1.7 3.1-4.8 3.7-8.1 1.2.7 1.8 1.4 3.3 1.5 5.5.4 8.6-5.4 7.8-10.7-.7-4.7-5.5-7.1-10.6-6.6-4.1.4-8.1 3.7-8.3 8.3-.1 2.8.7 4.9 3.4 5.5z"
                        />
                    </symbol>

                    <symbol id="stumbleupon" viewBox="0 0 24 24">
                        <path d="M13.3 9.6l1.6.8 2.5-.8v-1.4c0-3-2.4-5.4-5.4-5.4s-5.4 2.4-5.4 5.4v7.5c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3v-3.2h-4v3.2c0 3 2.4 5.4 5.4 5.4s5.4-2.4 5.4-5.4v-7.5c0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3l-.1 1.4zm6.6 2.9v3.2c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3v-3.2l-2.5.8-1.6-.8v3.2c0 3 2.4 5.4 5.4 5.4s5.4-2.4 5.4-5.4v-3.2h-4.1z"
                        />
                    </symbol>

                    <symbol id="twitter" viewBox="0 1 24 23">
                        <path d="M21.5 7.6v.6c0 6.6-5 14.1-14 14.1-2.8 0-5.4-.8-7.6-2.2l1.2.1c2.3 0 4.4-.8 6.1-2.1-2.2 0-4-1.5-4.6-3.4.3.1.6.1.9.1.5 0 .9-.1 1.3-.2-2.1-.6-3.8-2.6-3.8-5 .7.4 1.4.6 2.2.6-1.3-.9-2.2-2.4-2.2-4.1 0-.9.2-1.8.7-2.5 2.4 3 6.1 5 10.2 5.2-.1-.4-.1-.7-.1-1.1 0-2.7 2.2-5 4.9-5 1.4 0 2.7.6 3.6 1.6 1-.3 2.1-.7 3-1.3-.4 1.2-1.1 2.1-2.2 2.7 1-.1 1.9-.4 2.8-.8-.6 1.1-1.4 2-2.4 2.7z"
                        />
                    </symbol>

                    <symbol id="tumblr" viewBox="0 0 23 23">
                        <path d="M12.573 4.94v-4.94h-3.188c-.072.183-.11.4-.11.622-.034.107-.072.184-.072.293-.328 1.829-1.28 3.11-2.892 3.807-.476.218-.914.253-1.39.218v3.987h2.342c.039 5.603.039 8.493.039 8.64v.332c.294 2.449 1.573 3.914 3.843 4.463.914.257 1.901.366 2.892.366 1.279-.036 2.525-.256 3.771-.659v-4.685c-.731.22-1.395.402-1.977.583-1.135.333-2.087.113-2.857-.619-.073-.11-.183-.257-.221-.403-.106-.586-.178-1.206-.178-1.795v-6.222h5.083v-3.988h-5.085z"
                        />
                    </symbol>

                    <symbol id="xing" viewBox="0 0 24 24">
                        <path d="M3.647 4.74c-.208 0-.384.073-.472.216-.091.148-.077.338.02.531l2.34 4.051v.02l-3.678 6.49c-.096.191-.091.383 0 .531.088.142.244.236.452.236h3.461c.518 0 .767-.349.944-.669l3.737-6.608-2.38-4.15c-.172-.307-.433-.649-.964-.649h-3.46zm14.542-4.74c-.517 0-.741.326-.927.659l-7.702 13.658 4.918 9.023c.172.307.437.659.967.659h3.457c.208 0 .371-.079.459-.221.092-.148.09-.343-.007-.535l-4.88-8.915v-.023l7.664-13.551c.096-.191.098-.386.007-.534-.088-.142-.252-.221-.46-.221h-3.496z"
                        />
                    </symbol>

                    <symbol id="youtube" viewBox="0 0 24 24">
                        <path d="M23.6 6.3c-.3-1.2-1.4-2.2-2.6-2.3-3-.3-6-.3-9-.3s-6 0-9 .3c-1.2.1-2.3 1.1-2.6 2.3-.4 1.8-.4 3.8-.4 5.7 0 1.9 0 3.9.4 5.7.3 1.2 1.4 2.2 2.6 2.3 3 .3 6 .3 9 .3s6 0 9-.3c1.3-.1 2.3-1.1 2.6-2.4.4-1.7.4-3.7.4-5.6 0-1.9 0-3.9-.4-5.7zm-14.1 9v-6.6l6.5 3.3-6.5 3.3z"
                        />
                    </symbol>


                    <symbol id="more" viewBox="0 0 24 24">
                        <circle cx="3" cy="12" r="3" />
                        <circle cx="21" cy="12" r="3" />
                        <circle cx="12" cy="12" r="3" />
                    </symbol>

                    <symbol id="headphones" viewBox="0 0 40 30">
                        <defs>
                            <style></style>
                        </defs>
                        <title>headphons</title>
                        <path className="cls-1" d="M33.53 14.9v-1.38a13.45 13.45 0 0 0-26.9 0v16a7.65 7.65 0 0 0 2.51.48h.76v-16.47a10.19 10.19 0 0 1 20.38 0v16.4h.72a7.6 7.6 0 0 0 2.59-.46v-14.57zm-28.74.85a7.72 7.72 0 0 0 0 13zm30.44.05v12.84a7.73 7.73 0 0 0 0-12.84z"
                        />
                    </symbol>

                    <symbol id="defile" viewBox="0 0 30 30">
                        <defs>
                            <style></style>
                        </defs>
                        <title>defile</title>
                        <path className="cls-1" d="M27 15a1.5 1.5 0 0 1-.69 1.26l-15 9.66a1.5 1.5 0 0 1-1.75-2.44l.13-.08 13.05-8.4-16.74-10.76v24.26a1.5 1.5 0 0 1-3 0v-27a1.5 1.5 0 0 1 1.5-1.5 1.45 1.45 0 0 1 .81.24l21 13.5a1.49 1.49 0 0 1 .69 1.26"
                        />
                    </symbol>


                    <symbol id="identity" viewBox="0 0 30 30">
                        <defs>
                            <style></style>
                        </defs>
                        <title>identity</title>
                        <path className="cls-1" d="M3.33 20h-3.33v6.67a3.33 3.33 0 0 0 3.33 3.33h6.67v-3.33h-6.67zM3.33 3.33h6.67v-3.33h-6.67a3.33 3.33 0 0 0-3.33 3.33v6.67h3.33zM26.67 0h-6.67v3.33h6.67v6.67h3.33v-6.67a3.33 3.33 0 0 0-3.33-3.33zM26.67 26.67h-6.67v3.33h6.67a3.33 3.33 0 0 0 3.33-3.33v-6.67h-3.33z"
                        />
                    </symbol>

                    <symbol id="info" viewBox="0 0 30 30">
                        <path className="cls-1" d="M15 0a15 15 0 1 0 15 15 15 15 0 0 0-15-15zm0 7.11a1.19 1.19 0 0 1 1.17 1.26 1.21 1.21 0 0 1-1.17 1.22 1.26 1.26 0 0 1-1.2-1.22 1.24 1.24 0 0 1 1.2-1.26zm-2.51 15.89v-.71c1.61-.12 1.8-.29 1.8-1.94v-5.14c0-1.51 0-1.61-1.63-1.82v-.64a13.3 13.3 0 0 0 3.37-1v8.62c0 1.65.18 1.82 1.81 1.94v.69z"
                        />
                    </symbol>

                    <symbol id="slides" viewBox="0 0 22 22">
                        <rect className="cls-1" x="2" y="3" width="15" height="19" rx="1" ry="1" />
                        <path className="cls-1" d="M5 2h1v-1h13v17h-1v1h1a1 1 0 0 0 1-1v-17a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1z" />
                    </symbol>

                    <symbol id="pause" viewBox="0 0 30 30">
                        <path d="M5.92 2.52h4.45v24.99h-4.45zM19.64 2.51h4.45v24.99h-4.45z" />
                    </symbol>


                </svg>

                // Navigation Arrows -->
                <nav className="side left">
                    <div className="navigation">
                        <div className="cell">
                            <span className="prevSlide">
                                <svg className="sideArrow">
                                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
          </svg>
        </span>
                    </div>
    </div>
  </nav>

            <nav className="side right">
                <div className="navigation">
                    <div className="cell">
                        <span className="nextSlide">
                            <svg className="sideArrow">
                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
        </span>
                </div>
    </div>
  </nav >

            // Panel Top #06 -->
            <nav className="panel top">
                <div className="sections">
                    <div className="left">
                        <a href="universe.html#20" title="IB" className="button actionTrigger">
                            <svg style="width: 50px;height:50px;">
                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
          </svg>
        </a>
                </div>
                <div className="right">
                    <span className="button actionButton sidebarTrigger" data-sidebar-id="9" style="padding-top:10px !important; padding-right:50px !important;">
                        <svg style="width: 30px;height:30px;">
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#slides"></use>
          </svg>
        </span>
      </div>
    </div >
  </nav >


            // Sidebar -->
            <nav className="sidebar bottom yellow" data-sidebar-id="9">
                <div className="content">
                    <script src="https://cdn.rawgit.com/OwlCarousel2/OwlCarousel2/develop/dist/owl.carousel.min.js"></script>
                    <link href="https://cdn.rawgit.com/OwlCarousel2/OwlCarousel2/develop/dist/assets/owl.carousel.min.css" rel="stylesheet" type="text/css" />
                    <link href="https://cdn.rawgit.com/OwlCarousel2/OwlCarousel2/develop/dist/assets/owl.theme.default.min.css" rel="stylesheet"
                        type="text/css" />

                    <script>
                        $(document).ready(function () {
                            $('.owl-carousel').owlCarousel({
                                stagePadding: 10,
                                loop: true,
                                margin: 1,
                                responsiveclassName: true,
                                responsive: {
                                    0: {
                                        items: 2,
                                        nav: false,
                                        margin: 10
                                    },
                                    600: {
                                        items: 4,
                                        nav: false,
                                        margin: 10
                                    },
                                    1000: {
                                        items: 6,
                                        nav: false,
                                        loop: false,
                                        margin: 10
                                    },
                                    1500: {
                                        items: 8,
                                        nav: false,
                                        loop: false,
                                        margin: 10
                                    },
                                    2000: {
                                        items: 10,
                                        nav: false,
                                        loop: false,
                                        margin: 10
                                    }
                                }
                            })
                        })
      </script>

                    <div className="fix-12-12">

                        // your carousel -->
                        <div className="owl-carousel owl-theme ae-3" style="display:block; height: 150px;">
                            <div className="item">
                                <a href="#1">
                                    <img src="assets/img/IMG1179.jpeg" alt="1" className="cover" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#2">
                                    <img src="assets/img/lpzip.jpg" alt="2" className="cover" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#3">
                                    <img src="assets/img/LG026.jpeg" alt="3" className="cover" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#4">
                                    <img src="assets/img/IMG0509.jpg" alt="4" className="cover" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#5">
                                    <img src="assets/img/IB9ArnaudLoubry.jpeg" alt="5" className="cover" />
                                </a>
                            </div>
                            <div className="item">6</div>
                            <div className="item">7</div>
                            <div className="item">8</div>
                            <div className="item">9</div>
                            <div className="item">10</div>
                            <div className="item">11</div>
                            <div className="item">12</div>
                            <div className="item">13</div>
                            <div className="item">14</div>
                            <div className="item">15</div>
                            <div className="item">16</div>
                            <div className="item">17</div>
                            <div className="item">18</div>
                            <div className="item">19</div>
                            <div className="item">20</div>
                        </div>

                    </div>


                </div>
            </nav>

            // for desktop swipe
            <script> window.disableOnScroll = 1; </script>-->

                // for mobile swipe
                <script> window.disableOnSwipe = 1; </script>-->


                    // Example background-slideshow -->
                    // 1) copy styles -->


                    // 2) copy scripts -->




                    // 1) new tab scripts -->
                    <script>
                        $(function () {
                            $('[data-on-click]').on('click', function () {
                                var link = $(this).data('on-click');
                                window.open(link, "newwindow");
                            });
                        });
  </script>



                    // Slide 1 -->
                    <section className="slide fade kenBurns" data-name="1">

                        // s1-navigation top -->
                        <nav className="panel top">
                            <div className="sections">
                                <div className="center upArrow">
                                    <a href="universe.html#1" className="button actionButton">
                                        <svg>
                                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-up"></use>
            </svg>
          </a>
                            </div>
      </div>
    </nav>

                    // s1-information -->
                    <div className="content" style="-webkit-overflow-scrolling: touch; overflow-y: scroll;">
                        <iframe src="archive/edit/francpairon.html" style="width: 100%; height: 100%;" scrolling="auto" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"></iframe>
                    </div>

                    // s1-background 
                    <div className="background hideForDesktop" style="background-image:url(assets/img/IMG1179.jpeg); background-position: bottom left; "></div>-->



                        // s1-navigation bottom -->
                        <nav className="panel bottom" style="z-index:1000;">
                            <div className="sections">
                                <div className="left">
                                    <button className="button hideForDesktop" data-on-click="http://isabelleballu.com/test/archive/edit/francpairon.html" style="padding-left:25px !important;">
                                        <svg style="width: 40px; height:40px;">
                                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#info"></use>
            </svg>
          </button>
                            </div>
                            <div className="center downArrow">
                                <a href="brand.html#1" className="button actionButton">
                                    <svg>
                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
            </svg>
          </a>
        </div>
                        <div className="right">
                            <span data-dropdown-id="s1" className="button actionButton dropdownTrigger" style="padding-top:10px !important; padding-right:50px !important;">
                                <i className="material-icons">share</i>
                            </span>
                        </div>
      </div >
    </nav >

  </section >



            // Slide 1-social media -->
            <div className="dropdown bottom center share" data-dropdown-id="s1" data-text="#" data-url="#" data-pinterest-image="#">
                <ul>
                    <li className="twitter">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use>
        </svg>
      </li>
                <li className="instagram">
                    <svg>
                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#instagram"></use>
        </svg>
      </li>
            <li className="facebook">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook"></use>
        </svg>
      </li >
            <li className="linkedin">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#linkedin"></use>
        </svg>
      </li >
            <li className="mail" data-subject="Subject" data-body="Body">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#mail"></use>
        </svg>
      </li >
    </ul >
  </div >






            // Slide 2 -->
            <section className="slide fade kenBurns" data-name="2">

                // s2-navigation top -->
                <nav className="panel top">
                    <div className="sections">
                        <div className="center upArrow">
                            <a href="universe.html#2" className="button actionButton">
                                <svg>
                                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-up"></use>
            </svg>
          </a>
                    </div>
      </div>
    </nav>

            // s2-information -->
            <div className="content">
                <div className="container">
                    <div className="wrap bottom">
                        <div className="fix-7-12 toLeft">
                            <div className="pad shadow hideForTablet">
                                <ul className="grid">
                                    <li className="col-12-12 left cell-33">
                                        <h1>PASSAGE N&deg;X</h1>
                                        <h2>Survival of the Fittest (SS 2005)</h2>
                                        <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                    and I will give you a complete account of the system."</h4>
                                        <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                          blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                                          ocean.
                  </h5>
                                        <ul className="museum" style="padding-top:20px;">
                                            <li>
                                                <a href="#">
                                                    <svg style="width: 26.67px; height:20px;">
                                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#headphones"></use>
                        </svg>
                                                <p className="uppercase">Audio</p>
                      </a>
                    </li>
                                        <li>
                                            <a href="#">
                                                <svg style="width:20px;height:20px;">
                                                    <use xmls: xlink="http://www.w3.org/1999/xlink" xlink:href="#defile"></use>
                        </svg>
                                            <p className="uppercase">Defile</p>
                      </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg style="width: 20px; height:20px;">
                                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#identity"></use>
                        </svg>
                                        <p className="uppercase">Image</p>
                      </a>
                    </li>
                  </ul>
                            <a href="#">
                                <p className="uppercase" style="padding-top:20px;">More on this collection &hellip;</p>
                            </a>
                </li>
                        <li className="col-6-12 left fromCenter">
                        </li>
              </ul>
                </div>
            </div>

        </div >
      </div >
    </div >

            // s2-background -->
            <div className="background" style="background-image:url(assets/img/lpzip.jpg)"></div>

            // s2-navigation bottom -->
            <nav className="panel bottom" style="z-index:1000;">
                <div className="sections">
                    <div className="left">
                        <button className="button popupTrigger hideForDesktop" data-popup-id="p2" style="padding-left:25px !important;">
                            <svg style="width: 40px; height:40px;">
                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#info"></use>
            </svg>
          </button>
                </div>
                <div className="center downArrow">
                    <a href="brand.html#2" className="button actionButton">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
            </svg>
          </a>
        </div>
            <div className="right">
                <span data-dropdown-id="s2" className="button actionButton dropdownTrigger" style="padding-top:10px !important; padding-right:50px !important;">
                    <i className="material-icons">share</i>
                </span>
            </div>
      </div >
    </nav >

  </section >


            // Slide 2-pop up for mobile and tablet -->
            <div className="popup hideForDesktop" data-popup-id="p2">
                <div className="content">
                    <div className="container">
                        <div className="wrap spaces">
                            <div className="fix-11-12 left popupContent">
                                <h1 className="uppercase">Franc' Pairon</h1>
                                <h2>Interview 17/11/2017</h2>
                                <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
              will give you a complete account of the system."</h4>
                                <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5>
                                <ul className="museum" style="padding-top:5%;">
                                    <li>
                                        <a href="#">
                                            <svg style="width: 26.67px; height:20px;">
                                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#headphones"></use>
                  </svg>
                                        <p className="uppercase">Audio</p>
                </a>
              </li>
                                <li>
                                    <a href="#">
                                        <svg style="width:20px;height:20px;">
                                            <use xmls: xlink="http://www.w3.org/1999/xlink" xlink:href="#defile"></use>
                  </svg>
                                    <p className="uppercase">Defile</p>
                </a>
              </li>
                            <li>
                                <a href="#">
                                    <svg style="width: 20px; height:20px;">
                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#identity"></use>
                  </svg>
                                <p className="uppercase">Image</p>
                </a>
              </li>
            </ul>
                    <a href="#">
                        <p className="uppercase" style="padding-top:20px;">More on this collection &hellip;</p>
                    </a>
                </div>
            </div>
      </div >
    </div >
  </div >

            // Slide 2-social media -->
            <div className="dropdown bottom center share" data-dropdown-id="s2" data-text="#" data-url="#" data-pinterest-image="#">
                <ul>
                    <li className="twitter">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use>
        </svg>
      </li>
                <li className="instagram">
                    <svg>
                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#instagram"></use>
        </svg>
      </li>
            <li className="facebook">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook"></use>
        </svg>
      </li >
            <li className="linkedin">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#linkedin"></use>
        </svg>
      </li >
            <li className="mail" data-subject="Subject" data-body="Body">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#mail"></use>
        </svg>
      </li >
    </ul >
  </div >



            // Slide 3 -->
            <section className="slide fade kenBurns" data-name="3">

                // s3-navigation top -->
                <nav className="panel top">
                    <div className="sections">
                        <div className="center upArrow">
                            <a href="universe.html#3" className="button actionButton">
                                <svg>
                                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-up"></use>
            </svg>
          </a>
                    </div>
      </div>
    </nav>

            // s3-information -->
            <div className="content">
                <div className="container">
                    <div className="wrap bottom">
                        <div className="fix-7-12 toLeft">
                            <div className="pad shadow hideForTablet">
                                <ul className="grid">
                                    <li className="col-12-12 left cell-33">
                                        <h1>PASSAGE N&deg;X</h1>
                                        <h2>Survival of the Fittest (SS 2005)</h2>
                                        <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                    and I will give you a complete account of the system."</h4>
                                        <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                          blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                                          ocean.
                  </h5>
                                        <ul className="museum" style="padding-top:20px;">
                                            <li>
                                                <a href="#">
                                                    <svg style="width: 26.67px; height:20px;">
                                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#headphones"></use>
                        </svg>
                                                <p className="uppercase">Audio</p>
                      </a>
                    </li>
                                        <li>
                                            <a href="#">
                                                <svg style="width:20px;height:20px;">
                                                    <use xmls: xlink="http://www.w3.org/1999/xlink" xlink:href="#defile"></use>
                        </svg>
                                            <p className="uppercase">Defile</p>
                      </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg style="width: 20px; height:20px;">
                                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#identity"></use>
                        </svg>
                                        <p className="uppercase">Image</p>
                      </a>
                    </li>
                  </ul>
                            <a href="#">
                                <p className="uppercase" style="padding-top:20px;">More on this collection &hellip;</p>
                            </a>
                </li>
                        <li className="col-6-12 left ae-4 fromCenter">
                        </li>
              </ul>
                </div>
            </div>

        </div >
      </div >
    </div >
            // s3-background -->
            <div className="background" style="background-image:url(assets/img/LG026.jpeg); background-position: bottom right;"></div>

            // s3-navigation bottom -->
            <nav className="panel bottom" style="z-index:1000;">
                <div className="sections">
                    <div className="left">
                        <button className="button popupTrigger hideForDesktop" data-popup-id="p3" style="padding-left:25px !important;">
                            <svg style="width: 40px; height:40px;">
                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#info"></use>
            </svg>
          </button>
                </div>
                <div className="center downArrow">
                    <a href="brand.html#3" className="button actionButton">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
            </svg>
          </a>
        </div>
            <div className="right">
                <span data-dropdown-id="s3" className="button actionButton dropdownTrigger" style="padding-top:10px !important; padding-right:50px !important;">
                    <i className="material-icons">share</i>
                </span>
            </div>
      </div >
    </nav >

  </section >


            // Slide 3-pop up for mobile and tablet -->
            <div className="popup hideForDesktop" data-popup-id="p3">
                <div className="content">
                    <div className="container">
                        <div className="wrap spaces">
                            <div className="fix-11-12 left popupContent">
                                <h1 className="uppercase">Franc' Pairon</h1>
                                <h2>Interview 17/11/2017</h2>
                                <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
              will give you a complete account of the system."</h4>
                                <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5>
                                <ul className="museum" style="padding-top:5%;">
                                    <li>
                                        <a href="#">
                                            <svg style="width: 26.67px; height:20px;">
                                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#headphones"></use>
                  </svg>
                                        <p className="uppercase">Audio</p>
                </a>
              </li>
                                <li>
                                    <a href="#">
                                        <svg style="width:20px;height:20px;">
                                            <use xmls: xlink="http://www.w3.org/1999/xlink" xlink:href="#defile"></use>
                  </svg>
                                    <p className="uppercase">Defile</p>
                </a>
              </li>
                            <li>
                                <a href="#">
                                    <svg style="width: 20px; height:20px;">
                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#identity"></use>
                  </svg>
                                <p className="uppercase">Image</p>
                </a>
              </li>
            </ul>
                    <a href="#">
                        <p className="uppercase" style="padding-top:20px;">More on this collection &hellip;</p>
                    </a>
                </div>
            </div>
      </div >
    </div >
  </div >

            // Slide 3-social media -->
            <div className="dropdown bottom center share" data-dropdown-id="s3" data-text="#" data-url="#" data-pinterest-image="#">
                <ul>
                    <li className="twitter">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use>
        </svg>
      </li>
                <li className="instagram">
                    <svg>
                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#instagram"></use>
        </svg>
      </li>
            <li className="facebook">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook"></use>
        </svg>
      </li >
            <li className="linkedin">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#linkedin"></use>
        </svg>
      </li >
            <li className="mail" data-subject="Subject" data-body="Body">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#mail"></use>
        </svg>
      </li >
    </ul >
  </div >



            // Slide 4 -->
            <section className="slide whiteSlide fade kenBurns" data-name="4">

                // s4-navigation top -->
                <nav className="panel top">
                    <div className="sections">
                        <div className="center upArrow">
                            <a href="universe.html#4" className="button actionButton">
                                <svg>
                                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-up"></use>
            </svg>
          </a>
                    </div>
      </div>
    </nav>

            // s4-information -->
            <div className="content">
                <div className="container">
                    <div className="wrap bottom">
                        <div className="fix-7-12 left toRight">
                            <div className="whitepad shadow hideForTablet">
                                <h1 className="uppercase">Franc' Pairon</h1>
                                <h2>Interview 17/11/2017</h2>
                                <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
                I will give you a complete account of the system."</h4>
                                <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5>
                                <ul className="museum" style="padding-top:20px;">
                                    <li>
                                        <a href="#">
                                            <svg style="width: 26.67px; height:20px;">
                                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#headphones"></use>
                    </svg>
                                        <p className="uppercase">Audio</p>
                  </a>
                </li>
                                <li>
                                    <a href="#">
                                        <svg style="width:20px;height:20px;">
                                            <use xmls: xlink="http://www.w3.org/1999/xlink" xlink:href="#defile"></use>
                    </svg>
                                    <p className="uppercase">Defile</p>
                  </a>
                </li>
                            <li>
                                <a href="#">
                                    <svg style="width: 20px; height:20px;">
                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#identity"></use>
                    </svg>
                                <p className="uppercase">Image</p>
                  </a>
                </li>
              </ul>
                    <a href="#">
                        <p className="uppercase" style="padding-top:20px;">More on this collection &hellip;</p>
                    </a>
                </div>
            </div>
        </div >
      </div >
    </div >

            // s4-background -->
            <div className="background" style="background-image:url(assets/img/IMG0509.jpg); background-position: center left"></div>

            // s4-navigation bottom -->
            <nav className="panel bottom" style="z-index:1000;">
                <div className="sections">
                    <div className="left">
                        <button className="button popupTrigger hideForDesktop" data-popup-id="p4" style="padding-left:25px !important;">
                            <svg style="width: 40px; height:40px;">
                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#info"></use>
            </svg>
          </button>
                </div>
                <div className="center downArrow">
                    <a href="brand.html#4" className="button actionButton">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
            </svg>
          </a>
        </div>
            <div className="right">
                <span data-dropdown-id="s4" className="button actionButton dropdownTrigger" style="padding-top:10px !important; padding-right:50px !important;">
                    <i className="material-icons">share</i>
                </span>
            </div>
      </div >
    </nav >

  </section >


            // Slide 4-pop up for mobile and tablet -->
            <div className="popup white hideForDesktop" data-popup-id="p4">
                <div className="content">
                    <div className="container">
                        <div className="wrap spaces">
                            <div className="fix-11-12 left popupContent">
                                <h1 className="uppercase">Franc' Pairon</h1>
                                <h2>Interview 17/11/2017</h2>
                                <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
              will give you a complete account of the system."</h4>
                                <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5>
                                <ul className="museum" style="padding-top:5%;">
                                    <li>
                                        <a href="#">
                                            <svg style="width: 26.67px; height:20px;">
                                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#headphones"></use>
                  </svg>
                                        <p className="uppercase">Audio</p>
                </a>
              </li>
                                <li>
                                    <a href="#">
                                        <svg style="width:20px;height:20px;">
                                            <use xmls: xlink="http://www.w3.org/1999/xlink" xlink:href="#defile"></use>
                  </svg>
                                    <p className="uppercase">Defile</p>
                </a>
              </li>
                            <li>
                                <a href="#">
                                    <svg style="width: 20px; height:20px;">
                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#identity"></use>
                  </svg>
                                <p className="uppercase">Image</p>
                </a>
              </li>
            </ul>
                    <a href="#">
                        <p className="uppercase" style="padding-top:20px;">More on this collection &hellip;</p>
                    </a>
                </div>
            </div>
      </div >
    </div >
  </div >

            // Slide 4-social media -->
            <div className="dropdown bottom center share" data-dropdown-id="s4" data-text="#" data-url="#" data-pinterest-image="#">
                <ul>
                    <li className="twitter">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use>
        </svg>
      </li>
                <li className="instagram">
                    <svg>
                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#instagram"></use>
        </svg>
      </li>
            <li className="facebook">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook"></use>
        </svg>
      </li >
            <li className="linkedin">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#linkedin"></use>
        </svg>
      </li >
            <li className="mail" data-subject="Subject" data-body="Body">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#mail"></use>
        </svg>
      </li >
    </ul >
  </div >


            // Slide 5 -->
            <section className="slide whiteSlide fade kenBurns slideshow" data-name="5">

                // s5-navigation top -->
                <nav className="panel top">
                    <div className="sections">
                        <div className="center upArrow">
                            <a href="universe.html#5" className="button actionButton">
                                <svg>
                                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-up"></use>
            </svg>
          </a>
                    </div>
      </div>
    </nav>

            // s5-information -->
            <div className="content">
                <div className="container">
                    <div className="wrap bottom">
                        <div className="fix-7-12 toLeft">
                            <div className="whitepad shadow hideForTablet">
                                <ul className="grid">
                                    <li className="col-12-12 left cell-33">
                                        <h1>PASSAGE N&deg;X</h1>
                                        <h2>Survival of the Fittest (SS 2005)</h2>
                                        <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                    and I will give you a complete account of the system."</h4>
                                        <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                          blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                                          ocean.
                  </h5>
                                        <ul className="museum" style="padding-top:20px;">
                                            <li>
                                                <a href="#">
                                                    <svg style="width: 26.67px; height:20px;">
                                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#headphones"></use>
                        </svg>
                                                <p className="uppercase">Audio</p>
                      </a>
                    </li>
                                        <li>
                                            <a href="#">
                                                <svg style="width:20px;height:20px;">
                                                    <use xmls: xlink="http://www.w3.org/1999/xlink" xlink:href="#defile"></use>
                        </svg>
                                            <p className="uppercase">Defile</p>
                      </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg style="width: 20px; height:20px;">
                                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#identity"></use>
                        </svg>
                                        <p className="uppercase">Image</p>
                      </a>
                    </li>
                  </ul>
                            <a href="#">
                                <p className="uppercase" style="padding-top:20px;">More on this collection &hellip;</p>
                            </a>
                </li>
                        <li className="col-6-12 left ae-4 fromCenter">
                        </li>
              </ul>
                </div>
            </div>
        </div >
      </div >
    </div >

            // s5-navigation bottom -->
            <nav className="panel bottom" style="z-index:1000;">
                <div className="sections">
                    <div className="left">
                        <button className="button popupTrigger hideForDesktop" data-popup-id="p5" style="padding-left:25px !important;">
                            <svg style="width: 40px; height:40px;">
                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#info"></use>
            </svg>
          </button>
                </div>
                <div className="center downArrow">
                    <a href="brand.html#5" className="button actionButton">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
            </svg>
          </a>
        </div>
            <div className="right">
                <span data-dropdown-id="s5" className="button actionButton dropdownTrigger" style="padding-top:10px !important; padding-right:50px !important;">
                    <i className="material-icons">share</i>
                </span>
            </div>
      </div >
    </nav >

            // s5-background -->
            <div className="background shown" style="background-image:url(assets/img/IB9ArnaudLoubry.jpeg); background-position: top center"></div>
            <div className="background" style="background-image:url(assets/img/expo2.jpeg); background-position: center right"></div>
            <div className="background" style="background-image:url(assets/img/expo3.jpeg); background-position: center center"></div>
            <div className="background" style="background-image:url(assets/img/expo4.jpeg); background-position: center center"></div>
            <div className="background" style="background-image:url(assets/img/expo5.jpeg); background-position: center center"></div>
            <div className="background" style="background-image:url(assets/img/expo6.jpeg); background-position: center right"></div>
            <div className="background" style="background-image:url(assets/img/expo1.jpeg); background-position: center right"></div>

  </section >


            // Slide 5-pop up for mobile and tablet -->
            <div className="popup white hideForDesktop" data-popup-id="p5">
                <div className="content">
                    <div className="container">
                        <div className="wrap spaces">
                            <div className="fix-11-12 left popupContent">
                                <h1 className="uppercase">Franc' Pairon</h1>
                                <h2>Interview 17/11/2017</h2>
                                <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
              will give you a complete account of the system."</h4>
                                <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5>
                                <ul className="museum" style="padding-top:5%;">
                                    <li>
                                        <a href="#">
                                            <svg style="width: 26.67px; height:20px;">
                                                <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#headphones"></use>
                  </svg>
                                        <p className="uppercase">Audio</p>
                </a>
              </li>
                                <li>
                                    <a href="#">
                                        <svg style="width:20px;height:20px;">
                                            <use xmls: xlink="http://www.w3.org/1999/xlink" xlink:href="#defile"></use>
                  </svg>
                                    <p className="uppercase">Defile</p>
                </a>
              </li>
                            <li>
                                <a href="#">
                                    <svg style="width: 20px; height:20px;">
                                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#identity"></use>
                  </svg>
                                <p className="uppercase">Image</p>
                </a>
              </li>
            </ul>
                    <a href="#">
                        <p className="uppercase" style="padding-top:20px;">More on this collection &hellip;</p>
                    </a>
                </div>
            </div>
      </div >
    </div >
  </div >

            // Slide 5-social media -->
            <div className="dropdown bottom center share" data-dropdown-id="s5" data-text="#" data-url="#" data-pinterest-image="#">
                <ul>
                    <li className="twitter">
                        <svg>
                            <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use>
        </svg>
      </li>
                <li className="instagram">
                    <svg>
                        <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#instagram"></use>
        </svg>
      </li>
            <li className="facebook">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook"></use>
        </svg>
      </li >
            <li className="linkedin">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#linkedin"></use>
        </svg>
      </li >
            <li className="mail" data-subject="Subject" data-body="Body">
                <svg>
                    <use xmlns: xlink="http://www.w3.org/1999/xlink" xlink:href="#mail"></use>
        </svg>
      </li >
    </ul >
  </div >

            // Preloader -->
            <div className="loadingIcon">
                <svg className="loading-icon" id="loading-circle" viewBox="0 0 18 18">
                    <circle className="circle" opacity=".1" stroke="#fff" stroke-width="2" stroke-miterlimit="10" cx="9" cy="9" r="8" fill="none"></circle>
                    <circle className="dash" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="1,100" cx="9" cy="9"
                        r="8" fill="none"></circle>
                </svg>
            </div>

        )
    }
}
export default Test