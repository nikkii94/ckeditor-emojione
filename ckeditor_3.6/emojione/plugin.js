
CKEDITOR.plugins.add( 'emojione', {
    icons: 'emojione',
    init: function( editor ) {
		editor.addCommand( 'emojione', new CKEDITOR.dialogCommand( 'emojioneDialog' ) );
		editor.ui.addButton( 'Emojione', {
			label: 'Insert EmojiOne',
			command: 'emojione',
			toolbar: '',
			icon: this.path + 'icons/emojione.png'
		});
		CKEDITOR.dialog.add( 'emojioneDialog', this.path + 'dialogs/emojione.js' );
    }
});
