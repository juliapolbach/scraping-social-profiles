const puppeteer = require('puppeteer');

let scrapeInstagram = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/juliapolbach/');
    await page.waitFor(1000);

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

let addScrappedInfo = async (input) => {
    return scrapeInstagram().then((instagramData) => {
        //console.log(instagramData); // Success!

        console.log('mutating input');
        input.instagram.photoProfile = instagramData.photoProfile;
        input.instagram.followers = instagramData.followers;
        input.instagram.totalPosts = instagramData.totalPosts;

        return input;
    });
};

exports.addScrappedInfo = addScrappedInfo;
