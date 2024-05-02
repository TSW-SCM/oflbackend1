const express = require('express')
 
const router = express.Router()
const productController = require('./../controller/product.controller')

router.route('/add-product').post(productController.addingProduct)
router.route('/all-products').post(productController.sendingAllvariety)
router.route('/home-stuff').get(productController.sendingStuffToHomePage)
router.route('/all-products-admin').get(productController.sendingAllProductsToAdmin)
router.route('/add-purchase').post(productController.addingPurchasing)
router.route('/sending-today-purchase').post(productController.sendingTodayPurchaseItems)
router.route('/deleting-added-purchase').post(productController.detetingAddedPurchase)

router.route('/update-products').post(productController.updatingProductPrice)
router.route('/bulk-value').post(productController.makingBulkOrderValues)
router.route('/all-placed-orders').post(productController.sendingAllPlacedOrders)
router.route('/mark-as-packed').post(productController.markingProductPackedAsDone)
router.route('/mark-as-delivered').post(productController.markingProductDeliveredAsDone)
router.route('/cod-collect').post(productController.markingProductCODAsDone)
router.route('/add-combo').post(productController.makeCombo)
router.route('/all-combos').get(productController.sendingAllCombosToAdmin)
router.route('/activation-of-combos').post(productController.activationOfCombos)
router.route('/delete-combo').post(productController.DeleteCombo)
router.route('/save-prices').post(productController.savePriceList)

module.exports = router 