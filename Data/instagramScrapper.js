const puppeteer = require('puppeteer');

let scrapeInstagram = async (input) => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    if (input.instagram.profileUrl) {
        await page.goto(input.instagram.profileUrl);
        //await page.waitFor(1000);

        const result = await page.evaluate(() => {
            let photoProfile = document.querySelector('img').getAttribute('src');
            let totalPosts = document.querySelectorAll('._fd86t')[0].innerText;
            let followers = document.querySelectorAll('._fd86t')[1].innerText;

            return {
                photoProfile,
                totalPosts,
                followers
            }
        });

        browser.close();
        return result;
    } else {
        return {
            photoProfile: '',
            totalPosts: null,
            followers: null
        };
    }
};

let addInstagramScrappedInfo = async (input) => {
    return scrapeInstagram(input).then((instagramData) => {
        input.instagram.photoProfile = instagramData.photoProfile;
        input.instagram.followers = instagramData.followers ? parseInt(instagramData.followers) : null;
        input.instagram.totalPosts = instagramData.totalPosts ? parseInt(instagramData.totalPosts) : null;

        return input;
    });
};

exports.addInstagramScrappedInfo = addInstagramScrappedInfo;