import { ExtensionTarget as CheckoutExtensionTarget } from '@shopify/ui-extensions/checkout';
import { ExtensionTarget as CustomerAccountExtensionTarget } from '@shopify/ui-extensions/customer-account';

// Using the same naming convention/conversion that we use in prisma
// dot (.) replaced with one underscore (_) and hyphen (-) replaced with two underscores (__)
// then, remove common prefixes (customer__account_, purchase_, etc.)
// ---------------------------------------

// Utility types to transform Shopify extension targets to our key format
type TransformToKey<T extends string> = T extends `customer-account.${infer Rest}`
  ? TransformExtensionKey<Rest>
  : T extends `purchase.${infer Rest}`
    ? TransformExtensionKey<Rest>
    : TransformExtensionKey<T>;

// Recursively transform dots to underscores and hyphens to double underscores
type TransformExtensionKey<T extends string> = T extends `${infer Head}.${infer Tail}`
  ? `${TransformSegment<Head>}_${TransformExtensionKey<Tail>}`
  : TransformSegment<T>;

// Transform individual segments: replace hyphens with double underscores
type TransformSegment<T extends string> = T extends `${infer Head}-${infer Tail}`
  ? `${Head}__${TransformSegment<Tail>}`
  : T;

// Generate type-safe keys from Shopify extension target types
type CustomerAccountKeys = TransformToKey<CustomerAccountExtensionTarget>;
type CheckoutKeys = TransformToKey<CheckoutExtensionTarget>;

export const CUSTOMER_ACCOUNT_EXTENSION_TARGET = {
   order__index_block_render: 'customer-account.order-index.block.render',
   order__index_announcement_render: 'customer-account.order-index.announcement.render',
   
   order__status_block_render: 'customer-account.order-status.block.render',
   order__status_announcement_render: 'customer-account.order-status.announcement.render',
   order__status_cart__line__item_render__after: 'customer-account.order-status.cart-line-item.render-after',
   order__status_cart__line__list_render__after: 'customer-account.order-status.cart-line-list.render-after',
   order__status_customer__information_render__after: 'customer-account.order-status.customer-information.render-after',
   order__status_fulfillment__details_render__after: 'customer-account.order-status.fulfillment-details.render-after',
   order__status_payment__details_render__after: 'customer-account.order-status.payment-details.render-after',
   order__status_return__details_render__after: 'customer-account.order-status.return-details.render-after',
   order__status_unfulfilled__items_render__after: 'customer-account.order-status.unfulfilled-items.render-after',
  
   order_page_render: 'customer-account.order.page.render',
   order_action_render: 'customer-account.order.action.render',
   order_action_menu__item_render: 'customer-account.order.action.menu-item.render',
  
   page_render: 'customer-account.page.render',
  
   profile_block_render: 'customer-account.profile.block.render',
   profile_announcement_render: 'customer-account.profile.announcement.render',
   profile_addresses_render__after: 'customer-account.profile.addresses.render-after',
  
   profile_company__details_render__after: 'customer-account.profile.company-details.render-after',
   profile_company__location__addresses_render__after: 'customer-account.profile.company-location-addresses.render-after',
   profile_company__location__payment_render__after: 'customer-account.profile.company-location-payment.render-after',
   profile_company__location__staff_render__after: 'customer-account.profile.company-location-staff.render-after',
   profile_payment_render__after: 'customer-account.profile.payment.render-after',

   footer_render__after: 'customer-account.footer.render-after',

} as const satisfies Partial<Record<CustomerAccountKeys, CustomerAccountExtensionTarget>>; // prettier-ignore

export const CHECKOUT_EXTENSION_TARGET = {
  address__autocomplete_format__suggestion: 'purchase.address-autocomplete.format-suggestion',
  address__autocomplete_suggest: 'purchase.address-autocomplete.suggest',

  cart__line__item_line__components_render: 'purchase.cart-line-item.line-components.render',

  checkout_actions_render__before: 'purchase.checkout.actions.render-before',
  checkout_block_render: 'purchase.checkout.block.render',

  checkout_cart__line__item_render__after: 'purchase.checkout.cart-line-item.render-after',
  checkout_cart__line__list_render__after: 'purchase.checkout.cart-line-list.render-after',

  checkout_chat_render: 'purchase.checkout.chat.render',

  checkout_contact_render__after: 'purchase.checkout.contact.render-after',
  checkout_delivery__address_render__after: 'purchase.checkout.delivery-address.render-after',
  checkout_delivery__address_render__before: 'purchase.checkout.delivery-address.render-before',
  checkout_footer_render__after: 'purchase.checkout.footer.render-after',

  checkout_gift__card_render: 'purchase.checkout.gift-card.render',
  checkout_header_render__after: 'purchase.checkout.header.render-after',

  checkout_payment__method__list_render__after: 'purchase.checkout.payment-method-list.render-after',
  checkout_payment__method__list_render__before: 'purchase.checkout.payment-method-list.render-before',

  checkout_payment__option__item_action__required_render: 'purchase.checkout.payment-option-item.action-required.render',
  checkout_payment__option__item_details_render: 'purchase.checkout.payment-option-item.details.render',
  checkout_payment__option__item_hosted__fields_render__after: 'purchase.checkout.payment-option-item.hosted-fields.render-after',

  checkout_pickup__location__list_render__after: 'purchase.checkout.pickup-location-list.render-after',
  checkout_pickup__location__list_render__before: 'purchase.checkout.pickup-location-list.render-before',
  checkout_pickup__location__option__item_render__after: 'purchase.checkout.pickup-location-option-item.render-after',

  checkout_pickup__point__list_render__after: 'purchase.checkout.pickup-point-list.render-after',
  checkout_pickup__point__list_render__before: 'purchase.checkout.pickup-point-list.render-before',

  checkout_reductions_render__after: 'purchase.checkout.reductions.render-after',
  checkout_reductions_render__before: 'purchase.checkout.reductions.render-before',

  checkout_shipping__option__item_details_render: 'purchase.checkout.shipping-option-item.details.render',
  checkout_shipping__option__item_render__after: 'purchase.checkout.shipping-option-item.render-after',
  checkout_shipping__option__list_render__after: 'purchase.checkout.shipping-option-list.render-after',
  checkout_shipping__option__list_render__before: 'purchase.checkout.shipping-option-list.render-before',

  thank__you_block_render: 'purchase.thank-you.block.render',

  thank__you_cart__line__item_render__after: 'purchase.thank-you.cart-line-item.render-after',
  thank__you_cart__line__list_render__after: 'purchase.thank-you.cart-line-list.render-after',
  
  thank__you_chat_render: 'purchase.thank-you.chat.render',
  thank__you_announcement_render: 'purchase.thank-you.announcement.render',
  thank__you_header_render__after: 'purchase.thank-you.header.render-after',
  thank__you_footer_render__after: 'purchase.thank-you.footer.render-after',
  thank__you_customer__information_render__after: 'purchase.thank-you.customer-information.render-after',
  

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
} as const satisfies Partial<Record<CheckoutKeys, CheckoutExtensionTarget>>; // prettier-ignore
