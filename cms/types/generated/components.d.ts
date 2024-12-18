import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralButton extends Struct.ComponentSchema {
  collectionName: 'components_general_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    extra_data: Schema.Attribute.JSON;
    has_icon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    has_title: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['link', 'button']>;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outlined', 'link', 'disabled']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface GeneralCard extends Struct.ComponentSchema {
  collectionName: 'components_general_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    card_actions: Schema.Attribute.Component<'general.button', true>;
    card_media: Schema.Attribute.Media<'images' | 'files', true>;
    description: Schema.Attribute.Text;
    extra_data: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface GeneralCardSection extends Struct.ComponentSchema {
  collectionName: 'components_general_card_sections';
  info: {
    displayName: 'card_section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'general.card', true>;
    extra_data: Schema.Attribute.JSON;
    section_description: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface GeneralCarouselSlide extends Struct.ComponentSchema {
  collectionName: 'components_general_carousel_slides';
  info: {
    description: '';
    displayName: 'carousel_slide';
  };
  attributes: {
    carousel_slide_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GeneralPageConfig extends Struct.ComponentSchema {
  collectionName: 'components_general_page_configs';
  info: {
    displayName: 'page_config';
  };
  attributes: {
    footer_present: Schema.Attribute.Boolean;
    header_present: Schema.Attribute.Boolean;
    seo: Schema.Attribute.Component<'general.seo', false>;
    url: Schema.Attribute.String;
  };
}

export interface GeneralSeo extends Struct.ComponentSchema {
  collectionName: 'components_general_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GeneralSlides extends Struct.ComponentSchema {
  collectionName: 'components_general_slides';
  info: {
    description: '';
    displayName: 'carousel_slides';
  };
  attributes: {
    carousel_slide: Schema.Attribute.Component<'general.carousel-slide', true>;
    cta_action: Schema.Attribute.Component<'general.button', false>;
    cta_text: Schema.Attribute.String;
  };
}

export interface ProductsButton extends Struct.ComponentSchema {
  collectionName: 'components_products_buttons';
  info: {
    description: '';
    displayName: 'Product_Button';
  };
  attributes: {
    extra_data: Schema.Attribute.JSON;
    has_icon: Schema.Attribute.Boolean;
    has_label: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    is_relation: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    product_page: Schema.Attribute.Relation<
      'oneToOne',
      'api::per-product-page.per-product-page'
    >;
    type: Schema.Attribute.Enumeration<['link', 'button']>;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outlined', 'link', 'disabled']
    >;
  };
}

export interface ProductsProductCard extends Struct.ComponentSchema {
  collectionName: 'components_products_product_cards';
  info: {
    description: '';
    displayName: 'product_card';
  };
  attributes: {
    card_action: Schema.Attribute.Component<
      'products.product-card-action',
      true
    >;
    card_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.Text;
    extra_data: Schema.Attribute.JSON;
    product_page: Schema.Attribute.Relation<
      'oneToOne',
      'api::per-product-page.per-product-page'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ProductsProductCardAction extends Struct.ComponentSchema {
  collectionName: 'components_products_product_card_actions';
  info: {
    description: '';
    displayName: 'product_card_action';
  };
  attributes: {
    extra_data: Schema.Attribute.JSON;
    has_icon: Schema.Attribute.Boolean;
    has_label: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    is_relation: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['link', 'button']>;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outlined', 'link', 'disabled']
    >;
  };
}

export interface ProductsProductCardSection extends Struct.ComponentSchema {
  collectionName: 'components_products_product_card_sections';
  info: {
    description: '';
    displayName: 'product_card_section';
  };
  attributes: {
    extra_data: Schema.Attribute.JSON;
    products: Schema.Attribute.Component<'products.product-card', true>;
    section_description: Schema.Attribute.Text;
    section_title: Schema.Attribute.String;
  };
}

export interface ProductsProductSpecification extends Struct.ComponentSchema {
  collectionName: 'components_products_product_specifications';
  info: {
    displayName: 'product_specification';
  };
  attributes: {
    eave_height: Schema.Attribute.String;
    main_profile: Schema.Attribute.String;
    ridge_height: Schema.Attribute.String;
    span_width: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.button': GeneralButton;
      'general.card': GeneralCard;
      'general.card-section': GeneralCardSection;
      'general.carousel-slide': GeneralCarouselSlide;
      'general.page-config': GeneralPageConfig;
      'general.seo': GeneralSeo;
      'general.slides': GeneralSlides;
      'products.button': ProductsButton;
      'products.product-card': ProductsProductCard;
      'products.product-card-action': ProductsProductCardAction;
      'products.product-card-section': ProductsProductCardSection;
      'products.product-specification': ProductsProductSpecification;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
