db.storeItems.aggregate([
    {
        $match: {
            // Filter to include only active items (optional)
            active: true
        }
    },
    {
        $facet: {
            // Popularity sorted items
            popularItems: [
                { $sort: { popularity: -1 } },
                { $limit: 10 }
            ],
            // Highest rated items
            highestRatedItems: [
                { $sort: { rating: -1 } },
                { $limit: 10 }
            ],
            // Latest items
            latestItems: [
                { $sort: { dateAdded: -1 } },
                { $limit: 10 }
            ],
            // Items sorted by price high to low
            priceHighToLow: [
                { $sort: { price: -1 } }
            ],
            // Items sorted by price low to high
            priceLowToHigh: [
                { $sort: { price: 1 } }
            ]
        }
    }
]);
