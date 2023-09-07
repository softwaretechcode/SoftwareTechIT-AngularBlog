const watchdog = new CKSource.EditorWatchdog();

window.watchdog = watchdog;

watchdog.setCreator( ( element, config ) => {
	return CKSource.Editor
		.create( element, config )
		.then( editor => {
			return editor;
		} );
} );

watchdog.setDestructor( editor => {
	return editor.destroy();
} );

watchdog.on( 'error', handleSampleError );

createDialog().then( config => watchdog.create(
	document.querySelector( '.editor' ), {
		licenseKey: config.licenseKey,
		revisionHistory: {
			editorContainer: document.querySelector( '.editor-container' ),
			viewerContainer: document.querySelector( '.revision-viewer-container' ),
			viewerEditorElement: document.querySelector( '.revision-viewer-editor' ),
			viewerSidebarContainer: document.querySelector( '.revision-viewer-sidebar' )
		},
		ckbox: {
			tokenUrl: config.ckboxTokenUrl
		},
		documentOutline: {
			container: document.querySelector( '.document-outline-container' )
		},
		wproofreader: {
			serviceId: config.wproofreaderServiceId,
			srcUrl: 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js'
		},
		sidebar: {
			container: document.querySelector( '.sidebar' )
		},
		extraPlugins: [
			// Learn more about users at https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/users.html.
			class UsersInit {
				static get requires() {
					return [ 'Users' ];
				}

				constructor( editor ) {
					this.editor = editor;
				}

				init() {
					const users = this.editor.plugins.get( 'Users' );

					users.addUser( {
						id: 'u1'
					} );

					users.defineMe( 'u1' );
				}
			}
		]
	}
) )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "6montgyqv7fy-umlsvj7twz79" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
