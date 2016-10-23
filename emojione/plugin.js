CKEDITOR.plugins.add( 'emojione', {
    icons: 'emojione',
    init: function( editor ) {
		editor.addCommand( 'emojione', new CKEDITOR.dialogCommand( 'emojioneDialog' ) );
		editor.ui.addButton( 'emojione', {
			label: 'Insert EmojiOne',
			command: 'emojione',
			toolbar: ''
		});
		CKEDITOR.dialog.add( 'emojioneDialog', this.path + 'dialogs/emojione.js' );
    }
});
