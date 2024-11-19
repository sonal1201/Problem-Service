//To avoid malicious Code or Script
const sanitizeHtmlLibrary = require("sanitize-html");
const marked = require("marked");
const TurndownService = require("turndown");


function sanitizeMarkdownContent(data) {
    if (!data || typeof data !== 'string') {
        throw new Error("Input must be a valid non-empty string");
    }
    const turndownService = new TurndownService()

    //1. convert marked to html
    const convertedHtml = marked.parse(data);


    //2.santize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    })

    // convert html to  markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml)

    return sanitizedMarkdown

}

module.exports = sanitizeMarkdownContent