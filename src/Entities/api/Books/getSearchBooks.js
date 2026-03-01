const axios = require("axios");

async function getSearchBooks(InputKeyword, sortBy) {
    try {
        const res = await axios.get(`https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404` + {
            params: {
                format: "json",
                keyword: InputKeyword,
                applicationId: "1018208777380781669",
                elements: "itemName,itemPrice,itemCaption,genreInformationFlag,mediumImageUrls",
                sort: sortBy,   //Average defolt!!!
                hits: 15
            }
        });
        return res.data;
    } catch (err) {
        console.error(err);
        return err.response.data;
    }

}

module.exports = {getSearchBooks};