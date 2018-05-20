const puppeteer = require('puppeteer');

//Parse twitter numerical info into Int
let parseYoutubeData = (value) => {
    console.log(value);
    console.log(value.replace(/\./g, ""));
    console.log(value.replace(/\./g, "").replace(/\s+/g, ''));
    console.log(value.replace(/\./g, "").replace(/\s+/g, '').replace('subscriptors',""));

    return parseInt(value.replace(/\./g, "").replace(/\s+/g, '').replace('subscriptors',""));
};

let scrapeYoutube = async (input) => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    if (input.youtube.profileUrl) {
        await page.goto(input.youtube.profileUrl);
        //await page.waitFor(1000);

        const result = await page.evaluate(() => {
            let photoProfile = document.querySelector('img').getAttribute('src');
            let followers = document.querySelector('#subscriber-count').innerText;

            return {
                photoProfile,
                followers
            }
        });

        await page.click('#tabsContent > paper-tab.style-scope.ytd-c4-tabbed-header-renderer.iron-selected > div');

        //await page.click('#text');
        //await page.waitFor(1000);

        //hardcoded, need to look how to
        const totalVideos = await page.evaluate(() => {
            let totalPosts = 0;
//        let totalPosts = document.querySelectorAll('.ytd-playlist-panel-renderer')[0].innerText;
            return {
                totalPosts,
            }
        });

        browser.close();
        return {...result, ...totalVideos};
    } else {
        return {
            photoProfile: '',
            totalPosts: null,
            followers: null
        };
    }
};

let addYoutubeScrappedInfo = async (input) => {
    return scrapeYoutube(input).then((youtubeData) => {
        input.youtube.photoProfile = youtubeData.photoProfile;
        input.youtube.followers = youtubeData.followers ? parseYoutubeData(youtubeData.followers): null;
        input.youtube.totalPosts = youtubeData.totalPosts;

        return input;
    });
};

exports.addYoutubeScrappedInfo = addYoutubeScrappedInfo;