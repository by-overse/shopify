import { ExtensionTarget as CheckoutExtensionTarget } from '@shopify/ui-extensions/checkout';
import { ExtensionTarget as CustomerAccountExtensionTarget } from '@shopify/ui-extensions/customer-account';

// Using the same naming convention/conversion that we use in prisma
// dot (.) replaced with one underscore (_) and hyphen (-) replaced with two underscores (__)
// ---------------------------------------

export const CUSTOMER_ACCOUNT_EXTENSION_TARGETS = {
   customer__account_order__index_block_render: 'customer-account.order-index.block.render',
   customer__account_order__status_block_render: 'customer-account.order-status.block.render',
  
   customer__account_order__status_cart__line__item_render__after: 'customer-account.order-status.cart-line-item.render-after',
   customer__account_order__status_cart__line__list_render__after: 'customer-account.order-status.cart-line-list.render-after',
   customer__account_order__status_customer__information_render__after: 'customer-account.order-status.customer-information.render-after',
   customer__account_order__status_fulfillment__details_render__after: 'customer-account.order-status.fulfillment-details.render-after',
   customer__account_order__status_payment__details_render__after: 'customer-account.order-status.payment-details.render-after',
   customer__account_order__status_return__details_render__after: 'customer-account.order-status.return-details.render-after',
   customer__account_order__status_unfulfilled__items_render__after: 'customer-account.order-status.unfulfilled-items.render-after',
  
   customer__account_order_action_menu__item_render: 'customer-account.order.action.menu-item.render',
   customer__account_order_action_render: 'customer-account.order.action.render',
   customer__account_order_page_render: 'customer-account.order.page.render',
  
   customer__account_page_render: 'customer-account.page.render',
  
   customer__account_profile_addresses_render__after: 'customer-account.profile.addresses.render-after',
   customer__account_profile_block_render: 'customer-account.profile.block.render',
  
   customer__account_profile_company__details_render__after: 'customer-account.profile.company-details.render-after',
   customer__account_profile_company__location__addresses_render__after: 'customer-account.profile.company-location-addresses.render-after',
   customer__account_profile_company__location__payment_render__after: 'customer-account.profile.company-location-payment.render-after',
   customer__account_profile_company__location__staff_render__after: 'customer-account.profile.company-location-staff.render-after',
   customer__account_profile_payment_render__after: 'customer-account.profile.payment.render-after',
} satisfies Record<string, CustomerAccountExtensionTarget>; // prettier-ignore

