/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
CKEDITOR.editorConfig = function(config) {
    // Define changes to default configuration here.
    // For the complete reference:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config
    // The toolbar groups arrangement, optimized for a single toolbar row.
    config.toolbar = [{
        name: 'document',
        groups: ['mode', 'document', 'doctools'],
        items: ['Source']
    }, {
        name: 'undo',
        groups: ['undo'],
        items: ['Undo', 'Redo']
    }, {
        name: 'basicstyles',
        groups: ['basicstyles', 'cleanup'],
        items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
    }, {
        name: 'links',
        items: ['Link', 'Unlink', ],
    }, {
        name: 'insert',
        items: ['SpecialChar']
    }, ];
    // The default plugins included in the basic setup define some buttons that
    // we don't want too have in a basic editor. We remove them here.
    config.removeButtons = 'Cut,Copy,Paste,Anchor,Strike,Subscript,Superscript';
    // Let's have it basic on dialogs as well.
    config.removeDialogTabs = 'link:advanced';
    config.width = 800;
    config.height = 400;
    config.enterMode = CKEDITOR.ENTER_BR;
    config.disableNativeSpellChecker = false;
};