// Using the same naming convention/conversion that we use in prisma
// dot (.) replaced with one underscore (_) and hyphen (-) replaced with two underscores (__)
// ---------------------------------------
export const CUSTOMER_ACCOUNT_EXTENSION_TARGETS = {
    customer__account_order__index_block_render: 'customer-account.order-index.block.render',
    customer__account_order__status_block_render: 'customer-account.order-status.block.render',
};
export const CHECKOUT_EXTENSION_TARGETS = {
    purchase__checkout_block_render: 'purchase.checkout.block.render',
    purchase__checkout_cart_line_item_render_after: 'purchase.checkout.cart-line-item.render-after',
};