export const CHECKOUT_EXTENSION_TARGETS = {
  purchase_address__autocomplete_format__suggestion: 'purchase.address-autocomplete.format-suggestion',
  purchase_address__autocomplete_suggest: 'purchase.address-autocomplete.suggest',

  purchase_cart__line__item_line__components_render: 'purchase.cart-line-item.line-components.render',

  purchase_checkout_actions_render__before: 'purchase.checkout.actions.render-before',
  purchase_checkout_block_render: 'purchase.checkout.block.render',

  purchase_checkout_cart__line__item_render__after: 'purchase.checkout.cart-line-item.render-after',
  purchase_checkout_cart__line__list_render__after: 'purchase.checkout.cart-line-list.render-after',

  purchase_checkout_chat_render: 'purchase.checkout.chat.render',

  purchase_checkout_contact_render__after: 'purchase.checkout.contact.render-after',
  purchase_checkout_delivery__address_render__after: 'purchase.checkout.delivery-address.render-after',
  purchase_checkout_delivery__address_render__before: 'purchase.checkout.delivery-address.render-before',
  purchase_checkout_footer_render__after: 'purchase.checkout.footer.render-after',

  purchase_checkout_gift__card_render: 'purchase.checkout.gift-card.render',
  purchase_checkout_header_render__after: 'purchase.checkout.header.render-after',

  purchase_checkout_payment__method__list_render__after: 'purchase.checkout.payment-method-list.render-after',
  purchase_checkout_payment__method__list_render__before: 'purchase.checkout.payment-method-list.render-before',

  purchase_checkout_payment__option__item_action__required_render: 'purchase.checkout.payment-option-item.action-required.render',
  purchase_checkout_payment__option__item_details_render: 'purchase.checkout.payment-option-item.details.render',
  purchase_checkout_payment__option__item_hosted__fields_render__after: 'purchase.checkout.payment-option-item.hosted-fields.render-after',

  purchase_checkout_pickup__location__list_render__after: 'purchase.checkout.pickup-location-list.render-after',
  purchase_checkout_pickup__location__list_render__before: 'purchase.checkout.pickup-location-list.render-before',
  purchase_checkout_pickup__location__option__item_render__after: 'purchase.checkout.pickup-location-option-item.render-after',

  purchase_checkout_pickup__point__list_render__after: 'purchase.checkout.pickup-point-list.render-after',
  purchase_checkout_pickup__point__list_render__before: 'purchase.checkout.pickup-point-list.render-before',

  purchase_checkout_reductions_render__after: 'purchase.checkout.reductions.render-after',
  purchase_checkout_reductions_render__before: 'purchase.checkout.reductions.render-before',

  purchase_checkout_shipping__option__item_details_render: 'purchase.checkout.shipping-option-item.details.render',
  purchase_checkout_shipping__option__item_render__after: 'purchase.checkout.shipping-option-item.render-after',
  purchase_checkout_shipping__option__list_render__after: 'purchase.checkout.shipping-option-list.render-after',
  purchase_checkout_shipping__option__list_render__before: 'purchase.checkout.shipping-option-list.render-before',

  purchase_thank__you_block_render: 'purchase.thank-you.block.render',

  purchase_thank__you_cart__line__item_render__after: 'purchase.thank-you.cart-line-item.render-after',
  purchase_thank__you_cart__line__list_render__after: 'purchase.thank-you.cart-line-list.render-after',
  
  purchase_thank__you_chat_render: 'purchase.thank-you.chat.render',
  purchase_thank__you_customer__information_render__after: 'purchase.thank-you.customer-information.render-after',
  purchase_thank__you_footer_render__after: 'purchase.thank-you.footer.render-after',
  purchase_thank__you_header_render__after: 'purchase.thank-you.header.render-after',

  // Unknown targets
  // 'Checkout::Actions::RenderBefore': 'xx',
  // "Checkout::CartLineDetails::RenderAfter": 'xx',
  // "Checkout::CartLineDetails::RenderLineComponents": 'xx',
  // "Checkout::CartLines::RenderAfter": 'xx',
  // "Checkout::Contact::RenderAfter"  : 'xx',
  // "Checkout::CustomerInformation::RenderAfter": 'xx',
  // "Checkout::DeliveryAddress::RenderBefore" : 'xx',
  // "Checkout::Dynamic::Render" : 'xx',
  // "Checkout::GiftCard::Render" : 'xx',
  // "Checkout::OrderStatus::CartLineDetails::RenderAfter" : 'xx',
  // "Checkout::OrderStatus::CartLines::RenderAfter" : 'xx',
  // "Checkout::OrderStatus::CustomerInformation::RenderAfter" : 'xx',
  // "Checkout::OrderStatus::Dynamic::Render" : 'xx',
  // "Checkout::PaymentMethod::HostedFields::RenderAfter" : 'xx',
  // "Checkout::PaymentMethod::Render" : 'xx',
  // "Checkout::PaymentMethod::RenderRequiredAction" : 'xx',
  // "Checkout::PickupLocations::RenderAfter" : 'xx',
  // "Checkout::PickupLocations::RenderBefore" : 'xx',
  // "Checkout::PickupPoints::RenderAfter" : 'xx',
  // "Checkout::PickupPoints::RenderBefore" : 'xx',
  // "Checkout::Reductions::RenderAfter" : 'xx',
  // "Checkout::Reductions::RenderBefore" : 'xx',
  // "Checkout::ShippingMethodDetails::RenderAfter" : 'xx',
  // "Checkout::ShippingMethodDetails::RenderExpanded" : 'xx',
  // "Checkout::ShippingMethods::RenderAfter"  : 'xx',
  // "Checkout::ShippingMethods::RenderBefore" : 'xx',
  // "Checkout::ThankYou::CartLineDetails::RenderAfter" : 'xx',
  // "Checkout::ThankYou::CartLines::RenderAfter" : 'xx',
  // "Checkout::ThankYou::CustomerInformation::RenderAfter" : 'xx',
  // "Checkout::ThankYou::Dynamic::Render" : 'xx',
} satisfies Record<string, CheckoutExtensionTarget>; // prettier-ignore
