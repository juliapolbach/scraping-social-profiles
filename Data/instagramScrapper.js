const puppeteer = require('puppeteer');

let scrapeInstagram = async (input) => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
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
};

let addInstagramScrappedInfo = async (input) => {
    return scrapeInstagram(input).then((instagramData) => {
        input.instagram.photoProfile = instagramData.photoProfile;
        input.instagram.followers = parseInt(instagramData.followers);
        input.instagram.totalPosts = parseInt(instagramData.totalPosts);

        return input;
    });
};

exports.addInstagramScrappedInfo = addInstagramScrappedInfo;