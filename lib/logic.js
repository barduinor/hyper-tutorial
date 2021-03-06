'use strict';
/**
 * Write your transction processor functions here
 */


/**
 * Track the trade of a commodity from one trader to another
 * @param {net.barduino.biz.Trade} trade - the trade to be processed
 * @transaction
 */
function tradeCommodity(trade) {
    trade.commodity.owner = trade.newOwner;
    return getAssetRegistry('net.barduino.biz.Commodity')
        .then(function (assetRegistry) {
            return assetRegistry.update(trade.commodity);
        });
}