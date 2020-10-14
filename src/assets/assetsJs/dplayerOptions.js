export function createDplayerOptions (container,args = null) {
    const options = {
        container: container,
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
        danmaku: {
            id: '9E2E3368B56CDBB4',
            api: 'https://api.prprpr.me/dplayer/',
            token: 'tokendemo',
            maximum: 1000,
            addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
            user: 'DIYgod',
            bottom: '15%',
            unlimited: true,
        },
        contextmenu: [
            {
                text: 'custom1',
                link: 'https://github.com/DIYgod/DPlayer',
            },
            {
                text: 'custom2',
                click: (player) => {
                    console.log(player);
                },
            },
        ],
        highlight: [
            {
                time: 20,
                text: '这是第 20 秒',
            },
            {
                time: 120,
                text: '这是 2 分钟',
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