export function createDplayerOptions (container,args = null) {
    const options = {
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        lang: 'zh-cn',
        screenshot: true,
        hotkey: true,
        preload: 'auto',
        logo: 'logo.png',
        volume: 0.7,
        mutex: true,
        video: {
            url: 'dplayer.mp4',
            pic: 'dplayer.png',
            thumbnails: 'thumbnails.jpg',
            type: 'auto',
        },
        subtitle: {
            url: 'dplayer.vtt',
            type: 'webvtt',
            fontSize: '25px',
            bottom: '10%',
            color: '#b7daff',
        },
        contextmenu: [
            {
                text: 'gitHub',
                link: 'https://github.com/DIYgod/DPlayer',
            },
            {
                text: 'custom2',
                click: (player) => {
                    console.log(player);
                },
            },
        ]
    }
    if (args && Object.keys(args).length > 0){
        for (var i in args){
            if(options[i] && args[i]){
                options[i] = args[i]
            }
        }
    }


    return options
}