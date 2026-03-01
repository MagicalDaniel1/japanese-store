const axios = require("axios");

async function getSearchItems(InputKeyword, sortBy) {
    try {
        const res = await axios.get(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601` + {
            params: {
                format: "json",
                keyword: InputKeyword,
                applicationId: "1018208777380781669",
                elements: "itemName,itemPrice,itemCaption,genreId,tagId,mediumImageUrls",
                sort: sortBy,
                hits: 15
            }
        });
        return res.data;
    } catch (err) {
        console.error(err);
        return err.response.data;
    }

}

module.exports = {getSearchItems};