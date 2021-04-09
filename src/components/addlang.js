import React from "react"

const Lang = (pagepath, path, language) => {
    for (let i = 0; i < pagepath.length; i++) {
        if (pagepath[i].ru == path) {
            return pagepath[i].lang = language;
        }
    }
}

export default Lang

