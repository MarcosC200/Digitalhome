"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Edit=void 0;const i18n_1=require("@wordpress/i18n"),element_1=require("@wordpress/element"),block_templates_1=require("@woocommerce/block-templates"),data_1=require("@woocommerce/data"),tracks_1=require("@woocommerce/tracks"),components_1=require("@woocommerce/components"),settings_1=require("@woocommerce/settings"),core_data_1=require("@wordpress/core-data"),use_product_attributes_1=require("../../../hooks/use-product-attributes"),attribute_control_1=require("../../../components/attribute-control"),use_product_variations_helper_1=require("../../../hooks/use-product-variations-helper");function Edit({attributes:e,context:t}){const o=(0,block_templates_1.useWooBlockProps)(e),{generateProductVariations:r}=(0,use_product_variations_helper_1.useProductVariationsHelper)(),{updateUserPreferences:i,local_attributes_notice_dismissed_ids:n=[]}=(0,data_1.useUserPreferences)(),[a,s]=(0,core_data_1.useEntityProp)("postType","product","attributes"),[c,_]=(0,core_data_1.useEntityProp)("postType","product","default_attributes"),{postType:d}=t,u=(0,core_data_1.useEntityId)("postType",d),{attributes:l,handleChange:m}=(0,use_product_attributes_1.useProductAttributes)({allAttributes:a,isVariationAttributes:!0,productId:(0,core_data_1.useEntityId)("postType","product"),onChange(e,t){s(e),_(t),r(e,t)}}),p=l.filter((e=>0===e.id)).map((e=>e.name));let b="";return p.length>0&&!(null==n?void 0:n.includes(u))&&(b=(0,element_1.createInterpolateElement)((0,i18n_1.__)("Buyers can’t search or filter by <attributeNames /> to find the variations. Consider adding them again as <globalAttributeLink>global attributes</globalAttributeLink> to make them easier to discover.","woocommerce"),{attributeNames:(0,element_1.createElement)("span",null,2===p.length?p.join((0,i18n_1.__)(" and ","woocommerce")):p.join(", ")),globalAttributeLink:(0,element_1.createElement)(components_1.Link,{href:(0,settings_1.getAdminLink)("edit.php?post_type=product&page=product_attributes"),type:"external",target:"_blank"})})),(0,element_1.createElement)("div",{...o},(0,element_1.createElement)(attribute_control_1.AttributeControl,{value:(0,element_1.useMemo)((function(){return l.map((e=>({...e,isDefault:c.some((t=>t.id===e.id||t.name===e.name))})))}),[l,c]),onAdd:()=>{(0,tracks_1.recordEvent)("product_options_modal_add_button_click")},onChange:m,createNewAttributesAsGlobal:!0,useRemoveConfirmationModal:!0,onNoticeDismiss:()=>i({local_attributes_notice_dismissed_ids:[...n,u]}),onAddAnother:()=>{(0,tracks_1.recordEvent)("product_add_options_modal_add_another_option_button_click")},onNewModalCancel:()=>{(0,tracks_1.recordEvent)("product_options_modal_cancel_button_click")},onNewModalOpen:()=>{(0,tracks_1.recordEvent)("product_options_add_option")},onRemoveItem:()=>{(0,tracks_1.recordEvent)("product_add_options_modal_remove_option_button_click")},onRemove:()=>(0,tracks_1.recordEvent)("product_remove_option_confirmation_confirm_click"),onRemoveCancel:()=>(0,tracks_1.recordEvent)("product_remove_option_confirmation_cancel_click"),disabledAttributeIds:a.filter((e=>!e.variation)).map((e=>e.id)),termsAutoSelection:"all",uiStrings:{notice:b,globalAttributeHelperMessage:"",customAttributeHelperMessage:"",newAttributeModalNotice:"",newAttributeModalTitle:(0,i18n_1.__)("Add variation options","woocommerce"),newAttributeModalDescription:(0,i18n_1.__)("Select from existing attributes or create new ones to add new variations for your product. You can change the order later.","woocommerce"),attributeRemoveLabel:(0,i18n_1.__)("Remove variation option","woocommerce"),attributeRemoveConfirmationModalMessage:(0,i18n_1.__)("If you continue, some variations of this product will be deleted and customers will no longer be able to purchase them.","woocommerce")}}))}exports.Edit=Edit;