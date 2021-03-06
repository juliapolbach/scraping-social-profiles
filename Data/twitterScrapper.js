const puppeteer = require('puppeteer');

const onlyNumbers = new RegExp('^[0-9]*$');
const thousand = new RegExp('[m]');
const withDecimals = new RegExp('[,]');
const milion = new RegExp('[M]');

let scrapeTwitter = async (input) => {
        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        const page = await browser.newPage();
        if (input.twitter.profileUrl) {
            await page.goto(input.twitter.profileUrl);
            //await page.waitFor(1000);

            const result = await page.evaluate(() => {
                let photoProfile = document.querySelector('.ProfileAvatar-image').getAttribute('src');
                let totalPosts = document.querySelectorAll('.ProfileNav-value')[0].innerText;
                let followers = document.querySelectorAll('.ProfileNav-value')[2].innerText;

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
    }
;

//Parse twitter numerical info into Int
let parseTwitterData = (value) => {
    if (typeof value === 'number') {
        return value;
    } else {
            if (value.replace('.', "").match(onlyNumbers)) {
                return parseInt(value.replace('.', ""));
            } else if (value.match(thousand)) {
                if (value.match(withDecimals)) {
                    return parseInt(value.replace(',', "").replace('m', "").concat("00"));
                } else {
                    return parseInt(value.replace('m', "").concat("000"));
                }
            } else if (value.match(milion)) {
                if (value.match(withDecimals)) {
                    return parseInt(value.replace(',', "").replace('M', "").concat("00000").replace(/\s+/g, ''));
                } else {
                    return parseInt(value.replace('M', "").concat("000000").replace(/\s+/g, ''));
                }
            }
        }
};

let addTwitterInfo = async (input) => {
    return scrapeTwitter(input).then((twitterData) => {
        input.twitter.photoProfile = twitterData.photoProfile;
        input.twitter.followers = twitterData.followers ? parseTwitterData(twitterData.followers) : null;
        input.twitter.totalPosts = twitterData.totalPosts ? parseTwitterData(twitterData.totalPosts) : null;

        return input;
    });
};

exports.addTwitterInfo = addTwitterInfo;